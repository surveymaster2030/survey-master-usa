import Image from "next/image";
import Link from "next/link";

export default function MainProduct() {
  return (
    <section className="container mx-auto">
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
          <h4 className="text-mint_green text-xl">Theodolite</h4>
          <h2 className="text-secondary text-6xl font-semibold">ET2A</h2>
          <h3 className="text-primary text-xl font-semibold">
            PRECISE ELECTRONIC THEODOLITE
          </h3>
          <div className="text-xs">
            <p>
              The ET2A is a high-precision electronic theodolite. This device
              has 2 angle measurement accuracy and a 30x magnification effect to
              meet various working requirements.
            </p>
            <p>
              The ET2A is a high-precision electronic theodolite. This device
              has 2 angle measurement accuracy and a 30x magnification effect to
              meet various working requirements.
            </p>
          </div>
          <ul className="list-none space-y-1">
            <li className="relative flex items-start pl-6 text-xs/6 font-semibold before:absolute before:top-1 before:left-0 before:h-4 before:w-4 before:bg-[url('/images/checkicon.png')] before:bg-contain before:bg-no-repeat before:content-['']">
              Lorem Ipsum is not simply random text.
            </li>
            <li className="relative flex items-start pl-6 text-xs/6 font-semibold before:absolute before:top-1 before:left-0 before:h-4 before:w-4 before:bg-[url('/images/checkicon.png')] before:bg-contain before:bg-no-repeat before:content-['']">
              Making this the first true generator on the internet.
            </li>
          </ul>

          <Link
            href="/"
            className="bg-mint_green/70 mt-6 rounded-md px-8 py-4 text-xs font-medium text-white transition-all duration-300 hover:px-10"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}
