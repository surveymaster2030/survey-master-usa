import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { notFound } from "next/navigation";
import ProductSwiper from "@/app/_components/ProductSwiper";
import ProductTab from "@/app/_components/ProductTab";
import Link from "next/link";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const category = categories.find((cat) => cat.id === product.categoryId);

  return (
    <div className="w-full px-5 lg:mx-auto lg:max-w-4/5 lg:px-0">
      <div className="text-secondary my-3 flex w-full gap-4 rounded-md bg-amber-100 p-3 text-sm font-bold tracking-wide">
        <Link href="/">Home</Link> <span>/</span>{" "}
        <Link href={`/categories/${category.slug}`}>{category.name}</Link>
        <span>/</span> <span className="font-bold">{product.name}</span>
      </div>
      <div className="flex w-full flex-col lg:flex-row lg:items-start lg:space-x-8">
        <div className="w-full lg:w-3/8">
          <ProductSwiper images={product.images} name={product.name} />
        </div>

        <div className="mt-6 w-full lg:mt-0 lg:w-5/8">
          <h1 className="text-secondary mb-4 text-4xl font-bold">
            {product.name}
          </h1>
          <h3 className="mb-4 text-2xl font-bold text-gray-500">
            {product.subName}
          </h3>

          <p>{product.description[0]}</p>
          <ProductTab product={product} />
        </div>
      </div>
    </div>
  );
}
