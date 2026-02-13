// components/EditorialSection/constants.ts

import { SwiperOptions } from "swiper/types";
import { Autoplay } from "swiper/modules";

export const PRODUCT_CAROUSEL_CONFIG: SwiperOptions = {
  modules: [Autoplay],
  slidesPerView: "auto",
  spaceBetween: 16,
  loop: true,
  speed: 1200,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    1024: {
      spaceBetween: 20,
      speed: 1400,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    },
  },
} as const;

export const MOBILE_CAROUSEL_THRESHOLD = 5;