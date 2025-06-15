import HeroSlider from "./_components/HeroSlider";
import LatestProducts from "./_components/LatestProducts";
import MainProduct from "./_components/MainProduct";
import TopProducts from "./_components/TopProducts";
import OneProduct from "./_components/OneProduct";
import TopCategories from "./_components/TopCategories";
import VideoCenter from "./_components/VideoCenter";
import AboutUs from "./_components/AboutUs";

import { products } from "@/data/products";
import { categories } from "@/data/categories";

export const metadata = {
  title: {
    default: "Home | Survey Master",
    template: "%s | Survey Master",
  },
  description: "When you can collect all surveying tools from one place.",
  openGraph: {
    title: "Survey Master - Home",
    description: "When you can collect all surveying tools from one place.",
    url: "https://www.surveymasterusa.com",
    siteName: "Survey Master",
    images: [
      {
        url: "images/logo_wh.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const latestProductsInHome = products.filter((item) =>
  [101, 110, 107].includes(item.id),
);

const topProductsInHome = products.filter((item) =>
  [101, 107, 110, 105].includes(item.id),
);

const topCategoriesInHome = categories.filter((cat) =>
  [1, 6, 3, 5].includes(cat.id),
);

export default function Home() {
  return (
    <>
      <HeroSlider />
      <section className="relative z-10 mt-[-50px] flex w-full items-center justify-center px-4 lg:container lg:mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {latestProductsInHome.map((item) => (
            <LatestProducts key={item.id} item={item} />
          ))}
        </div>
      </section>
      <MainProduct />
      <TopProducts topProductsInHome={topProductsInHome} />
      <OneProduct />
      <TopCategories topCategoriesInHome={topCategoriesInHome} />
      <VideoCenter />
      <AboutUs />
    </>
  );
}
