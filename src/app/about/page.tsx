"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  // Smooth, luxury animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const services = [
    {
      title: "Bulk Perfume Manufacturing",
      description:
        "High-volume production with unwavering quality standards. From thousands to millions of units, we scale seamlessly with your business growth.",
    },
    {
      title: "Private Label Solutions",
      description:
        "Complete white-label fragrance development from conceptualization to market-ready products. Your brand, our manufacturing excellence.",
    },
    {
      title: "Custom Fragrance Development",
      description:
        "Bespoke scent creation tailored to your unique brand identity. Our master perfumers bring your olfactory vision to life.",
    },
    {
      title: "Corporate & Retail Supply",
      description:
        "Dependable supply partnerships for retailers, boutiques, and corporate clients with flexible MOQs and consistent delivery.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation & Requirement Analysis",
      description:
        "Deep-dive discovery sessions to understand your brand essence, market positioning, and fragrance specifications.",
    },
    {
      number: "02",
      title: "Fragrance Creation & Sampling",
      description:
        "Our perfumers craft custom formulations with iterative sampling until we achieve your perfect signature scent.",
    },
    {
      number: "03",
      title: "Quality Testing & Compliance",
      description:
        "Comprehensive testing protocols ensuring IFRA standards, stability testing, and regulatory compliance across markets.",
    },
    {
      number: "04",
      title: "Bulk Production",
      description:
        "State-of-the-art manufacturing with precision equipment and multi-stage quality verification at every production phase.",
    },
    {
      number: "05",
      title: "Packaging & Delivery",
      description:
        "Professional packaging solutions and logistics management ensuring your products reach market on schedule.",
    },
  ];

  const strengths = [
    {
      title: "Premium Ingredients",
      description:
        "Sourcing only the finest raw materials from established fragrance houses and certified suppliers globally.",
    },
    {
      title: "Strict Quality Control",
      description:
        "Multi-tiered testing and validation processes ensuring every batch meets our exacting standards.",
    },
    {
      title: "Scalable Production",
      description:
        "Advanced manufacturing infrastructure capable of growing alongside your business demands.",
    },
    {
      title: "Reliable Timelines",
      description:
        "Proven track record of on-time delivery with transparent project management and communication.",
    },
    {
      title: "Long-term Partnerships",
      description:
        "Building enduring relationships through dedicated support, flexibility, and mutual growth commitment.",
    },
  ];

  const coreValues = [
    {
      title: "Trust",
      description:
        "Building every partnership on transparency, ethical practices, and unwavering reliability.",
    },
    {
      title: "Consistency",
      description:
        "Delivering the same exceptional quality across every batch, every order, every time.",
    },
    {
      title: "Innovation",
      description:
        "Continuously evolving our formulations, processes, and services to exceed industry standards.",
    },
    {
      title: "Partnership",
      description:
        "Your success is our success—we grow together through collaboration and shared vision.",
    },
  ];

  return (
    <section className="min-h-screen bg-background text-foreground">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-44 lg:py-52">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-5xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="mb-6"
            >
              <span className="font-secondary text-sm tracking-widest uppercase text-muted-foreground">
                B2B Fragrance Excellence
              </span>
            </motion.div>
            <h1 className="font-hero uppercase text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight mb-8 leading-[1.1]">
              Crafting Fragrances for Brands, Not Just Customers
            </h1>
            <p className="font-primary text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl leading-relaxed">
              Leiuce Diaona Perfumes partners with businesses worldwide to
              create, manufacture, and deliver premium fragrances at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeInUp}
            >
              <span className="font-secondary text-sm tracking-widest uppercase text-muted-foreground mb-6 block">
                About Us
              </span>
              <h2 className="font-title text-4xl md:text-5xl lg:text-6xl mb-8 tracking-tight">
                Who We Are
              </h2>
              <div className="space-y-6 font-primary text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>
                  Leiuce Diaona Perfumes stands at the intersection of artisanal
                  craftsmanship and industrial-scale manufacturing excellence.
                  For over two decades, we've been the trusted partner for
                  brands seeking uncompromising quality in fragrance production.
                </p>
                <p>
                  Our state-of-the-art facilities marry time-honored perfumery
                  traditions with cutting-edge manufacturing technology,
                  enabling us to deliver fragrances that exceed industry
                  benchmarks while maintaining the scalability modern businesses
                  demand.
                </p>
                <p>
                  From emerging private-label ventures to established
                  multinational retailers, we understand the nuanced challenges
                  of bringing fragrances to market. Our dedicated team of master
                  perfumers, chemists, and production specialists work
                  exclusively in the B2B space, ensuring every partnership
                  receives the strategic focus and technical expertise it
                  deserves.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={scaleIn}
              className="relative"
            >
              <div className="aspect-[4/5] bg-muted rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1200&q=90"
                  alt="Leiuce Diaona Perfumes manufacturing facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-card border border-border rounded-xl p-6 shadow-xl"
              >
                <p className="font-ibm text-5xl font-bold mb-2">20+</p>
                <p className="font-secondary text-sm text-muted-foreground">
                  Years of Excellence
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="border-b border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeInUp}
            className="mb-16 md:mb-20"
          >
            <span className="font-secondary text-sm tracking-widest uppercase text-muted-foreground mb-6 block">
              Our Services
            </span>
            <h2 className="font-title text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
              What We Do
            </h2>
            <p className="font-primary text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Comprehensive B2B fragrance solutions engineered to transform your
              vision into market-ready products.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
                }}
                className="bg-card border border-border rounded-2xl p-8 md:p-10 hover:shadow-2xl transition-shadow duration-500"
              >
                <h3 className="font-title text-2xl md:text-3xl mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="font-primary text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeInUp}
            className="mb-16 md:mb-20"
          >
            <span className="font-secondary text-sm tracking-widest uppercase text-muted-foreground mb-6 block">
              How We Work
            </span>
            <h2 className="font-title text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
              Our Process
            </h2>
            <p className="font-primary text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              A meticulously designed workflow that ensures quality, efficiency,
              and partnership excellence at every stage.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8 md:space-y-12"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="grid md:grid-cols-12 gap-6 md:gap-10 items-start pb-8 md:pb-12 border-b border-border last:border-b-0"
              >
                <div className="md:col-span-2">
                  <span className="font-ibm text-6xl md:text-7xl font-light text-muted-foreground/20">
                    {step.number}
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-title text-2xl md:text-3xl mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-primary text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="border-b border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={scaleIn}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=1200&q=90"
                  alt="Premium perfume collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={staggerContainer}
              className="order-1 lg:order-2"
            >
              <motion.div variants={fadeInUp}>
                <span className="font-secondary text-sm tracking-widest uppercase text-muted-foreground mb-6 block">
                  Our Strengths
                </span>
                <h2 className="font-title text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-16 tracking-tight">
                  Why Choose Leiuce Diaona Perfumes
                </h2>
              </motion.div>

              <div className="space-y-8 md:space-y-10">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="border-l-2 border-border pl-6 md:pl-8 hover:border-primary transition-colors duration-500"
                  >
                    <h3 className="font-title text-xl md:text-2xl mb-3 tracking-tight">
                      {strength.title}
                    </h3>
                    <p className="font-secondary text-base md:text-lg text-muted-foreground leading-relaxed">
                      {strength.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION & VALUES */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeInUp}
              className="text-center mb-16 md:mb-20"
            >
              <span className="font-secondary text-sm tracking-widest uppercase text-muted-foreground mb-6 block">
                Our Foundation
              </span>
              <h2 className="font-title text-4xl md:text-5xl lg:text-6xl mb-8 tracking-tight">
                Vision & Values
              </h2>
              <p className="font-primary text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Our vision is to redefine B2B fragrance manufacturing by
                becoming the world's most trusted partner—where brands discover
                not merely a supplier, but a committed collaborator deeply
                invested in their enduring success.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-6 md:gap-8"
            >
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
                  }}
                  className="bg-card border border-border rounded-2xl p-8 md:p-10"
                >
                  <h3 className="font-title text-2xl md:text-3xl mb-4 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="font-secondary text-lg text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* B2B CALL TO ACTION */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 tracking-tight leading-[1.1]">
              Let's Build Your Fragrance Brand Together
            </h2>
            <p className="font-primary text-xl md:text-2xl mb-12 md:mb-16 opacity-95 leading-relaxed">
              Ready to create exceptional fragrances that define your brand
              identity? Our team at Leiuce Diaona Perfumes is here to transform
              your vision into reality.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.2 },
              }}
              className="bg-background text-foreground font-primary px-12 py-5 rounded-xl text-lg md:text-xl font-medium hover:shadow-2xl transition-shadow duration-500"
            >
              Start a Partnership
            </motion.button>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
