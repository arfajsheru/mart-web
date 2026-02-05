import React from "react";

const Section = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-10 bg-black">
      {/* Overlay / Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl flex flex-col items-center gap-6">
        {/* Title */}
        <h1 className="font-hero uppercase text-white tracking-wide
          text-4xl sm:text-6xl md:text-7xl">
          Coming Soon
        </h1>

        {/* Divider */}
        <span className="block w-20 h-[2px] bg-white/40" />

        {/* Subtitle */}
        <p className="font-secondary text-white/70
          text-sm sm:text-base md:text-lg">
          We are working on something exceptional.  
          Stay tuned for a refined experience.
        </p>
      </div>
    </section>
  );
};

export default Section;