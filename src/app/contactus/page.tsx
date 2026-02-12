"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phoneNumber: "",
    inquiryType: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
  };

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
                Luxury Fragrance Manufacturing
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-hero uppercase text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter mb-10 leading-[0.95]"
            >
              Let's Create
              <br />
              <span className="text-primary">Something Exceptional</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="font-primary text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-16"
            >
              Partner with us to craft signature fragrances that define your
              brand's essence
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex gap-6 justify-center items-center"
            >
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground font-primary px-10 py-5 rounded-full text-lg font-medium hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
              >
                Start a Conversation
              </motion.a>
              <motion.a
                href="#info"
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
              { value: "500+", label: "Partner Brands" },
              { value: "15+", label: "Years Excellence" },
              { value: "1M+", label: "Bottles Crafted" },
              { value: "98%", label: "Client Satisfaction" },
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

      {/* CONTACT FORM & INFO SECTION */}
      <section id="contact-form" className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 lg:py-48">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
            {/* Left - Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeInLeft}
              className="lg:sticky lg:top-32"
            >
              <span className="font-secondary text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 block">
                Connect With Us
              </span>
              <h2 className="font-title text-5xl md:text-6xl lg:text-7xl mb-12 tracking-tight leading-[1.1]">
                Begin Your
                <br />
                Fragrance Journey
              </h2>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-10 mb-16"
              >
                {[
                  {
                    icon: "📧",
                    title: "Email",
                    value: "partnerships@leiucediaona.com",
                    subtitle: "24/7 support available",
                  },
                  {
                    icon: "📞",
                    title: "Phone",
                    value: "+1 (555) 123-4567",
                    subtitle: "Mon-Fri, 9AM-6PM PST",
                  },
                  {
                    icon: "📍",
                    title: "Location",
                    value: "Los Angeles, California",
                    subtitle: "Global shipping worldwide",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-6 group cursor-pointer"
                  >
                    <div className="text-4xl">{contact.icon}</div>
                    <div>
                      <div className="font-secondary text-xs tracking-widest uppercase text-muted-foreground mb-2">
                        {contact.title}
                      </div>
                      <div className="font-primary text-2xl md:text-3xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {contact.value}
                      </div>
                      <div className="font-secondary text-sm text-muted-foreground">
                        {contact.subtitle}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social proof */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card border border-border rounded-3xl p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-12 h-12 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center font-primary text-sm"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="font-primary text-2xl text-foreground">
                    500+
                  </div>
                </div>
                <p className="font-secondary text-sm text-muted-foreground leading-relaxed">
                  Trusted by leading brands worldwide for exceptional fragrance
                  manufacturing
                </p>
              </motion.div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeInRight}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Full Name */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label
                      htmlFor="fullName"
                      className="font-secondary text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 block"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("fullName")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b-2 border-border pb-4 font-primary text-xl text-foreground focus:outline-none focus:border-primary transition-all duration-500 placeholder:text-muted-foreground/30"
                      placeholder="John Smith"
                    />
                  </motion.div>

                  {/* Company Name */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label
                      htmlFor="companyName"
                      className="font-secondary text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 block"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("companyName")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b-2 border-border pb-4 font-primary text-xl text-foreground focus:outline-none focus:border-primary transition-all duration-500 placeholder:text-muted-foreground/30"
                      placeholder="Luxury Brands Inc."
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Business Email */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label
                      htmlFor="businessEmail"
                      className="font-secondary text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 block"
                    >
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="businessEmail"
                      name="businessEmail"
                      required
                      value={formData.businessEmail}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("businessEmail")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b-2 border-border pb-4 font-primary text-xl text-foreground focus:outline-none focus:border-primary transition-all duration-500 placeholder:text-muted-foreground/30"
                      placeholder="contact@company.com"
                    />
                  </motion.div>

                  {/* Phone Number */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label
                      htmlFor="phoneNumber"
                      className="font-secondary text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 block"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("phoneNumber")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b-2 border-border pb-4 font-primary text-xl text-foreground focus:outline-none focus:border-primary transition-all duration-500 placeholder:text-muted-foreground/30"
                      placeholder="+1 (555) 000-0000"
                    />
                  </motion.div>
                </div>

                {/* Inquiry Type */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <label
                    htmlFor="inquiryType"
                    className="font-secondary text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 block"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("inquiryType")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b-2 border-border pb-4 font-primary text-xl text-foreground focus:outline-none focus:border-primary transition-all duration-500 appearance-none cursor-pointer"
                  >
                    <option value="">Select your inquiry type</option>
                    <option value="bulk-order">Bulk Order (1000+ units)</option>
                    <option value="private-label">
                      Private Label Partnership
                    </option>
                    <option value="custom-formulation">
                      Custom Formulation
                    </option>
                    <option value="consultation">Fragrance Consultation</option>
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <label
                    htmlFor="message"
                    className="font-secondary text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 block"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b-2 border-border pb-4 font-primary text-xl text-foreground focus:outline-none focus:border-primary transition-all duration-500 resize-none placeholder:text-muted-foreground/30"
                    placeholder="Share your vision, project requirements, timeline, and desired quantities..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full bg-primary text-primary-foreground font-primary px-12 py-6 rounded-full text-xl font-medium overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          →
                        </span>
                      </>
                    )}
                  </span>
                </motion.button>

                <p className="font-secondary text-sm text-muted-foreground text-center leading-relaxed">
                  We'll respond within 24 hours with a tailored proposal for
                  your fragrance needs
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY PARTNER WITH US */}
      <section id="info" className="border-b border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeInUp}
            className="text-center mb-20 md:mb-28"
          >
            <span className="font-secondary text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 block">
              Our Excellence
            </span>
            <h2 className="font-title text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight">
              Why Choose Us
            </h2>
            <p className="font-primary text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience unparalleled expertise in luxury fragrance
              manufacturing
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Master Perfumers",
                description:
                  "Work directly with our award-winning perfumers who craft signature scents that capture your brand's unique identity.",
                icon: "🎨",
              },
              {
                title: "Premium Ingredients",
                description:
                  "Access to the finest raw materials sourced globally, ensuring exceptional quality in every bottle.",
                icon: "💎",
              },
              {
                title: "Scalable Production",
                description:
                  "From boutique batches to large-scale manufacturing, we adapt to your growth without compromising quality.",
                icon: "🏭",
              },
              {
                title: "Custom Packaging",
                description:
                  "End-to-end design services for bottles, boxes, and branding that reflect your luxury positioning.",
                icon: "📦",
              },
              {
                title: "Fast Turnaround",
                description:
                  "Industry-leading production timelines with rigorous quality control at every stage of development.",
                icon: "⚡",
              },
              {
                title: "Global Compliance",
                description:
                  "All fragrances meet international regulations including IFRA, EU, and FDA standards for worldwide distribution.",
                icon: "🌍",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-card border border-border rounded-3xl p-10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="font-title text-2xl md:text-3xl mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-secondary text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="font-secondary text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 block">
                Client Success
              </span>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-gradient-to-br from-primary/5 to-transparent border border-border rounded-3xl p-12 md:p-16"
            >
              <div className="text-6xl md:text-7xl text-primary mb-8">"</div>
              <p className="font-primary text-2xl md:text-3xl lg:text-4xl text-foreground mb-10 leading-relaxed">
                Working with Leiuce Diaona transformed our brand. Their
                expertise in crafting our signature scent helped us stand out in
                a crowded market. The quality is unmatched.
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center font-primary text-xl">
                  SM
                </div>
                <div>
                  <div className="font-primary text-xl text-foreground mb-1">
                    Sarah Mitchell
                  </div>
                  <div className="font-secondary text-sm text-muted-foreground">
                    CEO, Essence Boutique
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
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
              Ready to Craft Your
              <br />
              <span className="text-primary">Signature Scent?</span>
            </h2>
            <p className="font-primary text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-16 leading-relaxed">
              Join hundreds of brands who trust us with their fragrance vision
            </p>
            <motion.a
              href="#contact-form"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary text-primary-foreground font-primary px-16 py-6 rounded-full text-xl font-medium hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500"
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
