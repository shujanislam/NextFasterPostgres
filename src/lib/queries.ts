import { cookies } from "next/headers";
import { unstable_cache } from "./unstable-cache";
import { verifyToken } from "./session";
import pool from "@/db";

/* ----------------------------- USER ----------------------------- */

export async function getUser() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session");

  if (!sessionCookie?.value) return null;

  const sessionData = await verifyToken(sessionCookie.value);

  if (
    !sessionData?.user ||
    typeof sessionData.user.id !== "number" ||
    new Date(sessionData.expires) < new Date()
  ) {
    return null;
  }

  const start: int = performance.now();

  const { rows } = await pool.query(
    `
    SELECT id, username 
    FROM users
    WHERE id = $1
    `,
    [sessionData.user.id],
  );

  const end: int = performance.now();

  console.log(
    `getUser: start: ${start}, end: ${end}, query time: ${end - start}ms`,
  );

  return rows[0] ?? null;
}

/* ----------------------------- PRODUCTS ----------------------------- */

export const getProductsForSubcategory = unstable_cache(
  async (subcategorySlug: string) => {
    const start: int = performance.now();

    const { rows } = await pool.query(
      `
      SELECT slug, name, price, image_url
      FROM products
      WHERE subcategory_slug = $1
      ORDER BY slug ASC
      LIMIT 50
      `,
      [subcategorySlug],
    );

    const end: int = performance.now();

    console.log(`getProducts query time: ${end - start}ms`);

    console.log("just an update");

    return rows;
  },
  (subcategorySlug: string) => ["subcategory-products", subcategorySlug],
  { revalidate: 60 * 60 * 2 },
);

export const getRelatedProducts = unstable_cache(
  async (subcategorySlug: string, currentSlug: string) => {
    const start: int = performance.now();
    // 1) get count (fast, index-backed)
    const countRes = await pool.query(
      `
      SELECT COUNT(*)::int AS count
      FROM products
      WHERE subcategory_slug = $1
        AND slug <> $2
      `,
      [subcategorySlug, currentSlug],
    );

    const count = countRes.rows[0].count;
    if (count === 0) return [];

    // 2) random offset (cheap)
    const offset = Math.floor(Math.random() * Math.max(count - 10, 1));

    // 3) fetch slice
    const { rows } = await pool.query(
      `
      SELECT slug, name, price, image_url
      FROM products
      WHERE subcategory_slug = $1
        AND slug <> $2
      ORDER BY slug
      OFFSET $3
      LIMIT 10
      `,
      [subcategorySlug, currentSlug, offset],
    );

    const end: int = performance.now();

    console.log(`related products query time: ${end - start}ms`);

    return rows;
  },
  // 🔑 cache key MUST include currentSlug
  (subcategorySlug: string, currentSlug: string) => [
    "related-products",
    subcategorySlug,
    currentSlug,
  ],
  { revalidate: 60 * 60 * 2 },
);

export const getProductDetails = unstable_cache(
  async (productSlug: string) => {
    const { rows } = await pool.query(
      `
      SELECT *
      FROM products
      WHERE slug = $1
      LIMIT 1
      `,
      [productSlug],
    );
    return rows[0] ?? null;
  },
  ["product"],
  { revalidate: 60 * 60 * 2 },
);

/* ----------------------------- COLLECTIONS ----------------------------- */

export const getCollections = unstable_cache(
  async () => {
    const { rows } = await pool.query(
      `
      SELECT
        c.*,
        COALESCE(
          json_agg(cat.* ORDER BY cat.name)
          FILTER (WHERE cat.slug IS NOT NULL),
          '[]'
        ) AS categories
      FROM collections c
      LEFT JOIN categories cat
        ON cat.collection_id = c.id
      GROUP BY c.id
      ORDER BY c.name ASC
      `,
    );
    console.log(rows);
    return rows;
  },
  ["collections"],
  { revalidate: 60 * 60 * 2 },
);

export const getCollectionDetails = unstable_cache(
  async (collectionSlug: string) => {
    const { rows } = await pool.query(
      `
      SELECT
        c.*,
        COALESCE(
          json_agg(cat.* ORDER BY cat.name)
          FILTER (WHERE cat.slug IS NOT NULL),
          '[]'
        ) AS categories
      FROM collections c
      LEFT JOIN categories cat
        ON cat.collection_id = c.id
      WHERE c.slug = $1
      GROUP BY c.id
      `,
      [collectionSlug],
    );

    return rows;
  },
  ["collection"],
  { revalidate: 60 * 60 * 2 },
);
/* ----------------------------- CATEGORIES ----------------------------- */

export const getCategory = unstable_cache(
  async (categorySlug: string) => {
    const { rows } = await pool.query(
      `
      SELECT
        c.slug,
        c.name,
        c.image_url,
        COALESCE(
          json_agg(
            json_build_object(
              'id', sc.id,
              'name', sc.name,
              'subcategories', (
                SELECT COALESCE(
                  json_agg(
                    json_build_object(
                      'slug', s.slug,
                      'name', s.name,
                      'image_url', s.image_url
                    )
                    ORDER BY s.slug
                  ),
                  '[]'::json
                )
                FROM subcategories s
                WHERE s.subcollection_id = sc.id
              )
            )
            ORDER BY sc.name
          ) FILTER (WHERE sc.id IS NOT NULL),
          '[]'::json
        ) AS subcollections
      FROM categories c
      LEFT JOIN subcollections sc
        ON sc.category_slug = c.slug
      WHERE c.slug = $1
      GROUP BY c.slug, c.name, c.image_url
      `,
      [categorySlug],
    );

    return rows[0] ?? null;
  },
  ["category"],
  { revalidate: 60 * 60 * 2 },
);

export const getSubcategory = unstable_cache(
  async (subcategorySlug: string) => {
    const { rows } = await pool.query(
      `
      SELECT *
      FROM subcategories
      WHERE slug = $1
      LIMIT 1
      `,
      [subcategorySlug],
    );
    return rows[0] ?? null;
  },
  ["subcategory"],
  { revalidate: 60 * 60 * 2 },
);

/* ----------------------------- COUNTS ----------------------------- */

export const getProductCount = unstable_cache(
  async () => {
    const start: int = performance.now();

    const { rows } = await pool.query(
      `SELECT COUNT(*)::int AS count FROM products`,
    );

    const end: int = performance.now();

    console.log(
      `getProductCount : start: ${start}, end: ${end}, query time: ${end - start}ms`,
    );

    console.log(rows);

    return rows[0].count;
  },
  ["total-product-count"],
  { revalidate: 60 * 60 * 2 },
);

export const getCategoryProductCount = unstable_cache(
  async (categorySlug: string) => {
    const start: int = performance.now();

    const { rows } = await pool.query(
      `
      SELECT COUNT(p.*)::int AS count
      FROM categories c
      LEFT JOIN subcollections sc
        ON sc.category_slug = c.slug
      LEFT JOIN subcategories s
        ON s.subcollection_id = sc.id
      LEFT JOIN products p
        ON p.subcategory_slug = s.slug
      WHERE c.slug = $1
      `,
      [categorySlug],
    );

    // console.log(`getCategoryProductCount: ${rows}`);

    const end: int = performance.now();

    console.log(
      `getCategoryProductCount : start: ${start}, end: ${end}, query time: ${end - start}ms`,
    );

    return rows[0].count;
  },
  ["category-product-count"],
  { revalidate: 60 * 60 * 2 },
);

export const getSubcategoryProductCount = unstable_cache(
  async (subcategorySlug: string) => {
    const start: int = performance.now();
    const { rows } = await pool.query(
      `
      SELECT COUNT(*)::int AS count
      FROM products
      WHERE subcategory_slug = $1
      `,
      [subcategorySlug],
    );

    // console.log(rows);

    const end: int = performance.now();

    console.log(
      `getSubcategoryProductCount : start: ${start}, end: ${end}, query time: ${end - start}ms`,
    );

    return rows[0].count;
  },
  ["subcategory-product-count"],
  { revalidate: 60 * 60 * 2 },
);

/* ----------------------------- SEARCH ----------------------------- */

export const getSearchResults = unstable_cache(
  async (searchTerm: string) => {
    const baseQuery = `
      SELECT
        p.slug,
        p.name,
        p.description,
        p.price,
        p.image_url,
        s.slug AS subcategory_slug,
        c.slug AS category_slug
      FROM products p
      JOIN subcategories s
        ON p.subcategory_slug = s.slug
      JOIN subcollections sc
        ON s.subcollection_id = sc.id
      JOIN categories c
        ON sc.category_slug = c.slug
    `;

    if (searchTerm.length <= 2) {
      const { rows } = await pool.query(
        `
        ${baseQuery}
        WHERE p.name ILIKE $1
        LIMIT 5
        `,
        [`${searchTerm}%`],
      );
      return rows;
    }

    const tsQuery = searchTerm
      .split(" ")
      .filter(Boolean)
      .map((t) => `${t}:*`)
      .join(" & ");

    const { rows } = await pool.query(
      `
      ${baseQuery}
      WHERE to_tsvector('english', p.name)
            @@ to_tsquery('english', $1)
      LIMIT 5
      `,
      [tsQuery],
    );

    return rows;
  },
  ["search-results"],
  { revalidate: 60 * 60 * 2 },
);
