"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
};

interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const MenuDrawer = ({ open, onClose, navItems }: MenuDrawerProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* ================= RIGHT SIDE OVERLAY ================= */}
          <motion.div
            className="
              fixed inset-0 z-40
               backdrop-blur-xs
              md:left-1/2
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* ================= LEFT DRAWER ================= */}
          <motion.div
            className="
              fixed top-0 left-0 z-50
              h-full w-full md:w-1/2
              bg-background
            "
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.35 }}
          >
            <div className="relative h-full p-6 md:p-10">
              {/* Close Button (Desktop + Mobile) */}
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="absolute right-6 top-6 text-foreground"
              >
                <X size={28} strokeWidth={1.25} />
              </button>

              {/* Menu Content */}
              <nav className="mt-20 flex flex-col gap-6">
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
                      className={`text-2xl font-title transition-colors ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuDrawer;
