import Image from "next/image";
import { Link } from "@/components/ui/link";
import { notFound } from "next/navigation";
import pool from "@/db";
import { getCategoryProductCount, logRequest } from "@/lib/queries";
import { cookies } from "next/headers";

export default async function Page(props: { params: { category: string } }) {
  const { category } = await props.params;
  const urlDecoded = decodeURIComponent(category);

  // Fetch category + subcollections + subcategories
  try {
  const { rows } = await pool.query(
    `
    SELECT
      c.slug AS category_slug,
      c.name AS category_name,
      sc.id AS subcollection_id,
      sc.name AS subcollection_name,
      s.slug AS subcategory_slug,
      s.name AS subcategory_name,
      s.image_url AS subcategory_image
    FROM categories c
    LEFT JOIN subcollections sc
      ON sc.category_slug = c.slug
    LEFT JOIN subcategories s
      ON s.subcollection_id = sc.id
    WHERE c.slug = $1
    ORDER BY sc.name, s.name
    `,
    [urlDecoded]
  );

  if (rows.length === 0) {
    const sid = (await cookies()).get("nf_session_id")?.value;
    logRequest(false, 404, sid, `/products/${urlDecoded}`).catch(console.error);
    return notFound();
  }

  // Group subcollections + subcategories
  const subcollectionsMap: Record<string, any> = {};
  rows.forEach((row) => {
    if (!subcollectionsMap[row.subcollection_id]) {
      subcollectionsMap[row.subcollection_id] = {
        id: row.subcollection_id,
        name: row.subcollection_name,
        subcategories: [],
      };
    }
    if (row.subcategory_slug) {
      subcollectionsMap[row.subcollection_id].subcategories.push({
        slug: row.subcategory_slug,
        name: row.subcategory_name,
        image_url: row.subcategory_image,
      });
    }
  });

  const subcollections = Object.values(subcollectionsMap);

  // Get total product count
  const finalCountRes = await getCategoryProductCount(urlDecoded);
  const finalCount = finalCountRes ?? 0;

  const sid = (await cookies()).get("nf_session_id")?.value;
  logRequest(true, 200, sid, `/products/${urlDecoded}`).catch(console.error);

  return (
    <div className="container p-4">
      <h1 className="mb-4 border-b-2 text-sm font-bold">
        {finalCount} {finalCount === 1 ? "Product" : "Products"}
      </h1>

      {subcollections.length > 0 ? (
        <div className="space-y-4">
          {subcollections.map((subcollection) => (
            <div key={subcollection.id}>
              <h2 className="mb-2 border-b-2 text-lg font-semibold">
                {subcollection.name}
              </h2>
              <div className="flex flex-row flex-wrap gap-2">
                {subcollection.subcategories.length > 0 ? (
                  subcollection.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory.slug}
                      className="group flex h-full w-full flex-row gap-2 border px-4 py-2 hover:bg-gray-100 sm:w-[200px]"
                      href={`/products/${category}/${subcategory.slug}`}
                    >
                      <div className="py-2">
                        <Image
                          loading="eager"
                          decoding="sync"
                          src={subcategory.image_url ?? "/placeholder.svg"}
                          alt={`A small picture of ${subcategory.name}`}
                          width={48}
                          height={48}
                          quality={65}
                          className="h-12 w-12 flex-shrink-0 object-cover"
                        />
                      </div>
                      <div className="flex h-16 flex-grow flex-col items-start py-2">
                        <div className="text-sm font-medium text-gray-700 group-hover:underline">
                          {subcategory.name}
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div>No subcategories found.</div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No subcollections found.</div>
      )}
    </div>
  );
  } catch (e) {
    const sid = (await cookies()).get("nf_session_id")?.value;
    logRequest(false, 500, sid, `/products/${urlDecoded}`).catch(console.error);
    throw e;
  }
}
