"use client";

import React from "react";
import ProductCard from "../Utils/ProductCard";
import NewArrivalCarousel from "./NewArrivalCarousel";
import { newArrivalImages, products, singleProduct } from "../../utils/data";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const NewDrop = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto">
        {/* MOBILE LAYOUT (< lg) */}
        <div className="block lg:hidden space-y-6 sm:space-y-8">
          {/* Title & Description */}
          <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title font-bold tracking-tight">
              New Arrivals Perfumes
            </h2>
          </div>

          {/* Carousel with Overlap Effect */}
          <div className="relative flex justify-center">
            <NewArrivalCarousel items={newArrivalImages} />
          </div>

          {/* Swiper Cards - Overlapping Carousel */}
          <div className="relative ">
            <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              spaceBetween={16}
              loop={true}
              speed={800}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              {products.map((product, index) => (
              
                <SwiperSlide key={index} className="w-auto!">
                  <ProductCard product={product} size="xs" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button
              className="
                group relative
                px-8 py-3.5
                border border-foreground
                rounded-sm
                overflow-hidden
                transition-all duration-500
                hover:border-foreground/60
                active:scale-95
              "
            >
              {/* Background slide effect */}
              <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

              {/* Content */}
              <span className="relative flex items-center gap-2.5 font-secondary font-medium">
                <span className="text-foreground group-hover:text-background transition-colors duration-500">
                  Shop Now
                </span>
                <ArrowRight
                  size={18}
                  className="
                    text-foreground group-hover:text-background
                    transition-all duration-500
                    group-hover:translate-x-1
                  "
                />
              </span>
            </button>
          </div>
        </div>

        {/* DESKTOP LAYOUT (>= lg) */}
        <div className="hidden lg:flex flex-row justify-center items-center gap-5 xl:gap-0">
          {/* LEFT - Carousel */}
          <div className="">
            <NewArrivalCarousel items={newArrivalImages} />
          </div>

          {/* RIGHT - Content (Max Width: 2xl = 1536px) */}
          <div className="flex flex-col justify-center items-center space-y-8 w-full max-w-2xl ">
            {/* Header */}
            <div className="w-full flex flex-col items-center text-center">
              <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-title font-bold tracking-tight leading-tight">
                New Arrivals Perfumes
              </h2>
            </div>

            {/* Cards Container - Width controlled */}
            <div className="w-full overflow-hidden relative">
              {products.length <= 5 ? (
                // Simple Flex for 5 or fewer items
                <div className="flex gap-4 xl:gap-5 justify-center">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="transform transition-transform duration-300 hover:scale-105"
                    >
                      <ProductCard product={product} size="xs" />
                    </div>
                  ))}
                </div>
              ) : (
                // Swiper for 6+ items (contained width)
                <div className="relative">
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView="auto"
                    loop={true}
                    speed={1000}
                    centeredSlides={false}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                  >
                    {products.map((product, index) => (
                      <SwiperSlide key={index} className="w-auto!">
                        <div className="transform transition-transform duration-300 hover:scale-105">
                          <ProductCard product={product} size="xs" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>

            {/* Button */}
            <button
              className="
                group relative
                px-8 py-3
                cursor-pointer
                border border-foreground
                rounded-sm
                overflow-hidden
                transition-all duration-500
                hover:border-foreground/60
                hover:shadow-lg
                active:scale-95
                z-10
              "
            >
              <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              {/* Content */}
              <span className="relative flex items-center gap-3 font-secondary font-medium text-base xl:text-lg">
                <span className="text-foreground group-hover:text-background transition-colors duration-500">
                  Shop Now
                </span>
                <ArrowRight
                  size={20}
                  className="
                    text-foreground group-hover:text-background
                    transition-all duration-500
                    group-hover:translate-x-2
                  "
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewDrop;
