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
    badge: "text-[7px] px-1 py-[1px]",
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
  title,
}: SingleProductCardProps) => {
  const styles = SIZE_STYLES[size];

  return (
    <div className={`${styles.wrapper}`}>
      {/* IMAGE CONTAINER */}
      <div
        className={`
          relative ${styles.image}
          overflow-hidden
          bg-muted/30
        `}
      >
        {/* BADGES */}
        <div className="absolute top-2 left-2 z-20 flex flex-col gap-1.5">
          {product.isNew && (
            <span
              className={`
                ${styles.badge}
                bg-muted
                font-bold tracking-wider uppercase
                backdrop-blur-sm leading-2
                transition-all duration-300
                group-hover:scale-105
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
                border border-foreground/20
                font-medium tracking-wider uppercase
                backdrop-blur-sm
                transition-all duration-300
                group-hover:scale-105
              `}
            >
              Best Seller
            </span>
          )}
        </div>

        {/* IMAGE */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          className="
            object-cover
            
          "
        />

        {/* SUBTLE GRADIENT OVERLAY */}
        <div
          className="
            absolute inset-0
             to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
          "
        />
      </div>

      {/* CONTENT */}
      <div className="mt-0.5">
        {/* PRODUCT NAME */}
        {title && (
          <h3
            className={`
            ${styles.title}
            font-secondary font-semibold
            capitalize leading-tight
            text-foreground
            transition-all duration-300
            group-hover:tracking-wide
          `}
          >
            {product.name}
          </h3>
        )}

        {/* PRICE */}
        <div className="flex items-baseline gap-1">
          <span
            className={`
              ${styles.price}
              font-primary font-medium
              text-foreground text-center w-full
              transition-all duration-300
            `}
          >
            {product.currency}
            {product.price.toLocaleString()}
          </span>
        </div>

        {/* RATING (if available) */}
        {/* {product.rating && (
          <div className="flex items-center gap-1 pt-1">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`
                    w-3 h-3 sm:w-3.5 sm:h-3.5
                    ${i < Math.floor(product.rating!) ? "text-foreground" : "text-muted"}
                    transition-colors duration-300
                  `}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">
              ({product.rating.toFixed(1)})
            </span>
          </div>
        )} */}
      </div>

      {/* SUBTLE HOVER INDICATOR */}
      <div
        className="
          absolute -bottom-1 left-0 right-0
          h-0.5 bg-foreground
          scale-x-0 group-hover:scale-x-100
          transition-transform duration-500 ease-out
          origin-left
        "
      />
    </div>
  );
};

export default SingleProductCard;
