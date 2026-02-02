"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Sparkles, Shirt, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../images/ld-logo.png";

type NavItem = {
  label: string;
  href: string;
};

interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const businessCategories = {
  perfume: [
    { label: "Men Perfume", href: "/perfume/men" },
    { label: "Women Perfume", href: "/perfume/women" },
    { label: "Luxury Perfume", href: "/perfume/luxury" },
  ],
  garment: [
    { label: "Men Garments", href: "/garment/men" },
    { label: "Women Garments", href: "/garment/women" },
    { label: "Kids Garments", href: "/garment/kids" },
  ],
};

const MenuDrawer = ({ open, onClose, navItems }: MenuDrawerProps) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<"perfume" | "garment" | null>(null);

  const toggleDropdown = (dropdown: "perfume" | "garment") => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:left-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 left-0 z-50 h-full w-full md:w-1/2 bg-background shadow-2xl"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="h-full overflow-y-auto">
              <div className="min-h-full p-5 md:p-8 flex flex-col gap-8 md:gap-10">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div className="relative h-12 w-12 md:h-16 md:w-16">
                    <Image
                      src={logo}
                      alt="Leiuce Diaona"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                  <button
                    onClick={onClose}
                    className="text-foreground p-2 rounded-full hover:bg-muted/40 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} strokeWidth={1.5} />
                  </button>
                </div>

                {/* Collections Section */}
                <div className="space-y-3">
                  <h2 className="text-sm md:text-md font-secondary uppercase tracking-wide font-semibold text-foreground">
                    Our Collections
                  </h2>

                  {/* Perfume Dropdown */}
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleDropdown("perfume")}
                      className="w-full flex items-center justify-between py-1 md:py-2 px-4 rounded-sm bg-muted/50 hover:bg-muted/50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Sparkles size={20} className="text-foreground" />
                        <span className="text-xs md:text-sm font-secondary uppercase tracking-wide text-foreground">
                          Perfume
                        </span>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`text-foreground transition-transform duration-300 ${
                          openDropdown === "perfume" ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openDropdown === "perfume" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <nav className="flex flex-col gap-2 pl-4 pt-2">
                            {businessCategories.perfume.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className=" ml-2 md:ml-3 text-xs md:text-sm font-secondary text-muted-foreground hover:text-foreground transition-colors py-1"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </nav>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Garment Dropdown */}
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleDropdown("garment")}
                      className="w-full flex items-center justify-between py-1 md:py-2 px-4 rounded-md bg-muted/50 hover:bg-muted/50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Shirt size={20} className="text-foreground" />
                        <span className="text-xs md:text-sm font-secondary uppercase tracking-wide text-foreground">
                          Garment
                        </span>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`text-foreground transition-transform duration-300 ${
                          openDropdown === "garment" ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openDropdown === "garment" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <nav className="flex flex-col gap-2 pl-4 pt-2">
                            {businessCategories.garment.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className=" ml-2 md:ml-3 text-xs md:text-sm font-secondary text-muted-foreground hover:text-foreground transition-colors py-1"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </nav>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Information Section */}
                <div className="space-y-3">
                  <h2 className="text-sm md:text-md font-secondary uppercase tracking-wide font-semibold text-foreground">
                    Information
                  </h2>

                  <nav className="flex flex-col gap-2 pl-2 md:pl-3">
                    {navItems.map((item) => {
                      const isActive =
                        item.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(item.href);

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={onClose}
                          className={`text-xs md:text-sm font-secondary uppercase tracking-wide transition-colors py-1 ${
                            isActive
                              ? "text-foreground font-medium"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuDrawer;