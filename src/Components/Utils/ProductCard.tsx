// Updated ProductCard.tsx (minimal changes - just refined transitions)

import Image from "next/image";
import { StaticImageData } from "next/image";

type CardSize = "xs" | "base" | "sm" | "md" | "lg" | "xl";

interface SingleProduct {
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

interface SingleProductCardProps {
  product: SingleProduct;
  size?: CardSize;
  title?: boolean;
}

const SIZE_STYLES: Record<
  CardSize,
  {
    wrapper: string;
    image: string;
    title: string;
    price: string;
    badge: string;
  }
> = {
  xs: {
    wrapper: "w-24 sm:w-28",
    image: "h-32 sm:h-36",
    title: "text-xs",
    price: "text-xs",
    badge: "text-[7px] px-1.5 py-0.5",
  },
  base: {
    wrapper: "w-40 sm:w-44 md:w-48",
    image: "h-48 sm:h-52 md:h-56",
    title: "text-sm sm:text-base",
    price: "text-sm sm:text-base",
    badge: "text-[9px] px-2 py-0.5",
  },
  sm: {
    wrapper: "w-44 sm:w-48 md:w-52",
    image: "h-52 sm:h-56 md:h-60",
    title: "text-sm sm:text-base md:text-lg",
    price: "text-sm sm:text-base",
    badge: "text-[9px] px-2 py-0.5",
  },
  md: {
    wrapper: "w-52 sm:w-56 md:w-60 lg:w-64",
    image: "h-64 sm:h-68 md:h-72 lg:h-80",
    title: "text-base sm:text-lg md:text-xl",
    price: "text-base sm:text-lg",
    badge: "text-[10px] px-2.5 py-1",
  },
  lg: {
    wrapper: "w-60 sm:w-64 md:w-72 lg:w-80",
    image: "h-72 sm:h-80 md:h-88 lg:h-96",
    title: "text-lg sm:text-xl md:text-2xl",
    price: "text-lg sm:text-xl",
    badge: "text-xs px-3 py-1",
  },
  xl: {
    wrapper: "w-64 sm:w-72 md:w-80 lg:w-96",
    image: "h-80 sm:h-88 md:h-96 lg:h-[28rem]",
    title: "text-xl sm:text-2xl md:text-3xl",
    price: "text-xl sm:text-2xl",
    badge: "text-xs px-3 py-1.5",
  },
};

const SingleProductCard = ({
  product,
  size = "md",
  title = false,
}: SingleProductCardProps) => {
  const styles = SIZE_STYLES[size];

  return (
    <div className={`group ${styles.wrapper} cursor-pointer`}>
      {/* IMAGE CONTAINER */}
      <div
        className={`
          relative ${styles.image}
          overflow-hidden
          bg-muted/20
          transition-all duration-700 ease-out
        `}
      >
        {/* BADGES */}
        {(product.isNew || product.isBestSeller) && (
          <div className="absolute top-2 left-2 z-20 flex flex-col gap-1">
            {product.isNew && (
              <span
                className={`
                  ${styles.badge}
                  bg-foreground text-background
                  font-secondary font-medium tracking-wider uppercase
                  backdrop-blur-sm
                  transition-all duration-500 ease-out
                  opacity-90 group-hover:opacity-100
                `}
              >
                New
              </span>
            )}
            {product.isBestSeller && (
              <span
                className={`
                  ${styles.badge}
                  bg-background text-foreground
                  border border-foreground/15
                  font-secondary font-medium tracking-wider uppercase
                  backdrop-blur-sm
                  transition-all duration-500 ease-out
                  opacity-90 group-hover:opacity-100
                `}
              >
                Best
              </span>
            )}
          </div>
        )}

        {/* IMAGE */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="
            object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-foreground/0
            group-hover:bg-foreground/5
            transition-all duration-700 ease-out
          "
        />
      </div>

      {/* CONTENT */}
      <div className="mt-2 space-y-0.5">
        {/* PRODUCT NAME */}
        {title && (
          <h3
            className={`
              ${styles.title}
              font-secondary font-medium
              capitalize
              text-foreground
              transition-all duration-500 ease-out
              group-hover:text-foreground/80
            `}
          >
            {product.name}
          </h3>
        )}

        {/* PRICE */}
        <div className="flex items-baseline justify-center">
          <span
            className={`
              ${styles.price}
              font-secondary font-light
              text-foreground
              tracking-wide
              transition-all duration-500 ease-out
            `}
          >
            {product.currency}
            {product.price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
