import { ProductLink } from "@/components/ui/product-card";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AddToCartForm } from "@/components/add-to-cart-form";
import { Metadata } from "next";
import { headers as nextHeaders } from "next/headers";
import { userAgent } from "next/server";
import { cookies } from "next/headers";

import { getProductDetails, getProductsForSubcategory, getRelatedProducts, saveProductView, logRequest } from "@/lib/queries";

export async function generateMetadata(props: {
  params: Promise<{ product: string; category: string; subcategory: string }>;
}): Promise<Metadata> {
  const { product: productParam } = await props.params;
  const urlDecodedProduct = decodeURIComponent(productParam);

  const product = await getProductDetails(urlDecodedProduct);

  if (!product) {
    return notFound();
  }

  return {
    openGraph: { title: product.productData.name, description: product.productData.description },
  };
}

export default async function Page(props: {
  params: Promise<{
    product: string;
    subcategory: string;
    category: string;
  }>;
}) {
  const { product, subcategory, category } = await props.params;
  const urlDecodedProduct = decodeURIComponent(product);
  const urlDecodedSubcategory = decodeURIComponent(subcategory);
  
  // Get headers and user agent outside of cache scope
  const h = await nextHeaders();
  const ua = userAgent({ headers: h });
  const cookieStore = await cookies();
  const sid = cookieStore.get("nf_session_id")?.value;
  
  const [{ productData, api_latency_ms }, relatedUnshifted] = await Promise.all([
    getProductDetails(urlDecodedProduct),
    // getProductsForSubcategory(urlDecodedSubcategory),
    getRelatedProducts(urlDecodedSubcategory, urlDecodedProduct),
  ]);

  // Log request outcome (success assumed here; wrap in try/catch if you need to log failures)
  logRequest(true, 200, sid, `/products/${category}/${subcategory}/${product}`).catch(console.error);


  await saveProductView(productData.name, productData.slug, api_latency_ms);

  if (!productData) {
    return notFound();
  }
  // const currentProductIndex = relatedUnshifted.findIndex(
  //   (p) => p.slug === productData.slug,
  // );
  // const related = [
  //   ...relatedUnshifted.slice(currentProductIndex + 1),
  //   ...relatedUnshifted.slice(0, currentProductIndex),
  // ];

  const related = relatedUnshifted;

  return (
    <div className="container p-4">
      <h1 className="border-t-2 pt-1 text-xl font-bold text-accent1">
        {productData.name}
      </h1>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <Image
            loading="eager"
            decoding="sync"
            src={productData.image_url ?? "/placeholder.svg?height=64&width=64"}
            alt={`A small picture of ${productData.name}`}
            height={256}
            quality={75}
            width={256}
            className="h-56 w-56 flex-shrink-0 border-2 md:h-64 md:w-64"
          />
          <p className="flex-grow text-base">{productData.description}</p>
        </div>
        <p className="text-xl font-bold">
          ${parseFloat(productData.price).toFixed(2)}
        </p>
        <AddToCartForm productSlug={productData.slug} />
      </div>
      <div className="pt-8">
        {related.length > 0 && (
          <h2 className="text-lg font-bold text-accent1">
            Explore more products
          </h2>
        )}
        <div className="flex flex-row flex-wrap gap-2">
          {related?.map((product) => (
            <ProductLink
              key={product.slug}
              loading="lazy"
              category_slug={category}
              subcategory_slug={subcategory}
              product={product}
              imageUrl={product.image_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
