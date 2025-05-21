import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="mx-auto flex w-full flex-col items-center gap-8 px-4 py-12 md:flex-row lg:max-w-3/4">
      <div className="relative w-full md:w-1/2">
        <div className="bg-primary absolute -top-2.5 -right-2.5 -z-10 h-72 w-48 rounded-tr-md"></div>
        <Image
          src="/images/aboutUs.png"
          alt="Why Choose Us"
          width={600}
          height={500}
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div className="relative md:w-1/2">
        <h4 className="mb-2 font-medium text-orange-500">About Us</h4>
        <h2 className="mb-4 text-3xl font-extrabold text-[#003b5b] md:text-4xl">
          Why Choose <br />
          SURVAY MASTER
        </h2>
        <p className="mb-6 text-gray-500">
          There are many variations of passages of available but the majority
          have suffered alteration in some form by injected humor or random word
          which don’t look even.
        </p>

        <div className="space-y-4">
          <ul className="list-none space-y-1">
            <li className="relative flex-row items-start pl-6 before:absolute before:top-1 before:left-0 before:h-4 before:w-4 before:bg-[url('/images/checkicon.png')] before:bg-contain before:bg-no-repeat before:content-['']">
              <h4 className="text-secondary text-xl font-bold">
                After-sales services
              </h4>
              <p className="text-sm text-gray-500">
                There are variation You need to be sure there is anything hidden
                in the middle of text.
              </p>
            </li>
            <li className="relative flex-row items-start pl-6 before:absolute before:top-1 before:left-0 before:h-4 before:w-4 before:bg-[url('/images/checkicon.png')] before:bg-contain before:bg-no-repeat before:content-['']">
              <h4 className="text-secondary text-xl font-bold">
                All your devices in one place
              </h4>
              <p className="text-sm text-gray-500">
                There are variation You need to be sure there is anything hidden
                in the middle of text.
              </p>
            </li>
            <li className="relative flex-row items-start pl-6 before:absolute before:top-1 before:left-0 before:h-4 before:w-4 before:bg-[url('/images/checkicon.png')] before:bg-contain before:bg-no-repeat before:content-['']">
              <h4 className="text-secondary text-xl font-bold">
                Quality Products
              </h4>
              <p className="text-sm text-gray-500">
                There are variation You need to be sure there is anything hidden
                in the middle of text.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
