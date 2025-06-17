// components/TopProductsSection.tsx
"use client";
import Image from "next/image";
import ScrollFadeIn from "./ScrollFadeIn";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

export default function TopProducts({ topProductsInHome }) {
  return (
    <section className="relative mt-16 py-12">
      <div className="bg-light_beige absolute inset-0 top-0 -z-10 h-70 overflow-hidden">
        <div className="h-full w-full bg-[url(/images/bg.png)] bg-size-[auto_580] bg-position-[calc(50%+22rem)_-2rem] bg-no-repeat opacity-5"></div>
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

      <ScrollFadeIn delay={0.2}>
        <div className="mx-auto flex w-full justify-center px-4 md:max-w-4/5 lg:max-w-3/5">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1300: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper overflow-visible"
          >
            {topProductsInHome.map((product, index) => (
              <SwiperSlide
                key={index}
                className="relative h-16 w-52 overflow-hidden rounded-md p-4 text-center shadow-sm hover:shadow-md"
              >
                <Link href={`/products/${product.slug}`}>
                  <div className="absolute inset-0 -z-10 h-full w-full rounded-md bg-white opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
                  <div className="absolute inset-0 top-0 -z-9 h-29 bg-white"></div>
                  <div className="bg-light_beige absolute inset-0 bottom-0 -z-10 h-full"></div>
                  <h3 className="text-secondary mt-2 mb-4 text-2xl font-extrabold">
                    {product.name}
                  </h3>
                  <p className="text-mint_green mb-4 text-xs">
                    {product.categoryName}
                  </p>
                  <div className="relative mx-auto h-auto w-full">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={200}
                      height={400}
                      style={{ width: "100%", height: "100%" }}
                      className="transition-transform duration-500 hover:scale-120"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ScrollFadeIn>
    </section>
  );
}
