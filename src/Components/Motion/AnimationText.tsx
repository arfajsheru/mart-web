"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: customDelay,
      ease: [0.16, 1, 0.3, 1], // ✅ correct easing format
    },
  }),
};

const AnimatedText = ({
  children,
  className,
  delay = 0,
}: AnimatedTextProps) => {
  return (
    <motion.div
      variants={textVariants}
      initial="hidden"
      animate="visible"
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;