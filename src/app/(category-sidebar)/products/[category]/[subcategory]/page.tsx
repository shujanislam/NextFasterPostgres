import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductLink } from "@/components/ui/product-card";
import type { Metadata } from "next";
import {
  getProductsForSubcategory,
  getSubcategory,
  getSubcategoryProductCount,
  logRequest,
} from "@/lib/queries";
import { cookies } from "next/headers";

export async function generateMetadata(props: {
  params: Promise<{ category: string; subcategory: string }>;
}): Promise<Metadata> {
  const { subcategory: subcategoryParam } = await props.params;
  const urlDecodedSubcategory = decodeURIComponent(subcategoryParam);

  const [subcategory, rows] = await Promise.all([
    getSubcategory(urlDecodedSubcategory),
    getSubcategoryProductCount(urlDecodedSubcategory),
  ]);

  if (!subcategory) notFound();

  const count = rows[0]?.count ?? 0;
  const description =
    count > 0
      ? `Choose from over ${Math.max(count - 1, 0)} products in ${subcategory.name}. In stock and ready to ship.`
      : undefined;

  return {
    openGraph: { title: subcategory.name, description },
  };
}

export default async function Page(props: {
  params: Promise<{ subcategory: string; category: string }>;
  searchParams?: Promise<{ after?: string }>;
}) {
  const { subcategory, category } = await props.params;

  const sp = props.searchParams ? await props.searchParams : {};
  const after = sp.after ? decodeURIComponent(sp.after) : null;

  const urlDecodedSubcategory = decodeURIComponent(subcategory);

  const [products, countRows] = await Promise.all([
    getProductsForSubcategory(urlDecodedSubcategory, after),
    getSubcategoryProductCount(urlDecodedSubcategory),
  ]);

  if (!products) notFound();

  const totalCount = countRows[0]?.count ?? 0;

  const sid = (await cookies()).get("nf_session_id")?.value;
  logRequest(true, 200, sid).catch(console.error);

  // next cursor = last slug in the current batch
  const nextAfter = products.length ? products[products.length - 1].slug : null;

  // if we got fewer than 20 items, there's probably no more
  const hasMore = products.length === 20 && nextAfter !== null;

  return (
    <div className="container mx-auto p-4">
      {totalCount > 0 ? (
        <h1 className="mb-2 border-b-2 text-sm font-bold">
          {totalCount} {totalCount === 1 ? "Product" : "Products"}
        </h1>
      ) : (
        <p>No products for this subcategory</p>
      )}

      <div className="flex flex-row flex-wrap gap-2">
        {products.map((product) => (
          <ProductLink
            key={product.slug}
            loading="eager"
            category_slug={category}
            subcategory_slug={subcategory}
            product={product}
            imageUrl={product.image_url}
          />
        ))}
      </div>

      <div className="mt-6">
        {hasMore ? (
          <Link
            className="inline-block rounded border px-3 py-2 text-sm"
            href={`?after=${encodeURIComponent(nextAfter!)}`}
          >
            Load more...
          </Link>
        ) : (
          <p className="text-sm">No more products.</p>
        )}
      </div>
    </div>
  );
}
