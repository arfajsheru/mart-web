"use client";

import { useState, useEffect } from "react";
import { Menu, Heart, Search, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MenuDrawer from "./MenuDrawer";

const navItems = [
  { 
    label: "Home", 
    href: "/",
    hasDropdown: false
  },
  { 
    label: "Perfume", 
    href: "/perfume",
    hasDropdown: true,
    dropdown: {
      categories: [
        {
          title: "Women's Fragrances",
          items: [
            { label: "Floral Elegance", href: "/perfume/women/floral" },
            { label: "Oriental Mystique", href: "/perfume/women/oriental" },
            { label: "Fresh & Light", href: "/perfume/women/fresh" },
            { label: "Gourmand Sweet", href: "/perfume/women/gourmand" }
          ]
        },
        {
          title: "Men's Fragrances",
          items: [
            { label: "Woody & Earthy", href: "/perfume/men/woody" },
            { label: "Aromatic Spice", href: "/perfume/men/aromatic" },
            { label: "Citrus Fresh", href: "/perfume/men/citrus" },
            { label: "Leather & Oud", href: "/perfume/men/leather" }
          ]
        },
        {
          title: "Special Collections",
          items: [
            { label: "Signature Series", href: "/perfume/signature" },
            { label: "Limited Edition", href: "/perfume/limited" },
            { label: "Best Sellers", href: "/perfume/bestsellers" },
            { label: "Gift Sets", href: "/perfume/giftsets" }
          ]
        }
      ]
    }
  },
  { 
    label: "Clothing", 
    href: "/clothing",
    hasDropdown: true,
    dropdown: {
      categories: [
        {
          title: "Women's Collection",
          items: [
            { label: "Evening Dresses", href: "/clothing/women/dresses" },
            { label: "Blouses & Tops", href: "/clothing/women/tops" },
            { label: "Skirts & Pants", href: "/clothing/women/bottoms" },
            { label: "Outerwear", href: "/clothing/women/outerwear" }
          ]
        },
        {
          title: "Men's Collection",
          items: [
            { label: "Dress Shirts", href: "/clothing/men/shirts" },
            { label: "Trousers", href: "/clothing/men/pants" },
            { label: "Blazers & Suits", href: "/clothing/men/jackets" },
            { label: "Casual Wear", href: "/clothing/men/casual" }
          ]
        },
        {
          title: "Luxury Accessories",
          items: [
            { label: "Handbags", href: "/clothing/accessories/bags" },
            { label: "Fine Jewelry", href: "/clothing/accessories/jewelry" },
            { label: "Silk Scarves", href: "/clothing/accessories/scarves" },
            { label: "Belts & More", href: "/clothing/accessories/belts" }
          ]
        }
      ]
    }
  },
  { 
    label: "About", 
    href: "/about",
    hasDropdown: false
  },
  { 
    label: "Contact", 
    href: "/contactus",
    hasDropdown: false
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
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
          ${scrolled ? "bg-background/70 backdrop-blur-xs shadow-sm" : "bg-background"}
        `}
      >
        <div className="relative mx-auto flex h-full items-center justify-between">
          {/* LEFT — LOGO */}
          <Link href="/" className="flex items-center">
            <div className="flex flex-col leading-none">
              <span className="text-[20px] font-title font-bold tracking-wide uppercase">
                LOUIS DIANA
              </span>
              <span className="mt-1 text-[7px] font-ibm-plex-sans tracking-[0.3em] opacity-70">
                PERFUME & CLOTHING
              </span>
            </div>
          </Link>

          {/* CENTER — DESKTOP NAV WITH DROPDOWNS */}
          <nav 
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-secondary uppercase"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {navItems.map((item, index) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              
              const isHovered = hoveredItem === index;

              return (
                <div 
                  key={item.href} 
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setHoveredItem(index)}
                >
                  <Link href={item.href} className="flex items-center gap-1">
                    <span
                      className={`
                        text-xs font-semibold tracking-wide cursor-pointer
                        transition-opacity
                        ${isActive ? "opacity-100" : "opacity-60 hover:opacity-100"}
                      `}
                    >
                      {item.label}
                    </span>
                    
                    {/* CHEVRON ICON - Only for dropdown items */}
                    {item.hasDropdown && (
                      <motion.div
                        animate={{ 
                          y: isHovered ? -3 : 0,
                          rotate: isHovered ? 180 : 0
                        }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        <ChevronDown 
                          size={15} 
                          className={`transition-opacity ${isActive ? "opacity-100" : "opacity-60"}`}
                        />
                      </motion.div>
                    )}
                  </Link>

                  {/* DROPDOWN */}
                  <AnimatePresence>
                    {item.hasDropdown && isHovered && (
                      <DropdownContent dropdown={item.dropdown} />
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* RIGHT — SEARCH + MOBILE ICONS */}
          <div className="flex items-center gap-6">
            {/* DESKTOP SEARCH */}
            <div className="hidden cursor-pointer md:flex items-center gap-2 border-b border-foreground/40 w-52 pb-1">
              <Search size={14} strokeWidth={1.5} className="opacity-60" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent cursor-pointer text-xs tracking-wide uppercase placeholder:opacity-50 focus:outline-none w-32"
              />
            </div>

            {/* MOBILE ICONS */}
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

// DROPDOWN CONTENT COMPONENT
function DropdownContent({ dropdown }: { dropdown: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-max "
    >

      
      {/* DROPDOWN CONTAINER */}
      <div className="relative bg-background border border-foreground/10 rounded-sm  p-6">
        <div className="flex gap-8">
          {dropdown.categories.map((category: any, idx: number) => (
            <div key={idx} className="flex-1">
              <h3 className="text-xs font-bold tracking-wider uppercase mb-3 opacity-90">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.items.map((item: any, itemIdx: number) => (
                  <Link 
                    key={itemIdx} 
                    href={item.href}
                    className="block text-xs tracking-wide opacity-60 hover:opacity-100 transition-opacity"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}