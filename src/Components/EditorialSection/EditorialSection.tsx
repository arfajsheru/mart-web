// components/EditorialSection/EditorialSection.tsx

"use client";

import { type StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../Utils/ProductCard";
import NewArrivalCarousel from "../Home/NewArrivalCarousel";
import { EditorialCTA } from "./EditorialCTA";
import {
  PRODUCT_CAROUSEL_CONFIG,
  MOBILE_CAROUSEL_THRESHOLD,
} from "./constants";

import "swiper/css";

export interface CarouselImage {
  src: StaticImageData;
  alt: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: StaticImageData;
  isNew?: boolean;
  isBestSeller?: boolean;
  rating?: number;
}

interface EditorialSectionProps {
  title: string;
  subtitle?: string;
  carouselItems: CarouselImage[];
  products: Product[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  carouselInterval?: number;
}

export const EditorialSection = ({
  title,
  subtitle,
  carouselItems,
  products,
  ctaLabel = "Explore Collection",
  onCtaClick,
  carouselInterval = 5000,
}: EditorialSectionProps) => {
  const showSimpleGrid = products.length <= MOBILE_CAROUSEL_THRESHOLD;

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ━━━━━━━━━━━━━━━━━━ MOBILE LAYOUT ━━━━━━━━━━━━━━━━━━ */}
        <div className="block lg:hidden space-y-10 sm:space-y-12">
          {/* Title */}
          <div className="flex flex-col items-center text-center space-y-2">
            <h2
              className="
                text-2xl sm:text-3xl
                font-title font-light
                tracking-wider
                uppercase
                text-foreground
              "
            >
              {title}
            </h2>
            {subtitle && (
              <p
                className="
                  text-sm 
                  font-secondary 
                  text-foreground/60
                  tracking-wide
                "
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Campaign Carousel */}
          <div className="flex justify-center">
            <NewArrivalCarousel
              items={carouselItems}
              interval={carouselInterval}
            />
          </div>

          {/* Product Carousel */}
          <div className="relative -mx-4 sm:mx-0">
            <Swiper {...PRODUCT_CAROUSEL_CONFIG} className="!px-4 sm:!px-0">
              {products.map((product) => (
                <SwiperSlide key={product.id} className="!w-auto">
                  <ProductCard product={product} size="xs" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-2">
            <EditorialCTA
              label={ctaLabel}
              variant="mobile"
              onClick={onCtaClick}
            />
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━ DESKTOP LAYOUT ━━━━━━━━━━━━━━━━━━ */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16 lg:items-center">
          {/* Campaign Visual - Editorial Left Panel */}
          <div className="lg:col-span-5 xl:col-span-5">
            <NewArrivalCarousel
              items={carouselItems}
              interval={carouselInterval}
            />
          </div>

          {/* Content - Editorial Right Panel */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-12 xl:space-y-14">
            {/* Title Block */}
            <div className="space-y-3">
              <h2
                className="
                  text-3xl xl:text-4xl 2xl:text-5xl
                  font-title font-light
                  tracking-widest
                  uppercase
                  text-foreground
                  leading-tight
                "
              >
                {title}
              </h2>
              {subtitle && (
                <p
                  className="
                    text-base xl:text-lg
                    font-secondary 
                    text-foreground/50
                    tracking-wide
                    max-w-md
                  "
                >
                  {subtitle}
                </p>
              )}
            </div>

            {/* Product Grid/Carousel */}
            <div className="relative">
              {showSimpleGrid ? (
                <div className="grid grid-cols-5 gap-4 xl:gap-6 max-w-4xl">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="
                        transition-all duration-500 ease-out
                        hover:scale-[1.03]
                        hover:-translate-y-1
                      "
                    >
                      <ProductCard product={product} size="xs" />
                    </div>
                  ))}
                </div>
              ) : (
                <Swiper {...PRODUCT_CAROUSEL_CONFIG}>
                  {products.map((product) => (
                    <SwiperSlide key={product.id} className="!w-auto">
                      <div
                        className="
                          transition-all duration-500 ease-out
                          hover:scale-[1.03]
                          hover:-translate-y-1
                        "
                      >
                        <ProductCard product={product} size="xs" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <EditorialCTA
                label={ctaLabel}
                variant="desktop"
                onClick={onCtaClick}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};