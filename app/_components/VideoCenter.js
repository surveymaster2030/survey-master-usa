import Link from "next/link";
import ScrollFadeIn from "./ScrollFadeIn";

export default function VideoCenter() {
  return (
    <section className="bg-light_beige relative flex items-center justify-center pb-12">
      <div className="absolute h-full w-full bg-[url(/images/bg.png)] bg-size-[auto_200] bg-position-[calc(50%-30rem)_8rem] bg-no-repeat opacity-5"></div>
      <div className="w-full px-5 lg:w-4/6">
        <div>
          <h2 className="mb-5 text-center text-5xl font-bold text-[#EBE8D6] lg:text-left lg:text-9xl">
            Video Center
          </h2>
        </div>
        <div className="text-center lg:text-right">
          <Link
            href="/"
            className="bg-mint_green/70 mt-26 rounded-md px-8 py-4 text-xs font-medium text-white transition-all duration-300 hover:px-10"
          >
            Discover More
          </Link>
        </div>
        <ScrollFadeIn delay={0.2}>
          <div className="relative z-10 mt-8 w-full">
            <div className="bg-primary absolute -top-2.5 -left-2.5 -z-10 h-72 w-48 rounded-tl-md"></div>
            <iframe
              src="https://www.youtube-nocookie.com/embed/OjVqJuPGyCI"
              allowFullScreen
              width="100%"
              height="500px"
              loading="lazy"
              title="Survay Master Video"
              className="rounded-md"
            />
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
