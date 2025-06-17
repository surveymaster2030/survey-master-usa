import Image from "next/image";
import ScrollFadeIn from "./ScrollFadeIn";

export default function OneProduct() {
  return (
    <section className="relative mt-6 h-115 w-full overflow-hidden">
      <ScrollFadeIn delay={0.2}>
        <div className="absolute top-8 z-10 w-8/10 rounded-r-xl bg-white/80 p-5 text-right lg:w-3/5">
          <h2 className="text-secondary text-6xl font-extrabold">SM101</h2>
          <h4 className="text-secondary text-2xl font-semibold">
            High-precision total station
          </h4>
        </div>
        <p className="absolute top-3/6 left-1 z-10 w-8/10 text-2xl font-extrabold text-white lg:top-2/5 lg:left-1/3 lg:w-105">
          The SM101 is a high-performance total station designed for
          professionals who demand speed without compromising accuracy. With a
          rapid 1.5 second measurement time.
        </p>

        <Image
          src="/images/adv_design.jpg"
          alt="product photo"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </ScrollFadeIn>
    </section>
  );
}
