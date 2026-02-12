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

  // Smooth, luxury animation variants
 const fadeInUp: Variants = {
   hidden: { opacity: 0, y: 40 },
   visible: {
     opacity: 1,
     y: 0,
     transition: {
       duration: 0.9,
       ease: [0.25, 0.4, 0.25, 1] as const,
     },
   },
 };


  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };


  const contactInfo = [
    {
      title: "Business Email",
      value: "partnerships@leiucediaona.com",
      description: "For all business inquiries and partnerships",
    },
    {
      title: "Phone Number",
      value: "+1 (555) 123-4567",
      description: "Direct line to our B2B team",
    },
    {
      title: "Manufacturing Facility",
      value: "Los Angeles, California",
      description: "USA • Global shipping available",
    },
  ];

  const whyContactUs = [
    {
      title: "Dedicated B2B Support",
      description:
        "Our specialized team understands the complexities of business partnerships and bulk orders.",
    },
    {
      title: "Custom Fragrance Consultation",
      description:
        "Complimentary consultation sessions with our master perfumers to explore your vision.",
    },
    {
      title: "Reliable Response Timelines",
      description:
        "All inquiries receive a response within 24-48 business hours with detailed information.",
    },
    {
      title: "Long-term Collaboration Focus",
      description:
        "We invest in building lasting partnerships, not just completing transactions.",
    },
  ];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-44 lg:py-52">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="mb-6"
            >
              <span className="font-secondary text-sm tracking-widest uppercase text-muted-foreground">
                Get In Touch
              </span>
            </motion.div>
            <h1 className="font-hero uppercase text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight mb-8 leading-[1.1]">
              Connect With Leiuce Diaona Perfumes
            </h1>
            <p className="font-primary text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can bring your fragrance vision to life
              through our B2B manufacturing excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="border-b border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeInUp}
            className="mb-16 md:mb-20 text-center"
          >
            <span className="font-secondary text-sm tracking-widest uppercase text-muted-foreground mb-6 block">
              Contact Details
            </span>
            <h2 className="font-title text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
              How to Reach Us
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
                }}
                className="bg-card border border-border rounded-2xl p-8 md:p-10 hover:shadow-2xl transition-shadow duration-500"
              >
                <h3 className="font-title text-xl md:text-2xl mb-4 tracking-tight">
                  {info.title}
                </h3>
                <p className="font-primary text-2xl md:text-3xl mb-3 text-foreground">
                  {info.value}
                </p>
                <p className="font-secondary text-sm text-muted-foreground">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BUSINESS INQUIRY FORM */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeInUp}
              className="lg:col-span-2"
            >
              <span className="font-secondary text-sm tracking-widest uppercase text-muted-foreground mb-6 block">
                Business Inquiry
              </span>
              <h2 className="font-title text-4xl md:text-5xl lg:text-6xl mb-8 tracking-tight">
                Send Us Your Requirements
              </h2>
              <p className="font-primary text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Whether you're looking to launch a private label line, place a
                bulk order, or explore a long-term partnership, we're here to
                help.
              </p>
              <p className="font-secondary text-base text-muted-foreground leading-relaxed">
                Fill out the form and our B2B team will reach out to you within
                24-48 business hours to discuss your project in detail.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={scaleIn}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <motion.div
                  animate={{
                    scale: focusedField === "fullName" ? 1.01 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <label
                    htmlFor="fullName"
                    className="font-secondary text-sm tracking-wide uppercase text-muted-foreground mb-3 block"
                  >
                    Full Name *
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
                    className="w-full bg-card border border-border rounded-xl px-6 py-4 font-primary text-lg text-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="John Smith"
                  />
                </motion.div>

                {/* Company Name */}
                <motion.div
                  animate={{
                    scale: focusedField === "companyName" ? 1.01 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <label
                    htmlFor="companyName"
                    className="font-secondary text-sm tracking-wide uppercase text-muted-foreground mb-3 block"
                  >
                    Company Name *
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
                    className="w-full bg-card border border-border rounded-xl px-6 py-4 font-primary text-lg text-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Your Company Ltd."
                  />
                </motion.div>

                {/* Business Email & Phone Number Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    animate={{
                      scale: focusedField === "businessEmail" ? 1.01 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <label
                      htmlFor="businessEmail"
                      className="font-secondary text-sm tracking-wide uppercase text-muted-foreground mb-3 block"
                    >
                      Business Email *
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
                      className="w-full bg-card border border-border rounded-xl px-6 py-4 font-primary text-lg text-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                      placeholder="contact@company.com"
                    />
                  </motion.div>

                  <motion.div
                    animate={{
                      scale: focusedField === "phoneNumber" ? 1.01 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <label
                      htmlFor="phoneNumber"
                      className="font-secondary text-sm tracking-wide uppercase text-muted-foreground mb-3 block"
                    >
                      Phone Number *
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
                      className="w-full bg-card border border-border rounded-xl px-6 py-4 font-primary text-lg text-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                      placeholder="+1 (555) 000-0000"
                    />
                  </motion.div>
                </div>

                {/* Inquiry Type */}
                <motion.div
                  animate={{
                    scale: focusedField === "inquiryType" ? 1.01 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <label
                    htmlFor="inquiryType"
                    className="font-secondary text-sm tracking-wide uppercase text-muted-foreground mb-3 block"
                  >
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("inquiryType")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-card border border-border rounded-xl px-6 py-4 font-primary text-lg text-foreground focus:outline-none focus:border-primary transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Select an inquiry type</option>
                    <option value="bulk-order">Bulk Order</option>
                    <option value="private-label">Private Label</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div
                  animate={{
                    scale: focusedField === "message" ? 1.01 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <label
                    htmlFor="message"
                    className="font-secondary text-sm tracking-wide uppercase text-muted-foreground mb-3 block"
                  >
                    Message *
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
                    className="w-full bg-card border border-border rounded-xl px-6 py-4 font-primary text-lg text-foreground focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project requirements, desired quantities, timeline, and any specific fragrance preferences..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] },
                  }}
                  whileTap={{
                    scale: 0.98,
                    transition: { duration: 0.2 },
                  }}
                  className="w-full bg-primary text-primary-foreground font-primary px-10 py-5 rounded-xl text-lg md:text-xl font-medium hover:shadow-2xl transition-shadow duration-500"
                >
                  Submit Inquiry
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CONTACT US */}
      <section className="border-b border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeInUp}
            className="mb-16 md:mb-20 text-center"
          >
            <span className="font-secondary text-sm tracking-widest uppercase text-muted-foreground mb-6 block">
              Our Commitment
            </span>
            <h2 className="font-title text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
              Why Contact Us
            </h2>
            <p className="font-primary text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the difference of working with a dedicated B2B
              fragrance partner.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 md:gap-8"
          >
            {whyContactUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card border border-border rounded-2xl p-8 md:p-10"
              >
                <h3 className="font-title text-2xl md:text-3xl mb-4 tracking-tight">
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

      {/* OFFICE / WORKING HOURS */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeInUp}
              className="text-center mb-16 md:mb-20"
            >
              <span className="font-secondary text-sm tracking-widest uppercase text-muted-foreground mb-6 block">
                Availability
              </span>
              <h2 className="font-title text-4xl md:text-5xl lg:text-6xl mb-8 tracking-tight">
                Office Hours
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="bg-card border border-border rounded-2xl p-10 md:p-12"
            >
              <div className="space-y-6">
                <motion.div
                  variants={fadeInUp}
                  className="flex justify-between items-center pb-6 border-b border-border"
                >
                  <span className="font-primary text-lg md:text-xl text-foreground">
                    Monday - Friday
                  </span>
                  <span className="font-ibm text-lg md:text-xl text-muted-foreground">
                    9:00 AM - 6:00 PM PST
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex justify-between items-center pb-6 border-b border-border"
                >
                  <span className="font-primary text-lg md:text-xl text-foreground">
                    Saturday
                  </span>
                  <span className="font-ibm text-lg md:text-xl text-muted-foreground">
                    10:00 AM - 4:00 PM PST
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex justify-between items-center pb-6 border-b border-border"
                >
                  <span className="font-primary text-lg md:text-xl text-foreground">
                    Sunday
                  </span>
                  <span className="font-ibm text-lg md:text-xl text-muted-foreground">
                    Closed
                  </span>
                </motion.div>

                <motion.div variants={fadeInUp} className="pt-6">
                  <p className="font-secondary text-base text-muted-foreground leading-relaxed text-center">
                    For urgent matters outside business hours, please send an
                    email and we'll respond as soon as possible.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL B2B CALL TO ACTION */}
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
              Start Your Fragrance Partnership With Us
            </h2>
            <p className="font-primary text-xl md:text-2xl mb-12 md:mb-16 opacity-95 leading-relaxed">
              Join the growing network of brands who trust Leiuce Diaona
              Perfumes for their fragrance manufacturing needs.
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
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
