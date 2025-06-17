import Image from "next/image";
import Link from "next/link";
import ScrollFadeIn from "./ScrollFadeIn";

export default function MainProduct() {
  return (
    <section className="container mx-auto">
      <ScrollFadeIn delay={0.2}>
        <div className="mx-auto mt-28 flex flex-col items-center justify-center px-5 md:flex-row lg:max-w-7/10">
          <div className="relative w-full lg:mr-12 lg:w-2/5">
            <Image
              className="relative z-1 w-full rounded-full"
              src="/images/mainProductCover.png"
              width={500}
              height={500}
              alt="main product cover"
            />
            <Image
              className="relative z-3 mt-[-150px] rounded-full border-8 border-white"
              src="/images/mainProductPic.png"
              width={250}
              height={250}
              alt="main product pic"
            />
          </div>
          <div className="w-full space-y-7 lg:w-3/5">
            <h4 className="text-mint_green text-xl">Optical Systems</h4>
            <h2 className="text-secondary text-6xl font-semibold">SM101</h2>
            <h3 className="text-primary text-xl font-semibold">
              High-precision total station
            </h3>
            <div className="text-xs">
              <p className="mb-4">
                The SM101 is a high-performance total station designed for
                professionals who demand speed without compromising accuracy.
                With a rapid 1.5 second measurement time, it significantly
                boosts field efficiency in layout, stakeout, and topographic
                survey tasks.
              </p>
              <p className="mb-4">
                It features 2 angular accuracy, a 30X magnification telescope,
                and a reflectorless range reaching up to 1000 meters. Its
                optical system is supported by a dual-axis compensator and
                precision angle encoders, ensuring dependable results in every
                shot.
              </p>
              <p>
                The SM101 includes a full-color 2.7-inch display, USB and
                Bluetooth 5.0 connectivity, a coaxial laser plummet, and a
                long-lasting lithium-ion battery with up to 20 hours of
                operation. Touch-based measurement and a stable photoelectric
                compensator complete a system built for speed, reliability, and
                professional-grade accuracy in any terrain.
              </p>
            </div>
            {/* <ul className="list-none space-y-1">
              <li className="relative flex items-start pl-6 text-xs/6 font-semibold before:absolute before:top-1 before:left-0 before:h-4 before:w-4 before:bg-[url('/images/checkicon.png')] before:bg-contain before:bg-no-repeat before:content-['']">
                Lorem Ipsum is not simply random text.
              </li>
              <li className="relative flex items-start pl-6 text-xs/6 font-semibold before:absolute before:top-1 before:left-0 before:h-4 before:w-4 before:bg-[url('/images/checkicon.png')] before:bg-contain before:bg-no-repeat before:content-['']">
                Making this the first true generator on the internet.
              </li>
            </ul> */}

            <Link
              href="/products/sm101"
              className="bg-mint_green/70 mt-6 rounded-md px-8 py-4 text-xs font-medium text-white transition-all duration-300 hover:px-10"
            >
              Discover More
            </Link>
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  );
}
