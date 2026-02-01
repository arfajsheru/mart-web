import React from "react";

const Home = () => {
  return (
    <section className="space-y-8 max-w-3xl mx-auto py-12">
      {/* Title / Heading */}
      <h1 className="font-title text-5xl tracking-tight text-foreground">
        Crafting Premium Fragrances for Global Brands
      </h1>

      {/* Primary body text */}
      <p className="font-primary text-base leading-relaxed text-foreground">
        AUFMART is a wholesale perfume manufacturer focused on delivering
        high-quality, long-lasting fragrances tailored for modern businesses.
        Our manufacturing process combines precision, consistency, and premium
        raw materials to ensure every batch meets international standards.
      </p>

      {/* Secondary / description text */}
      <p className="font-secondary text-sm leading-relaxed text-muted-foreground">
        From private label solutions to bulk fragrance production, we support
        brands at every stage of growth. Our flexible manufacturing capabilities
        and strict quality control make us a trusted partner for B2B buyers
        across domestic and international markets.
      </p>
    </section>
  );
};

export default Home;
