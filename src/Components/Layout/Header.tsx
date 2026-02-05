"use client";

import { useState, useEffect } from "react";
import { Menu, Search, Heart } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import MenuDrawer from "./MenuDrawer";
import logo from "../../images/ld-logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contactus" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // 🔹 Detect scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full h-20 px-6 md:px-10
          z-50 
          transition-all duration-300
          ${
            scrolled
              ? "bg-background/95 backdrop-blur shadow-sm text-foreground"
              : "bg-transparent text-white"
          }
        `}
      >
        <div className="mx-auto flex h-full items-center justify-between">
          {/* ================= LEFT ================= */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="hidden md:inline-flex"
              whileTap={{ scale: 0.95 }}
            >
              <Menu size={20} strokeWidth={1.25} />
            </motion.button>

            <Link href="/" className="flex items-center">
              <div className="text-5xl font-ibm">
               <h1>LD</h1>
              </div>
            </Link>
          </div>

          {/* ================= DESKTOP RIGHT ================= */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 border-b border-current/30 w-64">
              <Search size={16} className="opacity-70" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent py-1 text-xs font-secondary uppercase focus:outline-none w-full placeholder:opacity-60"
              />
            </div>

            <nav className="flex items-center gap-4 text-sm font-secondary uppercase">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link key={item.href} href={item.href}>
                    <motion.span
                      className={`text-xs cursor-pointer transition-colors ${
                        isActive
                          ? "opacity-100"
                          : "opacity-70 hover:opacity-100"
                      }`}
                      whileHover={{ y: -2 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* ================= MOBILE RIGHT ================= */}
          <div className="flex md:hidden items-center gap-4">
            <Heart size={20} strokeWidth={1.25} />
            <Search size={20} strokeWidth={1.25} />

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

      {/* Drawer */}
      <MenuDrawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
};

export default Header;
