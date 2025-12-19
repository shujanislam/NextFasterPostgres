"use client";

import { useMemo, useState } from "react";

type Item = { name: string; slug?: string };

// If your subcategories are linked to categories, add fields like:
// type Subcategory = Item & { category?: string; categorySlug?: string };
type Subcategory = Item;

export default function UploadProductForm({
  categories,
  subcategories,
}: {
  categories: Item[];
  subcategories: Subcategory[];
}) {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");

  const [status, setStatus] = useState<{ type: "idle" | "saving" | "ok" | "err"; msg?: string }>({
    type: "idle",
  });

  // If subcategories are NOT linked to category in your data, just return subcategories directly.
  // If they ARE linked, filter here (see note below).
  const filteredSubcategories = useMemo(() => {
    // return subcategories; // <-- keep this if no relationship exists
    return subcategories;
  }, [subcategories]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: "saving" });

    if (!category || !subcategory) {
      setStatus({ type: "err", msg: "Select category and subcategory." });
      return;
    }
    if (!name.trim()) {
      setStatus({ type: "err", msg: "Name is required." });
      return;
    }
    const priceNum = Number(price);
    if (!Number.isFinite(priceNum) || priceNum < 0) {
      setStatus({ type: "err", msg: "Price must be a valid number." });
      return;
    }

    // ✅ Log the slug from DB (not the UI label)
    const selectedSub = subcategories.find((s) => (s.slug ?? s.name) === subcategory);
    console.log("subcategory_slug:", selectedSub?.slug);

    try {
await fetch("/api/admin/products", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    subcategory_slug: selectedSub?.slug, // send DB slug
    name: name.trim(),
    price: Number(price),
    description: description.trim(),
    image_url: imageUrl.trim(),
  }),
});

      setStatus({ type: "ok", msg: "Saved!" });
      setName("");
      setDescription("");
      setImageUrl("");
      setPrice("");
    } catch (err: any) {
      setStatus({ type: "err", msg: err?.message || "Something went wrong." });
    }
  }

  const labelCls = "text-xs font-medium text-neutral-700";
  const inputCls =
    "w-full border border-black p-2 pr-16 outline-none";
  const selectCls =
    "w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900";
  const panelCls = "rounded-md border border-neutral-200 bg-white p-4";

  return (
    <div className={panelCls}>
      <div className="mb-3">
        <div className="text-sm font-semibold text-neutral-900">Upload Product</div>
      </div>

      <form onSubmit={onSubmit} className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className={labelCls}>Category</label>
            <select
              className={selectCls}
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setSubcategory("");
              }}
              required
            >
              <option value="" disabled>
                Select category
              </option>
              {categories.map((c, idx) => (
                <option key={`${c.slug ?? c.name}-${idx}`} value={c.slug ?? c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelCls}>Subcategory</label>
            <select
              className={selectCls}
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              required
            >
              <option value="" disabled>
                Select subcategory
              </option>
              {filteredSubcategories.map((s, idx) => (
                <option key={`${s.slug ?? s.name}-${idx}`} value={s.slug ?? s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <label className={labelCls}>Name</label>
            <input
              className={inputCls}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="MacBook Air"
            />
          </div>

          <div>
            <label className={labelCls}>Price</label>
            <input
              className={inputCls}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              inputMode="decimal"
              placeholder="999.99"
            />
          </div>
        </div>

        <div>
          <label className={labelCls}>Description</label>
          <input
            className={inputCls}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Product Description"
          />
        </div>

        <div>
          <label className={labelCls}>Image URL</label>
          <input
            className={inputCls}
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://…"
          />
        </div>

        <div className="flex items-center justify-between border-t border-neutral-200 pt-4">
          <div className="text-xs">
            {status.type === "saving" && <span className="text-neutral-600">Saving…</span>}
            {status.type === "ok" && <span className="text-green-700">{status.msg}</span>}
            {status.type === "err" && <span className="text-red-700">{status.msg}</span>}
          </div>

          <button
            type="submit"
            disabled={status.type === "saving"}
            className="w-full rounded-sm bg-accent1 p-2 text-center font-bold text-white hover:bg-accent1"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
}
