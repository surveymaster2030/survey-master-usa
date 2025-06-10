import Image from "next/image";
import ScrollFadeIn from "./ScrollFadeIn";
import Link from "next/link";
export default function LatestProducts({ item }) {
  return (
    <ScrollFadeIn delay={0.2}>
      <Link href={`/products/${item.slug}`}>
        <div className="shadow-secondary flex h-50 w-full items-center justify-center overflow-hidden rounded-md bg-white px-4 pt-4 shadow-lg/15 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg/25">
          <Image
            style={{ width: "100%", height: "100%" }}
            src={item.images[0]}
            width={100}
            height={300}
            alt={item.name}
          />
          <div className="p-7">
            <h4 className="text-mint_green mb-3 text-center">
              {item.categoryName}
            </h4>
            <h2 className="text-center text-4xl font-semibold">{item.name}</h2>
          </div>
        </div>
      </Link>
    </ScrollFadeIn>
  );
}
