import Image from "next/image";
import clothe1 from "../../images/clothing1.png";
import AnimatedText from "../Motion/AnimationText";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-10 text-center">
      {/* Background Image */}
      <Image
        src={clothe1}
        alt="Leiuce Diaona Perfumes"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl flex flex-col items-center gap-6 md:gap-8">
        {/* Brand Title */}
        <AnimatedText delay={0}>
          <h1
            className="font-hero uppercase text-white leading-28 sm:leading-[0.9]
            text-[105px] sm:text-6xl md:text-8xl lg:text-[13rem]"
          >
            leiuce diaona perfumes
          </h1>
        </AnimatedText>

        {/* Subtitle */}
        <AnimatedText delay={0.2}>
          <h2
            className="font-ibm text-white/90
            text-base sm:text-lg md:text-2xl lg:text-3xl"
          >
            We Supply Quality Perfumes in Bulk for Retailers and Distributors
          </h2>
        </AnimatedText>

        {/* Tagline */}
        <AnimatedText delay={0.4}>
          <p
            className="font-secondary text-white/70
            text-sm sm:text-base md:text-lg lg:text-xl leading-none"
          >
            “Quality and Care in Every Scent”
          </p>
        </AnimatedText>

        {/* CTA */}
        <AnimatedText delay={0.6}>
          <button
            className="inline-flex items-center justify-center
            rounded-sm bg-white px-6 py-3
            text-xs md:text-sm font-secondary tracking-wide text-black
            hover:bg-white/90 transition"
          >
            Start Your Shop
          </button>
        </AnimatedText>
      </div>
    </section>
  );
};

export default Hero;
