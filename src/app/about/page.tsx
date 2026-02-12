"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function AboutPage() {
  // Smooth luxury animations
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
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

  const services = [
    {
      icon: "🏭",
      title: "Bulk Manufacturing",
      description:
        "High-volume production capabilities from 1,000 to 1,000,000+ units with consistent quality across every batch.",
    },
    {
      icon: "🏷️",
      title: "Private Label Solutions",
      description:
        "Complete white-label development from concept to market. Your brand vision, our manufacturing mastery.",
    },
    {
      icon: "🎨",
      title: "Custom Formulations",
      description:
        "Bespoke scent creation with master perfumers. Unique fragrances tailored exclusively to your brand DNA.",
    },
    {
      icon: "📦",
      title: "End-to-End Packaging",
      description:
        "Premium bottle design, custom boxes, and complete branding solutions that elevate your product presentation.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      description:
        "Deep-dive sessions to understand your brand identity, target market, and fragrance vision. We explore your goals and define success metrics together.",
    },
    {
      number: "02",
      title: "Scent Development",
      description:
        "Our master perfumers create custom formulations with multiple sampling iterations until we capture your perfect signature scent.",
    },
    {
      number: "03",
      title: "Quality Assurance",
      description:
        "Rigorous testing protocols including IFRA compliance, stability testing, and multi-point quality verification across all production stages.",
    },
    {
      number: "04",
      title: "Scaled Production",
      description:
        "Advanced manufacturing with precision equipment and real-time quality monitoring to ensure batch consistency at any volume.",
    },
    {
      number: "05",
      title: "Logistics & Delivery",
      description:
        "White-glove packaging, global shipping coordination, and on-time delivery to get your products to market seamlessly.",
    },
  ];

  const strengths = [
    {
      title: "Premium Ingredients",
      description:
        "Sourcing the finest raw materials from certified global suppliers and established fragrance houses.",
      metric: "100+",
      metricLabel: "Premium Sources",
    },
    {
      title: "Strict Quality Control",
      description:
        "Multi-tiered testing and validation ensuring every batch exceeds industry standards.",
      metric: "15",
      metricLabel: "Quality Checkpoints",
    },
    {
      title: "Scalable Infrastructure",
      description:
        "State-of-the-art facilities capable of growing alongside your business demands.",
      metric: "1M+",
      metricLabel: "Annual Capacity",
    },
    {
      title: "Expert Team",
      description:
        "Master perfumers, chemists, and production specialists dedicated exclusively to B2B excellence.",
      metric: "50+",
      metricLabel: "Industry Experts",
    },
  ];

  const coreValues = [
    {
      icon: "🤝",
      title: "Trust",
      description:
        "Building partnerships on transparency, ethical practices, and unwavering reliability in every interaction.",
    },
    {
      icon: "⚡",
      title: "Excellence",
      description:
        "Delivering exceptional quality across every batch, every order, every time without compromise.",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "Continuously evolving formulations, processes, and services to stay ahead of industry trends.",
    },
    {
      icon: "💎",
      title: "Partnership",
      description:
        "Your success is our success. We grow together through collaboration and shared vision.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* HERO SECTION - Full Screen */}
      <section className="relative h-screen flex items-center justify-center border-b border-border">
        {/* Animated gradient background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block font-secondary text-xs tracking-[0.3em] uppercase text-muted-foreground border border-border/50 px-6 py-3 rounded-full">
                B2B Fragrance Manufacturing
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-hero uppercase text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter mb-10 leading-[0.95]"
            >
              Crafting
              <br />
              <span className="text-primary">Signature Scents</span>
              <br />
              For Brands
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="font-primary text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-16"
            >
              Where artisanal craftsmanship meets industrial-scale excellence in
              luxury fragrance manufacturing
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex gap-6 justify-center items-center"
            >
              <motion.a
                href="#story"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground font-primary px-10 py-5 rounded-full text-lg font-medium hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
              >
                Our Story
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-border text-foreground font-primary px-10 py-5 rounded-full text-lg font-medium hover:border-primary hover:text-primary transition-all duration-500"
              >
                Explore Services
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="border-b border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { value: "20+", label: "Years Excellence" },
              { value: "500+", label: "Partner Brands" },
              { value: "1M+", label: "Bottles Annually" },
              { value: "50+", label: "Countries Served" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center"
              >
                <div className="font-hero text-5xl md:text-6xl lg:text-7xl text-primary mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="font-secondary text-sm tracking-widest uppercase text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="story" className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 lg:py-48">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeInLeft}
            >
              <span className="font-secondary text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 block">
                Our Story
              </span>
              <h2 className="font-title text-5xl md:text-6xl lg:text-7xl mb-12 tracking-tight leading-[1.1]">
                Two Decades of
                <br />
                Fragrance Excellence
              </h2>
              <div className="space-y-8 font-primary text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>
                  Leiuce Diaona Perfumes was born from a singular vision: to
                  bridge the gap between artisanal perfumery and
                  industrial-scale manufacturing without sacrificing an ounce of
                  quality.
                </p>
                <p>
                  For over 20 years, we've partnered with emerging boutiques and
                  established multinational brands alike, transforming fragrance
                  visions into market-ready products that captivate and inspire.
                </p>
                <p>
                  Our state-of-the-art Los Angeles facility combines
                  time-honored perfumery traditions with cutting-edge
                  technology, enabling us to deliver exceptional fragrances at
                  any scale while maintaining the personal touch that defines
                  luxury.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-12 grid grid-cols-2 gap-8"
              >
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="font-hero text-4xl text-primary mb-2">
                    98%
                  </div>
                  <div className="font-secondary text-sm text-muted-foreground">
                    Client Retention Rate
                  </div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="font-hero text-4xl text-primary mb-2">
                    24h
                  </div>
                  <div className="font-secondary text-sm text-muted-foreground">
                    Average Response Time
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeInRight}
              className="relative"
            >
              <div className="aspect-[4/5] bg-muted rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&q=90"
                  alt="Luxury perfume laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-12 -left-12 bg-primary text-primary-foreground rounded-2xl p-8 shadow-2xl"
              >
                <div className="font-hero text-6xl mb-2">500+</div>
                <div className="font-secondary text-sm">
                  Trusted Partner Brands
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="services" className="border-b border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeInUp}
            className="text-center mb-20 md:mb-28"
          >
            <span className="font-secondary text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 block">
              Our Services
            </span>
            <h2 className="font-title text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight">
              What We Do
            </h2>
            <p className="font-primary text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive B2B solutions from concept to delivery
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-card border border-border rounded-3xl p-10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="font-title text-2xl md:text-3xl mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-secondary text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 lg:py-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeInUp}
            className="text-center mb-20 md:mb-28"
          >
            <span className="font-secondary text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 block">
              How We Work
            </span>
            <h2 className="font-title text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight">
              Our Process
            </h2>
            <p className="font-primary text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A refined workflow ensuring excellence at every stage
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto space-y-16"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
                className="group grid md:grid-cols-12 gap-8 items-start"
              >
                <div className="md:col-span-2">
                  <span className="font-hero text-7xl md:text-8xl font-light text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
                    {step.number}
                  </span>
                </div>
                <div className="md:col-span-10 border-l-2 border-border group-hover:border-primary pl-8 transition-colors duration-500">
                  <h3 className="font-title text-2xl md:text-3xl lg:text-4xl mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
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
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeInUp}
            className="text-center mb-20 md:mb-28"
          >
            <span className="font-secondary text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 block">
              Our Strengths
            </span>
            <h2 className="font-title text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight">
              Why Choose Us
            </h2>
            <p className="font-primary text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Unmatched expertise in luxury fragrance manufacturing
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-card border border-border rounded-3xl p-10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-title text-2xl md:text-3xl tracking-tight group-hover:text-primary transition-colors duration-300">
                    {strength.title}
                  </h3>
                  <div className="text-right">
                    <div className="font-hero text-3xl text-primary">
                      {strength.metric}
                    </div>
                    <div className="font-secondary text-xs text-muted-foreground">
                      {strength.metricLabel}
                    </div>
                  </div>
                </div>
                <p className="font-secondary text-lg text-muted-foreground leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VISION & VALUES */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 lg:py-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeInUp}
            className="text-center mb-20 md:mb-28"
          >
            <span className="font-secondary text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 block">
              Our Foundation
            </span>
            <h2 className="font-title text-5xl md:text-6xl lg:text-7xl mb-12 tracking-tight">
              Vision & Values
            </h2>
            <p className="font-primary text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To redefine B2B fragrance manufacturing by becoming the world's
              most trusted partner—where brands discover not just a supplier,
              but a committed collaborator invested in their success.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group text-center"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="font-title text-2xl md:text-3xl mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="font-secondary text-base text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* IMAGE SHOWCASE */}
      <section className="border-b border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeInLeft}
              className="relative"
            >
              <div className="aspect-square bg-muted rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1200&q=90"
                  alt="Premium fragrance collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeInRight}
            >
              <span className="font-secondary text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 block">
                Our Commitment
              </span>
              <h2 className="font-title text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight leading-[1.1]">
                Crafting Excellence
                <br />
                <span className="text-primary">Every Day</span>
              </h2>
              <div className="space-y-6 font-primary text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>
                  Every bottle that leaves our facility represents our
                  unwavering commitment to perfection. From ingredient sourcing
                  to final packaging, we maintain the highest standards in the
                  industry.
                </p>
                <p>
                  Our dedicated team of master perfumers, chemists, and
                  production specialists work tirelessly to ensure your brand
                  receives not just a product, but a masterpiece that defines
                  luxury.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-tr from-primary via-transparent to-primary/30"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40 lg:py-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="font-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-10 tracking-tight leading-[1.05]">
              Let's Build Your
              <br />
              <span className="text-primary">Fragrance Legacy</span>
            </h2>
            <p className="font-primary text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-16 leading-relaxed">
              Partner with us to create exceptional fragrances that define your
              brand
            </p>
            <motion.a
              href="/contactus"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary text-primary-foreground font-primary px-16 py-6 rounded-full text-xl font-medium hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500"
            >
              Start Your Journey
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
