// components/TopProductsSection.tsx
import Image from "next/image";

const products = [
  {
    title: "eTS2",
    subtitle: "Total Station",
    image: "/images/device1.png",
  },
  {
    title: "eScan M1",
    subtitle: "Handheld Lidar Scanner",
    image: "/images/device2.png",
  },
  {
    title: "eTS5",
    subtitle: "Total Station",
    image: "/images/device3.png",
  },
  {
    title: "eTS2",
    subtitle: "Total Station",
    image: "/images/device1.png",
  },
];

export default function TopProducts() {
  return (
    <section className="relative mt-26 py-12">
      <div className="bg-light_beige absolute inset-0 top-0 -z-10 h-70 overflow-hidden">
        <div className="h-full w-full bg-[url(/images/bg.png)] bg-size-[auto_200] bg-position-[calc(50%+22rem)_-2rem] bg-no-repeat opacity-5"></div>
      </div>

      <div className="mb-10 text-center">
        <p className="text-sm font-semibold text-orange-500">Top Products</p>

        <h2 className="text-secondary relative mt-1 inline-block text-4xl font-extrabold">
          What We Offer
          <span className="relative mt-2 block h-1 w-24 rounded-2xl bg-orange-500">
            <span className="absolute top-1/2 -right-2 h-1 w-1 -translate-y-1/2 rounded-full bg-orange-500"></span>
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative w-52 overflow-hidden rounded-xl p-4 text-center shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md"
          >
            <div className="absolute inset-0 top-0 -z-9 h-28 bg-white"></div>
            <div className="bg-light_beige absolute inset-0 bottom-0 -z-10 h-full"></div>
            <h3 className="text-secondary mb-1 text-xl font-extrabold">
              {product.title}
            </h3>
            <p className="text-mint_green mb-4 text-xs">{product.subtitle}</p>
            <div className="relative mx-auto h-48 w-full">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
