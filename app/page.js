import HeroSlider from "./_components/HeroSlider";
import LatestProducts from "./_components/LatestProducts";
import MainProduct from "./_components/MainProduct";
import TopProducts from "./_components/TopProducts";
import OneProduct from "./_components/OneProduct";
import TopCategories from "./_components/TopCategories";
import VideoCenter from "./_components/VideoCenter";
import AboutUs from "./_components/AboutUs";

const latestPro = [
  { id: "01", name: "eTS8", cat: "GNSS", imageURL: "/images/device1.png" },
  { id: "02", name: "eTS8", cat: "GNSS", imageURL: "/images/device2.png" },
  { id: "03", name: "eTS8", cat: "GNSS", imageURL: "/images/device3.png" },
];
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
      <TopCategories />
      <VideoCenter />
      <AboutUs />
    </>
  );
}
