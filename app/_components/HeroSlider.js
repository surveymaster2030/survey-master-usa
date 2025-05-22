// components/HeroSlider.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const slides = [
  {
    image: "/images/slide2.jpg",
    title: "Precision Surveying Solutions",
    subtitle:
      "Industry-leading GNSS technology, total stations, and surveying equipment for professionals who demand accuracy and reliability.",
  },
  {
    image: "/images/slide1.png",
    title: "Precision Surveying Solutions",
    subtitle:
      "Industry-leading GNSS technology, total stations, and surveying equipment for professionals who demand accuracy and reliability.",
  },
  {
    image: "/images/slide3.jpg",
    title: "Precision Surveying Solutions",
    subtitle:
      "Industry-leading GNSS technology, total stations, and surveying equipment for professionals who demand accuracy and reliability.",
  },
];
export default function HeroSlider() {
  return (
    <div className="relative h-[50vh] w-full lg:h-[90vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000 }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex h-full w-full items-center justify-center bg-cover bg-center px-4 text-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="text-secondary max-w-xl p-6 text-left">
                <h2 className="mb-4 text-2xl font-medium md:text-5xl">
                  {slide.title}
                </h2>
                <p className="text-sm">{slide.subtitle}</p>
                <div className="mt-10">
                  <Link
                    href="/"
                    className="bg-mint_green/70 mt-6 rounded-md px-8 py-4 text-xs font-medium text-white transition-all duration-300 hover:px-10"
                  >
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination bullets*/}
      <div className="custom-pagination pointer-events-auto absolute top-1/2 left-8 z-50 flex -translate-y-1/2 flex-col gap-4"></div>

      {/* arrows */}
      <div className="absolute top-1/2 right-6 z-50 flex -translate-y-1/2 flex-col gap-4">
        <button className="swiper-button-prev-custom rounded-full bg-white/40 px-3 py-2 text-xl text-black hover:bg-white/70">
          ←
        </button>
        <button className="swiper-button-next-custom rounded-full bg-white/40 px-3 py-2 text-xl text-black hover:bg-white/70">
          →
        </button>
      </div>
    </div>
  );
}
