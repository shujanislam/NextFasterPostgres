"use server";

import { z } from "zod";
import { eq } from "drizzle-orm";
import { cookies, headers } from "next/headers";
import { validatedAction } from "@/lib/middleware";
import pool from "../../db/index.ts";
import { comparePasswords, hashPassword, setSession } from "@/lib/session";
import { authRateLimit, signUpRateLimit } from "@/lib/rate-limit";

const authSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export const signUp = validatedAction(authSchema, async (data) => {
  const { username, password } = data;
  const ip = (await headers()).get("x-real-ip") ?? "local";
  const rl2 = await signUpRateLimit.limit(ip);
  if (!rl2.success) {
    return {
      error: {
        code: "AUTH_ERROR",
        message: "Too many signups. Try again later",
      },
    };
  }

  const existingUser = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

  if (existingUser.rows.length > 0) {
    return { error: "Username already taken. Please try again." };
  }

  const passwordHash = await hashPassword(password);

  const newUser: NewUser = {
    username,
    passwordHash,
  };

  const createdUser = await pool.query('INSERT INTO users(username, password_hash) VALUES($1, $2) RETURNING *', [username, passwordHash]);

  if (!createdUser) {
    return { error: "Failed to create user. Please try again." };
  }
 
  await pool.query(`INSERT INTO users_metrics(username, registered_at, last_login_at, last_logout_at) VALUES($1, now(), now(), NULL)`, [username]); 

  await setSession(createdUser.rows[0]);
});

export const signIn = validatedAction(authSchema, async (data) => {
  const { username, password } = data;
  const ip = (await headers()).get("x-real-ip") ?? "local";
  const rl = await authRateLimit.limit(ip);

  if (!rl.success) {
    return {
      error: {
        code: "AUTH_ERROR",
        message: "Too many attempts. Try again later",
      },
    };
  }
  
  const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

  if (user.rows.length === 0) {
    return { error: "Invalid username or password. Please try again." };
  }

  const foundUser = user.rows[0];

  const isPasswordValid = await comparePasswords(
    password,
    foundUser.password_hash,
  );

  if (!isPasswordValid) {
    return { error: "Invalid username or password. Please try again." };
  }

  await pool.query(`UPDATE users_metrics SET last_login_at = now() WHERE username = $1`, [username]);

  await setSession(foundUser);
});

export async function signOut() {
  // clear session & cart
  const c = await cookies();
  c.getAll().forEach((cookie) => c.delete(cookie.name));  
}
