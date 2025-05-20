import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="mx-auto flex w-full max-w-3/4 flex-col items-center gap-8 px-4 py-12 md:flex-row">
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
        <h2 className="mb-4 text-3xl font-bold text-[#003b5b] md:text-4xl">
          Why Choose <br />
          SURVAY MASTER
        </h2>
        <p className="mb-6 text-gray-500">
          There are many variations of passages of available but the majority
          have suffered alteration in some form by injected humor or random word
          which don’t look even.
        </p>

        {/* عناصر المميزات */}
        <div className="space-y-4">
          <Feature
            iconColor="bg-green-500"
            title="After-sales services"
            desc="There are variation You need to be sure there is anything hidden in the middle of text."
          />
          <Feature
            iconColor="bg-yellow-400"
            title="All your devices in one place"
            desc="There are variation You need to be sure there is anything hidden in the middle of text."
          />
          <Feature
            iconColor="bg-yellow-500"
            title="Quality Products"
            desc="There are variation You need to be sure there is anything hidden in the middle of text."
          />
        </div>
      </div>
    </section>
  );
}

const Feature = ({ iconColor, title, desc }) => (
  <div className="flex items-start gap-4">
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full ${iconColor}`}
    >
      <CheckCircle className="h-5 w-5 text-white" />
    </div>
    <div>
      <h4 className="font-semibold text-[#003b5b]">{title}</h4>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  </div>
);
