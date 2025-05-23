import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound(); // يعرض صفحة 404 تلقائيًا
  }

  const category = categories.find((cat) => cat.id === product.categoryId);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {category && <p>التصنيف: {category.name}</p>}
    </div>
  );
}
