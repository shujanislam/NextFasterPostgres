"use server";

import pool from "@/db";
import { getCart, updateCart } from "./cart";

export async function addToCart(prevState: unknown, formData: FormData) {
  const prevCart = await getCart();
  const productSlug = formData.get("productSlug");
  
  const rows = await pool.query(`SELECT * FROM products WHERE slug = $1 LIMIT 10`, [productSlug]);

  const insertCartMetrics = await pool.query(`INSERT INTO cart_metrics(product, category, device_type) VALUES($1, $2, $3)`, [rows.rows[0].name, rows.rows[0].subcategory_slug, 'Laptop']);
  
  if (typeof productSlug !== "string") {
    return;
  }
  const itemAlreadyExists = prevCart.find(
    (item) => item.productSlug === productSlug,
  );
  if (itemAlreadyExists) {
    const newQuantity = itemAlreadyExists.quantity + 1;
    const newCart = prevCart.map((item) => {
      if (item.productSlug === productSlug) {
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    await updateCart(newCart);
  } else {
    const newCart = [
      ...prevCart,
      {
        productSlug,
        quantity: 1,
      },
    ];
    await updateCart(newCart);
  }

  return "Item added to cart";
}

export async function removeFromCart(formData: FormData) {
  const prevCart = await getCart();
  const productSlug = formData.get("productSlug");
  if (typeof productSlug !== "string") {
    return;
  }
  const itemAlreadyExists = prevCart.find(
    (item) => item.productSlug === productSlug,
  );
  if (!itemAlreadyExists) {
    return;
  }
  const newCart = prevCart.filter((item) => item.productSlug !== productSlug);
  await updateCart(newCart);
}
