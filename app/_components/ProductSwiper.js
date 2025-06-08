"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";

export default function ProductSwiper({ images, name }) {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {images.map((img, index) => (
        <SwiperSlide
          key={index}
          className="relative h-16 w-52 overflow-hidden rounded-md text-center"
        >
          <div className="absolute inset-0 top-0 -z-9 h-28 bg-white"></div>
          <div className="bg-light_beige absolute inset-0 bottom-0 -z-10 h-full"></div>

          <div className="relative mx-auto h-auto w-full">
            <Image
              src={img}
              alt={name}
              width={200}
              height={400}
              style={{ width: "100%", height: "100%" }}
              className="bg-gray-200 transition-transform duration-500"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
