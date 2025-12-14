module.exports = [
"[project]/src/lib/unstable-cache.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_cache",
    ()=>unstable_cache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
const unstable_cache = (callback, key, options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(callback, key, options));
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[project]/src/lib/session.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comparePasswords",
    ()=>comparePasswords,
    "getSession",
    ()=>getSession,
    "hashPassword",
    ()=>hashPassword,
    "setSession",
    ()=>setSession,
    "signToken",
    ()=>signToken,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/jwt/sign.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/jwt/verify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
;
const key = new TextEncoder().encode(process.env.AUTH_SECRET);
const SALT_ROUNDS = 10;
async function hashPassword(password) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hash"])(password, SALT_ROUNDS);
}
async function comparePasswords(plainTextPassword, hashedPassword) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compare"])(plainTextPassword, hashedPassword);
}
async function signToken(payload) {
    return await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt().setExpirationTime("1 day from now").sign(key);
}
async function verifyToken(input) {
    const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jwtVerify"])(input, key, {
        algorithms: [
            "HS256"
        ]
    });
    return payload;
}
async function getSession() {
    const session = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).get("session")?.value;
    if (!session) return null;
    return await verifyToken(session);
}
async function setSession(user) {
    const expiresInOneDay = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const session = {
        user: {
            id: user.id
        },
        expires: expiresInOneDay.toISOString()
    };
    const encryptedSession = await signToken(session);
    (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).set("session", encryptedSession, {
        expires: expiresInOneDay,
        httpOnly: true,
        secure: true,
        sameSite: "lax"
    });
}
}),
"[externals]/pg [external] (pg, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("pg");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/db/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// import * as schema from "./schema";
// import { drizzle } from "drizzle-orm/neon-http";
// import { neon } from "@neondatabase/serverless";
//
// const sql = neon(
//   "postgresql://neondb_owner:npg_A6mkNxw3uiZn@ep-dark-water-ahidvgxk-pooler.c-3.us-east-1.aws.neon.tech/neondb",
// );
// export const db = drizzle({ client: sql, schema });
//
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["Pool"]({
    user: 'shujan',
    host: 'localhost',
    database: 'nextfaster',
    password: 'shujan@786',
    port: 5432
});
pool.on('connect', ()=>{
    console.log('pool working');
});
pool.on('error', (err)=>{
    console.log(err.message);
});
const __TURBOPACK__default__export__ = pool;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/queries.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getCategory",
    ()=>getCategory,
    "getCategoryProductCount",
    ()=>getCategoryProductCount,
    "getCollectionDetails",
    ()=>getCollectionDetails,
    "getCollections",
    ()=>getCollections,
    "getProductCount",
    ()=>getProductCount,
    "getProductDetails",
    ()=>getProductDetails,
    "getProductsForSubcategory",
    ()=>getProductsForSubcategory,
    "getSearchResults",
    ()=>getSearchResults,
    "getSubcategory",
    ()=>getSubcategory,
    "getSubcategoryProductCount",
    ()=>getSubcategoryProductCount,
    "getUser",
    ()=>getUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$unstable$2d$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/unstable-cache.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/index.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function getUser() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const sessionCookie = cookieStore.get("session");
    if (!sessionCookie?.value) return null;
    const sessionData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyToken"])(sessionCookie.value);
    if (!sessionData?.user || typeof sessionData.user.id !== "number" || new Date(sessionData.expires) < new Date()) {
        return null;
    }
    const { rows } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].query(`
    SELECT id, username 
    FROM users
    WHERE id = $1
    `, [
        sessionData.user.id
    ]);
    return rows[0] ?? null;
}
const getProductsForSubcategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$unstable$2d$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (subcategorySlug)=>{
    const { rows } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].query(`
      SELECT *
      FROM products
      WHERE subcategory_slug = $1
      ORDER BY slug ASC
      `, [
        subcategorySlug
    ]);
    return rows;
}, [
    "subcategory-products"
], {
    revalidate: 60 * 60 * 2
});
const getProductDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$unstable$2d$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (productSlug)=>{
    const { rows } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].query(`
      SELECT *
      FROM products
      WHERE slug = $1
      LIMIT 1
      `, [
        productSlug
    ]);
    console.log("product details " + rows[0]);
    return rows[0] ?? null;
}, [
    "product"
], {
    revalidate: 60 * 60 * 2
});
const getCollections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$unstable$2d$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async ()=>{
    const { rows } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].query(`
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
      `);
    console.log("collections " + rows);
    return rows;
}, [
    "collections"
], {
    revalidate: 60 * 60 * 2
});
const getCollectionDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$unstable$2d$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (collectionSlug)=>{
    const { rows } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].query(`
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
      `, [
        collectionSlug
    ]);
    console.log("collecion details " + rows);
    return rows;
}, [
    "collection"
], {
    revalidate: 60 * 60 * 2
});
const getCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$unstable$2d$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (categorySlug)=>{
    const { rows } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].query(`
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
      `, [
        categorySlug
    ]);
    return rows[0] ?? null;
}, [
    "category"
], {
    revalidate: 60 * 60 * 2
});
const getSubcategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$unstable$2d$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (subcategorySlug)=>{
    const { rows } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].query(`
      SELECT *
      FROM subcategories
      WHERE slug = $1
      LIMIT 1
      `, [
        subcategorySlug
    ]);
    return rows[0] ?? null;
}, [
    "subcategory"
], {
    revalidate: 60 * 60 * 2
});
const getProductCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$unstable$2d$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async ()=>{
    const { rows } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].query(`SELECT COUNT(*)::int AS count FROM products`);
    return rows[0].count;
}, [
    "total-product-count"
], {
    revalidate: 60 * 60 * 2
});
const getCategoryProductCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$unstable$2d$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (categorySlug)=>{
    const { rows } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].query(`
      SELECT COUNT(p.*)::int AS count
      FROM categories c
      LEFT JOIN subcollections sc
        ON sc.category_slug = c.slug
      LEFT JOIN subcategories s
        ON s.subcollection_id = sc.id
      LEFT JOIN products p
        ON p.subcategory_slug = s.slug
      WHERE c.slug = $1
      `, [
        categorySlug
    ]);
    return rows[0].count;
}, [
    "category-product-count"
], {
    revalidate: 60 * 60 * 2
});
const getSubcategoryProductCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$unstable$2d$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (subcategorySlug)=>{
    const { rows } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].query(`
      SELECT COUNT(*)::int AS count
      FROM products
      WHERE subcategory_slug = $1
      `, [
        subcategorySlug
    ]);
    return rows[0].count;
}, [
    "subcategory-product-count"
], {
    revalidate: 60 * 60 * 2
});
const getSearchResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$unstable$2d$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (searchTerm)=>{
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
        const { rows } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].query(`
        ${baseQuery}
        WHERE p.name ILIKE $1
        LIMIT 5
        `, [
            `${searchTerm}%`
        ]);
        return rows;
    }
    const tsQuery = searchTerm.split(" ").filter(Boolean).map((t)=>`${t}:*`).join(" & ");
    const { rows } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].query(`
      ${baseQuery}
      WHERE to_tsvector('english', p.name)
            @@ to_tsquery('english', $1)
      LIMIT 5
      `, [
        tsQuery
    ]);
    return rows;
}, [
    "search-results"
], {
    revalidate: 60 * 60 * 2
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/(category-sidebar)/products/[category]/opengraph-image.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "alt",
    ()=>alt,
    "contentType",
    ()=>contentType,
    "default",
    ()=>Image,
    "runtime",
    ()=>runtime,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/og.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/queries.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const runtime = "edge";
const alt = "About the category";
const size = {
    width: 1200,
    height: 630
};
const contentType = "image/png";
async function Image(props) {
    const { category: categoryParam } = await props.params;
    const urlDecodedCategory = decodeURIComponent(categoryParam);
    const category = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCategory"])(urlDecodedCategory);
    if (!category) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const examples = category.subcollections.slice(0, 2).map((s)=>s.name).join(", ");
    const description = `Choose from our selection of ${category.name}, including ${examples + (category.subcollections.length > 1 ? "," : "")} and more. In stock and ready to ship.`;
    // TODO: Change design to add subcategory images that blur out
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImageResponse"](/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            height: "100%",
            display: "flex",
            backgroundColor: "#fff",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "200px",
                        height: "200px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        style: {
                            width: "300px",
                            marginBottom: "30px"
                        },
                        src: category.image_url ?? "/placeholder.svg",
                        alt: category.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/(category-sidebar)/products/[category]/opengraph-image.tsx",
                        lineNumber: 71,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(category-sidebar)/products/[category]/opengraph-image.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(category-sidebar)/products/[category]/opengraph-image.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: "64px",
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "20px"
                },
                children: category.name
            }, void 0, false, {
                fileName: "[project]/src/app/(category-sidebar)/products/[category]/opengraph-image.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        display: "flex",
                        fontSize: "24px"
                    },
                    children: description
                }, void 0, false, {
                    fileName: "[project]/src/app/(category-sidebar)/products/[category]/opengraph-image.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(category-sidebar)/products/[category]/opengraph-image.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(category-sidebar)/products/[category]/opengraph-image.tsx",
        lineNumber: 42,
        columnNumber: 7
    }, this), {
        width: 1200,
        height: 630
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/(category-sidebar)/products/[category]/opengraph-image--metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$category$2d$sidebar$292f$products$2f5b$category$5d2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(category-sidebar)/products/[category]/opengraph-image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$category$2d$sidebar$292f$products$2f5b$category$5d2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$category$2d$sidebar$292f$products$2f5b$category$5d2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const imageModule = {
    alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$category$2d$sidebar$292f$products$2f5b$category$5d2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["alt"],
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$category$2d$sidebar$292f$products$2f5b$category$5d2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentType"],
    runtime: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$category$2d$sidebar$292f$products$2f5b$category$5d2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runtime"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$category$2d$sidebar$292f$products$2f5b$category$5d2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"]
};
async function __TURBOPACK__default__export__(props) {
    const { __metadata_id__: _, ...params } = await props.params;
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("/(category-sidebar)/products/[category]", params, "opengraph-image");
    function getImageMetadata(imageMetadata, idParam) {
        const data = {
            alt: imageMetadata.alt,
            type: imageMetadata.contentType || 'image/png',
            url: imageUrl + (idParam ? '/' + idParam : '') + "?c8680e9eb0e1e7d5"
        };
        const { size } = imageMetadata;
        if (size) {
            data.width = size.width;
            data.height = size.height;
        }
        return data;
    }
    return [
        getImageMetadata(imageModule, '')
    ];
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a50bbd5b._.js.map