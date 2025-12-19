// app/admin/page.tsx
import { getCategories, getSubcategories } from "@/lib/queries";
import UploadProductForm from '../../components/upload-product-form.tsx';

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; subcategory?: string }>;
}) {
  const sp = await searchParams;

  const [categories, subcategories] = await Promise.all([
    getCategories(),
    getSubcategories(),
  ]);

  const selectedCategory = sp.category ?? "";
  const selectedSubcategory = sp.subcategory ?? "";

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Your product form below... */}
      <UploadProductForm categories={categories}  subcategories={subcategories}/>
    </div>
  );
}
