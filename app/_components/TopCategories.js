// components/TopProductsSection.tsx
"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const products = [
  {
    title: "GNSS Systems",
    image: "/images/cat1.png",
  },
  {
    title: "Optical Systems",
    image: "/images/cat2.png",
  },
  {
    title: "Machine Control Solutions",
    image: "/images/cat3.png",
  },
  {
    title: "Marine Systems",
    image: "/images/cat4.png",
  },
];

export default function TopCategories() {
  return (
    <section className="relative mt-10 py-12">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold text-orange-500">
          For More Products
        </p>

        <h2 className="text-secondary relative mt-1 inline-block text-4xl font-extrabold">
          Explore Categories
          <span className="relative mt-2 block h-1 w-24 rounded-2xl bg-orange-500">
            <span className="absolute top-1/2 -right-2 h-1 w-1 -translate-y-1/2 rounded-full bg-orange-500"></span>
          </span>
        </h2>
      </div>

      <div className="flex w-full justify-center gap-2 px-4 lg:mx-auto lg:max-w-4/5">
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
            1024: {
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
        >
          {products.map((product, index) => (
            <SwiperSlide
              key={index}
              className="relative h-110 w-72 overflow-hidden rounded-md shadow-sm hover:shadow-md"
            >
              <h2 className="absolute bottom-10 left-10 z-10 w-20 text-2xl font-bold text-white">
                {product.title}
              </h2>
              <Image
                src={product.image}
                alt={product.title}
                style={{ width: "100%", height: "100%" }}
                width={200}
                height={400}
                className="transition-transform duration-500 hover:scale-110"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* {products.map((product, index) => (
          <div
            key={index}
            className="relative h-110 w-72 overflow-hidden rounded-md shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md"
          >
            <h2 className="absolute bottom-10 left-10 w-20 text-2xl font-bold text-white">
              {product.title}
            </h2>
            <Image
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "100%" }}
              width={200}
              height={400}
            />
          </div>
        ))} */}
      </div>
    </section>
  );
}
