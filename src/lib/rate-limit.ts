import { Ratelimit } from "@upstash/ratelimit"; // for deno: see above
import { Redis } from "@upstash/redis"; // see below for cloudflare and fastly adapters

const isDev = process.env.NODE_ENV === "development";

let redis: Redis | null = null;

if (!isDev) {
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    throw new Error(
      "Please link a Vercel KV instance or populate `KV_REST_API_URL` and `KV_REST_API_TOKEN`",
    );
  }

  redis = new Redis({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
  });
}

// Export dummy rate limiters in development
export const authRateLimit = isDev
  ? { limit: async () => ({ success: true }) }
  : new Ratelimit({
      redis: redis!,
      limiter: Ratelimit.slidingWindow(5, "15 m"),
      analytics: true,
      prefix: "ratelimit:auth",
    });

export const signUpRateLimit = isDev
  ? { limit: async () => ({ success: true }) }
  : new Ratelimit({
      redis: redis!,
      limiter: Ratelimit.slidingWindow(1, "15 m"),
      analytics: true,
      prefix: "ratelimit:signup",
    });
