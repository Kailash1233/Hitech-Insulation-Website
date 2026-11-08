"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavigationProps {
  onMobileMenuChange?: (open: boolean) => void;
}

export function Navigation({ onMobileMenuChange }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  /* Scroll detection */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll — cleanup on unmount to prevent stuck overflow:hidden */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const openMenu = () => {
    setMobileMenuOpen(true);
    onMobileMenuChange?.(true);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    onMobileMenuChange?.(false);
  };

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/industries", label: "Industries & Services" },
    { href: "/pressboard", label: "Pressboard" },
    { href: "/products", label: "Our Products" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-10 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="relative w-32 h-10 flex-shrink-0">
            <Image
              // src={scrolled ? "/HITECHINSULATION.png" : "/HITECHINSULATION-white.png"}
              src="/HITECHINSULATION-white.png"
              alt="Hitech Insulation Logo"
              fill
              priority
              className="object-contain"
            />
          </Link>

          {/* CENTER NAV — desktop only */}
          <div
            className={cn(
              "hidden lg:flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-500",
              scrolled
                ? "bg-white/90 backdrop-blur-xl shadow-md border border-gray-200"
                : "bg-white/20 backdrop-blur-md border border-white/20"
            )}
          >
            {navigationLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium px-4 py-1.5 rounded-full transition-all",
                    isActive
                      ? "bg-blue-700 text-white"
                      : scrolled
                        ? "text-gray-700 hover:text-blue-600"
                        : "text-white hover:text-white/80"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* CONTACT CTA — adapts to scroll state */}
            <Link
              href="/contact"
              className={cn(
                "hidden md:inline-flex px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                scrolled
                  ? "bg-blue-700 text-white hover:bg-blue-800"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              )}
            >
              Contact us
            </Link>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              onClick={openMenu}
              aria-label="Open menu"
              className={cn(
                "lg:hidden flex h-10 w-10 items-center justify-center rounded-lg backdrop-blur-md border transition-all",
                scrolled ? "bg-gray-100 border-gray-200" : "bg-white/20 border-white/20"
              )}
            >
              <div className="flex flex-col justify-center gap-[5px]">
                <span
                  className={cn(
                    "block h-0.5 w-5 rounded transition-all",
                    scrolled ? "bg-gray-800" : "bg-white"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-5 rounded transition-all",
                    scrolled ? "bg-gray-800" : "bg-white"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-5 rounded transition-all",
                    scrolled ? "bg-gray-800" : "bg-white"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* SLIDE-IN PANEL */}
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col">
            {/* PANEL HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <Image
                src="/HITECHINSULATION.png"
                alt="Hitech Insulation Logo"
                width={140}
                height={40}
                className="object-contain"
              />
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="h-9 w-9 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {/* SVG X icon — reliable across all fonts */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* NAV LINKS */}
            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-1">
              {navigationLinks.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "flex items-center px-4 py-3.5 rounded-xl text-lg font-semibold transition-all",
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-800 hover:bg-gray-50 hover:text-blue-600"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* MOBILE CTA */}
            <div className="px-6 py-6 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="flex items-center justify-center bg-blue-700 text-white py-4 rounded-xl font-semibold text-base hover:bg-blue-800 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
