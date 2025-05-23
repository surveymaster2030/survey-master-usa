import { categories } from "@/data/categories";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function page({ params }) {
  const category = categories.find((cat) => cat.slug === params.slug);

  if (!category) return <div className="p-4">Not Found</div>;

  const filteredProducts = products.filter(
    (product) => product.categoryId === category.id,
  );

  return (
    <div>
      <h1>{category.name}</h1>
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <Link
            href={`/products/${product.slug}`}
            key={product.id}
            className="rounded-xl border p-4"
          >
            <Image
              width={300}
              height={200}
              src={product.image}
              className="mb-2 h-40 w-full object-cover"
              alt="product pic"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
