// components/NewArrivalCarousel/data.ts

import { StaticImageData } from "next/image";

import Perfume1 from "../images/perfume1.jpg";
import Perfume2 from "../images/perfume2.jpg";
import Perfume3 from "../images/perfume3.jpg";
import Perfume4 from "../images/perfume4.jpg";
import Perfume5 from "../images/perfume5.jpg";

export interface CarouselImage {
  src: StaticImageData;
  alt: string;
}

export const newArrivalImages: CarouselImage[] = [
  {
    src: Perfume1,
    alt: "Luxury perfume new arrival bottle showcase",
  },
  {
    src: Perfume2,
    alt: "Premium fragrance collection latest launch",
  },
  {
    src: Perfume3,
    alt: "Designer perfume new stock editorial shot",
  },
  {
    src: Perfume4,
    alt: "Exclusive perfume new arrival for men and women",
  },
  {
    src: Perfume5,
    alt: "Elegant fragrance new collection launch",
  },
];



export interface SingleProduct {
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

export const singleProduct: SingleProduct = {
  id: 101,
  name: "Oud Royale",
  category: "Perfume",
  price: 2499,
  currency: "₹",
  image: Perfume4,
  isNew: true,
  isBestSeller: false,
  rating: 4.6,
};





export interface SingleProduct {
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

export const products: SingleProduct[] = [
  {
    id: 1,
    name: "Berry",
    category: "Perfume",
    price: 2199,
    currency: "₹",
    image: Perfume1,
    isNew: true,
    isBestSeller: false,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Paris",
    category: "Perfume",
    price: 2399,
    currency: "₹",
    image: Perfume2,
    isNew: false,
    isBestSeller: true,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Million",
    category: "Perfume",
    price: 2699,
    currency: "₹",
    image: Perfume3,
    isNew: false,
    isBestSeller: true,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Vetiver",
    category: "Perfume",
    price: 2299,
    currency: "₹",
    image: Perfume4,
    isNew: true,
    isBestSeller: false,
    rating: 4.4,
  },
  {
    id: 5,
    name: "Cool Water",
    category: "Perfume",
    price: 2599,
    currency: "₹",
    image: Perfume5,
    isNew: false,
    isBestSeller: true,
    rating: 4.9,
  },
  {
    id: 6,
    name: "Impriyal Velly",
    category: "Perfume",
    price: 2499,
    currency: "₹",
    image: Perfume1,
    isNew: true,
    isBestSeller: false,
    rating: 4.6,
  },
  {
    id: 7,
    name: "Icon",
    category: "Perfume",
    price: 2799,
    currency: "₹",
    image: Perfume2,
    isNew: false,
    isBestSeller: true,
    rating: 4.8,
  },
  {
    id: 8,
    name: "Bitter Peach",
    category: "Perfume",
    price: 2999,
    currency: "₹",
    image: Perfume3,
    isNew: false,
    isBestSeller: false,
    rating: 4.7,
  },
  {
    id: 9,
    name: "Candy",
    category: "Perfume",
    price: 2199,
    currency: "₹",
    image: Perfume4,
    isNew: true,
    isBestSeller: false,
    rating: 4.3,
  },
  {
    id: 10,
    name: "Guava Elixir",
    category: "Perfume",
    price: 2699,
    currency: "₹",
    image: Perfume5,
    isNew: false,
    isBestSeller: true,
    rating: 4.6,
  },
  {
    id: 11,
    name: "Pistachio",
    category: "Perfume",
    price: 2399,
    currency: "₹",
    image: Perfume1,
    isNew: true,
    isBestSeller: false,
    rating: 4.4,
  },
  {
    id: 12,
    name: "Oriental",
    category: "Perfume",
    price: 2899,
    currency: "₹",
    image: Perfume2,
    isNew: false,
    isBestSeller: true,
    rating: 4.8,
  },
  {
    id: 13,
    name: "Violet",
    category: "Perfume",
    price: 2299,
    currency: "₹",
    image: Perfume3,
    isNew: true,
    isBestSeller: false,
    rating: 4.5,
  },
  {
    id: 14,
    name: "Oud",
    category: "Perfume",
    price: 3199,
    currency: "₹",
    image: Perfume4,
    isNew: false,
    isBestSeller: true,
    rating: 4.9,
  },
  {
    id: 15,
    name: "Pink",
    category: "Perfume",
    price: 2099,
    currency: "₹",
    image: Perfume5,
    isNew: true,
    isBestSeller: false,
    rating: 4.2,
  },
  {
    id: 16,
    name: "Dilisias",
    category: "Perfume",
    price: 2599,
    currency: "₹",
    image: Perfume1,
    isNew: false,
    isBestSeller: true,
    rating: 4.7,
  },
  {
    id: 17,
    name: "Flora",
    category: "Perfume",
    price: 2799,
    currency: "₹",
    image: Perfume2,
    isNew: true,
    isBestSeller: false,
    rating: 4.6,
  },
  {
    id: 18,
    name: "Hazelnut",
    category: "Perfume",
    price: 2899,
    currency: "₹",
    image: Perfume3,
    isNew: false,
    isBestSeller: true,
    rating: 4.8,
  },
];