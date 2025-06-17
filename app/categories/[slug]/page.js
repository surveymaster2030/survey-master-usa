import { categories } from "@/data/categories";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export function generateMetadata({ params }) {
  const category = categories.find((cat) => cat.slug === params.slug);

  if (!category) {
    return {
      title: "Category Not Found | Survey Master",
      description: "This category does not exist.",
    };
  }

  return {
    title: `${category.name}`,
    description: `Discover our top surveying tools in the ${category.name} category.`,
    openGraph: {
      title: `${category.name} | Survey Master`,
      description: `Discover our top surveying tools in the ${category.name} category.`,
      url: `https://www.surveymasterusa.com/categories/${params.slug}`,
      siteName: "Survey Master",
      images: [
        {
          url: "images/logo-01.png",
        width: 600,
        height: 600,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function page({ params }) {
  const category = categories.find((cat) => cat.slug === params.slug);

  if (!category) return <div className="p-4">Not Found</div>;

  const filteredProducts = products.filter(
    (product) => product.categoryId === category.id,
  );

  return (
    <div className="w-full px-5 lg:mx-auto lg:max-w-4/5 lg:px-0">
      {/* <h1 className="text-secondary my-2.5 rounded-md bg-amber-100 p-3 font-bold tracking-widest">
        {category.name}
      </h1> */}
      <div className="text-secondary my-3 flex w-full gap-4 rounded-md bg-amber-100 p-3 text-sm font-bold tracking-wide">
        <Link href="/">Home</Link>
        <span>/</span> <span className="font-bold">{category.name}</span>
      </div>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-start gap-4 rounded-md border border-gray-200 bg-gray-50 p-4 lg:flex-row"
            >
              <Image
                width={400}
                height={600}
                src={product.images[0] || "/images/placeholderImage.png"}
                className="h-full w-full rounded-md bg-gray-200 object-cover lg:w-1/3"
                alt={product.name}
              />
              <div className="flex h-full w-full flex-col justify-between lg:w-2/3">
                <div>
                  <h2 className="text-secondary text-2xl font-extrabold">
                    {product.name}
                  </h2>
                  <h4 className="text-md mb-3 font-semibold text-gray-500">
                    {product.subName}
                  </h4>
                  <p className="line-clamp-5 text-sm/6 text-gray-500">
                    {product.description[0]}
                  </p>
                </div>
                <Link
                  href={`/products/${product.slug}`}
                  className="bg-mint_green/70 mt-6 w-fit rounded-md px-8 py-4 text-xs font-medium tracking-wider text-white transition-all duration-300 hover:px-10"
                >
                  More Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-6 rounded p-4 text-center text-lg text-red-600">
          No products in this category at the moment
        </p>
      )}
    </div>
  );
}
