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

const latestPro = [
  { id: "01", name: "eTS8", cat: "GNSS", imageURL: "/images/device1.png" },
  { id: "02", name: "eTS8", cat: "GNSS", imageURL: "/images/device2.png" },
  { id: "03", name: "eTS8", cat: "GNSS", imageURL: "/images/device3.png" },
];

export const metadata = {
  title: {
    default: "Survey Master - Home",
    template: "%s | Survey Master",
  },
  description: "When you can collect all surveying tools from one place.",
  openGraph: {
    title: "Survey Master - Home",
    description: "When you can collect all surveying tools from one place.",
    url: "https://survay-master.vercel.app",
    siteName: "Survey Master",
    images: [
      {
        url: "images/device1.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const latestCategories = categories.filter((cat) =>
  [1, 6, 3, 5].includes(cat.id),
);
export default function Home() {
  return (
    <>
      <HeroSlider />
      <section className="relative z-10 mt-[-50px] flex w-full items-center justify-center px-4 lg:container lg:mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {latestPro.map((item) => (
            <LatestProducts key={item.id} item={item} />
          ))}
        </div>
      </section>
      <MainProduct />
      <TopProducts />
      <OneProduct />
      <TopCategories latestCategories={latestCategories} />
      <VideoCenter />
      <AboutUs />
    </>
  );
}
