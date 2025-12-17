# NextFasterPostgres

A performance-focused e-commerce template based on **NextFaster**, adapted to run on a **local PostgreSQL** database with **no ORM (direct SQL via `pg`)**.

This fork is intentionally set up for **speed + observability**: you can see what queries run, control caching behavior, and avoid accidental DB overload from aggressive prefetching.

---

## What’s different from the original NextFaster?

- ✅ **Local Postgres** (no hosted DB required)
- ✅ **No ORM (for now)** — direct SQL queries
- ✅ **Prefetch disabled** on heavy routes to prevent DB query explosions
- ✅ Uses **Next.js server caching** (`unstable_cache`)
- ✅ AI features removed/disabled

---

## Tech Stack

- Next.js (App Router)
- PostgreSQL (local)
- node-postgres (`pg`)
- next/image

---

## Getting Started

### 1) Install dependencies

```bash
pnpm install
```

### 2) Create a local database
```bash
createdb nextfaster
```

### 3) Environment Variables

```bash
PGHOST=localhost
PGPORT=5432
PGDATABASE=nextfaster
PGUSER=postgres
PGPASSWORD=your_password

# Optional tuning
PGPOOL_MAX=10
PG_IDLE_TIMEOUT_MS=30000
PG_CONN_TIMEOUT_MS=5000
```

### 4) Run the server

```bash 
pnpm dev
```

## Performance Notes

### Prefetch
Next.js can prefetch RSC payloads for `<Link />` targets. In data-heavy pages, this can trigger **many DB queries** (especially when lots of links enter the viewport).

This fork disables prefetch where it caused **DB overload**. You can selectively re-enable it later for “cheap” routes once caching is strong enough.

### Caching
Read-heavy queries are wrapped in `unstable_cache` so repeat navigations are fast.

If you add mutations later, consider switching to **tag-based invalidation** for instant freshness.

### DB Pooling
Uses a `pg.Pool`. In Next.js dev (HMR/Turbopack), prefer a **singleton pool** pattern so you don’t accidentally create multiple pools during reloads.

### Recommended Index
For common pagination/listing patterns like:

```sql
WHERE subcategory_slug = $1
ORDER BY slug
LIMIT 20
WHERE subcategory_slug = $1
  AND slug > $2
ORDER BY slug
LIMIT 20;
```

A helpful index is:
```sql
CREATE INDEX IF NOT EXISTS products_subcategory_slug_slug_idx
ON products (subcategory_slug, slug);
```

## Debugging Tips

- DevTools → Network: look for repeated `?_rsc=` fetches (RSC payloads / prefetch)
- Time DB calls around `pool.query(...)`
- Monitor pool usage:
  - `pool.totalCount`
  - `pool.idleCount`
  - `pool.waitingCount`
- Use `EXPLAIN (ANALYZE, BUFFERS)` on slow queries

## Credits

Based on **NextFaster** by:
- [@ethanniser](https://x.com/ethanniser)
- [@RhysSullivan](https://x.com/RhysSullivan)
- [@armans-code](https://x.com/ksw_arman)

