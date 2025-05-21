import { categories } from "@/data/categories";

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
  const category = categoryData[slug];

  if (!category) {
    return <h2>Not Found</h2>;
  }

  return (
    <div>
      <h1>{category.title}</h1>
      <ul>
        {category.products.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
