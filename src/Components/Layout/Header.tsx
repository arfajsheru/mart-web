"use client";

import { useState, useEffect } from "react";
import { Menu, Heart } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import MenuDrawer from "./MenuDrawer";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Perfume", href: "/perfume" },
  { label: "Clothing", href: "/clothing" },
  { label: "Contact", href: "/contactus" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full h-16 z-50
          px-6 md:px-10
          transition-all duration-300
          ${scrolled ? "bg-background shadow-sm" : "bg-transparent text-white"}
        `}
      >
        <div className="relative mx-auto flex h-full items-center justify-between">
          {/* LEFT — LOGO */}
          <Link href="/" className="flex items-center">
            <h1 className="text-4xl font-ibm tracking-tight">LD</h1>
          </Link>

          {/* CENTER — DESKTOP NAV */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-secondary uppercase">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link key={item.href} href={item.href}>
                  <motion.span
                    className={`
                      text-xs tracking-wide cursor-pointer
                      transition-opacity
                      ${isActive ? "opacity-100" : "opacity-60 hover:opacity-100"}
                    `}
                    whileHover={{ y: -2 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              );
            })}
          </nav>

          {/* RIGHT — MOBILE ICONS */}
          <div className="flex md:hidden items-center gap-4">
            <Heart size={20} strokeWidth={1.25} />

            <motion.button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              whileTap={{ scale: 0.9 }}
            >
              <Menu size={20} strokeWidth={1.25} />
            </motion.button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <MenuDrawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
