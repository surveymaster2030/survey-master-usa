import { categories } from "@/data/categories";
import { products } from "@/data/products";

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

const categoryData = {
  GNSSSysyem: {
    title: "GNSS Systems",
    products: ["prod1", "prod2", "prod3"],
  },
  SLAM: {
    title: "SLAM",
    products: ["prod1", "prod2", "prod3"],
  },
  MachineControlSolutions: {
    title: "Machine Control Solutions",
    products: ["prod1", "prod2", "prod3"],
  },
};

export default async function page({ params }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return <div className="p-4">Not Found</div>;
  const filteredProducts = products.filter((p) => p.categoryId === category.id);
  console.log("params.slug:", slug);
  console.log("category found:", category);
  console.log("filtered products:", filteredProducts);

  return (
    <div>
      <h1>{category.name}</h1>
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="rounded-xl border p-4">
            <img
              src={product.image}
              className="mb-2 h-40 w-full object-cover"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
