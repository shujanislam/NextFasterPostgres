import { getSearchResults } from "@/lib/queries";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchTerm = request.nextUrl.searchParams.get("q");
  if (!searchTerm?.length) return Response.json([]);

  const results = await getSearchResults(searchTerm);

  const searchResults = results.map((item) => ({
    slug: item.slug,
    name: item.name,
    description: item.description,
    price: item.price,
    image_url: item.image_url,
    subcategory_slug: item.subcategory_slug,
    category_slug: item.category_slug,
    href: `/products/${item.category_slug}/${item.subcategory_slug}/${item.slug}`,
  }));

  const response = Response.json(searchResults);
  response.headers.set("Cache-Control", "public, max-age=600");
  return response;
}

export type ProductSearchResult = {
  href: string;
  name: string;
  slug: string;
  image_url: string | null;
  description: string;
  price: string;
  subcategory_slug: string;
}[];
