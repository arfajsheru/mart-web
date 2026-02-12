"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

export interface CarouselItem {
  src: StaticImageData;
  alt: string;
}

interface NewArrivalCarouselProps {
  items: CarouselItem[];
  interval?: number;
}

const NewArrivalCarousel = ({
  items,
  interval = 4000,
}: NewArrivalCarouselProps) => {
  if (!items.length) return null;

  return (
    <div className="flex justify-center">

        <div className="relative overflow-hidden rounded-xs w-95 md:w-87.5 h-115">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            loop={true}
            speed={800}
            autoplay={{
              delay: interval,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="w-full h-full"
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    priority={index === 0}
                    className="object-cover select-none"
                    draggable={false}
                  />

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
     
    </div>
  );
};

export default NewArrivalCarousel;