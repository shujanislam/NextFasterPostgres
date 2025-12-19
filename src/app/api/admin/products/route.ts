import { NextResponse } from "next/server";
import { uploadProduct } from "@/lib/queries";

export async function POST(req: Request) {
  const body = await req.json();

  const { subcategory_slug, name, price, description, image_url } = body;

  if (!subcategory_slug || !name || typeof price !== "number") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const result = await uploadProduct(
    subcategory_slug,
    name,
    price,
    description ?? "",
    image_url ?? "",
  );

  return NextResponse.json({ ok: true, result });
}
