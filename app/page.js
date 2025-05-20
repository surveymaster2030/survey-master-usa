import HeroSlider from "./_components/HeroSlider";
import LatestProducts from "./_components/LatestProducts";
import MainProduct from "./_components/MainProduct";
import TopProducts from "./_components/TopProducts";
import OneProduct from "./_components/OneProduct";

const latestPro = [
  { id: "01", name: "eTS8", cat: "GNSS", imageURL: "/images/device1.png" },
  { id: "02", name: "eTS8", cat: "GNSS", imageURL: "/images/device2.png" },
  { id: "03", name: "eTS8", cat: "GNSS", imageURL: "/images/device3.png" },
];
export default function Home() {
  return (
    <>
      <HeroSlider />
      <section className="relative z-10 container mx-auto mt-[-50px] flex items-center justify-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {latestPro.map((item) => (
            <LatestProducts key={item.id} item={item} />
          ))}
        </div>
      </section>
      <MainProduct />
      <TopProducts />
      <OneProduct />
    </>
  );
}
