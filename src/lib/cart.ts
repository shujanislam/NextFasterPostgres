import { cookies } from "next/headers";
import { z } from "zod";
import pool from "@/db";

/* ----------------------------- SCHEMA ----------------------------- */

const cartSchema = z.array(
  z.object({
    productSlug: z.string(),
    quantity: z.number(),
  }),
);

export type CartItem = z.infer<typeof cartSchema>[number];

/* ----------------------------- COOKIE ----------------------------- */

export async function updateCart(newItems: CartItem[]) {
  const cookieStore = await cookies();

  cookieStore.set("cart", JSON.stringify(newItems), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function getCart(): Promise<CartItem[]> {
  const cookieStore = await cookies(); // ← MUST await
  const cart = cookieStore.get("cart");

  if (!cart) return [];

  try {
    return cartSchema.parse(JSON.parse(cart.value));
  } catch {
    console.error("Failed to parse cart cookie");
    return [];
  }
}

/* ----------------------------- DETAILED CART ----------------------------- */

export async function detailedCart() {
  const cart = await getCart();
  if (cart.length === 0) return [];

  const slugs = cart.map((item) => item.productSlug);

  const { rows: products } = await pool.query(
    `
    SELECT
      p.*,
      s.slug        AS subcategory_slug,
      sc.id         AS subcollection_id,
      sc.name       AS subcollection_name,
      sc.category_slug
    FROM products p
    JOIN subcategories s
      ON p.subcategory_slug = s.slug
    JOIN subcollections sc
      ON s.subcollection_id = sc.id
    WHERE p.slug = ANY($1)
    `,
    [slugs],
  );

  const quantityMap = new Map(
    cart.map((item) => [item.productSlug, item.quantity]),
  );

  return products.map((product) => ({
    ...product,
    quantity: quantityMap.get(product.slug) ?? 0,
  }));
}
