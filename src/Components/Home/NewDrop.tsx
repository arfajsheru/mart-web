// app/(sections)/PerfumeSection.tsx

"use client";

import {
  clothingProducts,
  newArrivalCloth,
  newArrivalPerfume,
  Perfumeproducts,
} from "@/src/utils/data";
import { EditorialSection } from "../EditorialSection/EditorialSection";

export const NewDrop = () => {
  return (
    <div className="bg-background">
      <EditorialSection
        title="New Arrivals"
        subtitle="Signature fragrances for the discerning"
        carouselItems={newArrivalPerfume}
        products={Perfumeproducts}
        ctaLabel="Explore Perfumes"
        onCtaClick={() => {
          // Handle navigation
          console.log("Navigate to perfumes");
        }}
        carouselInterval={5000}
      />

      <EditorialSection
        title="New Collection"
        subtitle="Contemporary essentials, refined"
        carouselItems={newArrivalCloth}
        products={clothingProducts}
        ctaLabel="Explore Clothing"
        onCtaClick={() => {
          // Handle navigation
          console.log("Navigate to clothing");
        }}
        carouselInterval={5500}
      />
    </div>
  );
};
