"use client";

import { useState } from "react";
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
  const pathname = usePathname();

  return (
    <>
      <header className="w-full h-20 px-6 md:px-10 bg-background relative z-20">
        <div className="mx-auto flex h-full items-center justify-between">
          {/* ================= LEFT ================= */}
          <div className="flex items-center gap-4">
            {/* Desktop Menu Icon */}
            <motion.button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="hidden md:inline-flex text-foreground"
              whileTap={{ scale: 0.95 }}
            >
              <Menu size={20} strokeWidth={1.25} />
            </motion.button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-10 md:h-14 md:w-14">
                <Image
                  src={logo}
                  alt="Leiuce Diaona"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* ================= DESKTOP RIGHT ================= */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 border-b w-64">
              <Search size={16} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent py-1 text-xs font-secondary uppercase focus:outline-none w-full"
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
                      className={`text-xs font-primary cursor-pointer ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
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
            {/* Favorite */}
            <Heart size={20} strokeWidth={1.25} />

            {/* Search */}
            <Search size={20} strokeWidth={1.25} />

            {/* Menu */}
            <motion.button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="text-foreground"
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
