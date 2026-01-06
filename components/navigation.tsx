// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X, Phone, Mail } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// export function Navigation() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <Link href="/" className="flex items-center space-x-2">
//             <Image src="/HITECHINSULATION.png" alt="HiTech Logo" width={120} height={120} />
//             {/* <div className="font-bold text-xl text-gray-900">
//               HITECH INSULATION
//             </div> */}
//           </Link>

//           <div className="hidden md:flex items-center space-x-8">
//             {/* <Link
//               href="/"
//               className="text-gray-700 hover:text-blue-900 transition-colors"
//             >
//               Home
//             </Link> */}
//             <Link
//               href="/#products"
//               className="text-gray-700 hover:text-blue-900 transition-colors"
//             >
//               Products
//             </Link>
//             <Link
//               href="/#industries"
//               className="text-gray-700 hover:text-blue-900 transition-colors"
//             >
//               Industries
//             </Link>
//             <Link
//               href="/#about"
//               className="text-gray-700 hover:text-blue-900 transition-colors"
//             >
//               About
//             </Link>
//             <Link
//               href="/#contact"
//               className="text-gray-700 hover:text-blue-900 transition-colors"
//             >
//               Contact
//             </Link>
//             <Button asChild className="bg-blue-900 hover:bg-blue-800">
//               <Link href="/#quote">Get Quote</Link>
//             </Button>
//           </div>

//           <button
//             className="md:hidden"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? (
//               <X className="h-6 w-6 text-gray-900" />
//             ) : (
//               <Menu className="h-6 w-6 text-gray-900" />
//             )}
//           </button>
//         </div>
//       </div>

//       {mobileMenuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200">
//           <div className="px-4 py-4 space-y-3">
//             <Link
//               href="/"
//               className="block py-2 text-gray-700 hover:text-blue-900"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               href="/#products"
//               className="block py-2 text-gray-700 hover:text-blue-900"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Products
//             </Link>
//             <Link
//               href="/#industries"
//               className="block py-2 text-gray-700 hover:text-blue-900"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Industries
//             </Link>
//             <Link
//               href="/#about"
//               className="block py-2 text-gray-700 hover:text-blue-900"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               About
//             </Link>
//             <Link
//               href="/#contact"
//               className="block py-2 text-gray-700 hover:text-blue-900"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Contact
//             </Link>
//             <Button asChild className="w-full bg-blue-900 hover:bg-blue-800">
//               <Link href="/#quote" onClick={() => setMobileMenuOpen(false)}>
//                 Get Quote
//               </Link>
//             </Button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { cn } from "@/lib/utils";

// export function Navigation() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Handle scroll effect for elevated navigation
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu on resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768 && mobileMenuOpen) {
//         setMobileMenuOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [mobileMenuOpen]);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (mobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [mobileMenuOpen]);

//   const navigationLinks = [
//     { href: "/products", label: "Products" },
//     { href: "/industries", label: "Industries" },
//     { href: "/about", label: "About Us" },
//     // { href: "/contact", label: "Contact" },
//   ];

//   return (
//     <nav
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//         scrolled
//           ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
//           : "bg-transparent backdrop-blur-none border-b border-transparent"
//       )}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <Link
//             href="/"
//             className="flex items-center space-x-3 group"
//             aria-label="Hitech Insulation Home"
//           >
//             <div className="relative w-32 h-12">
//               <Image
//                 src="/HITECHINSULATION.png"
//                 alt="Hitech Insulation Logo"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
//             {navigationLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="relative px-4 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors group"
//               >
//                 {link.label}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
//               </Link>
//             ))}

//             {/* CTA Button */}
//             <Button
//               asChild
//               size="lg"
//               className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all font-semibold"
//             >
//               <Link href="/contact">Get a Quote</Link>
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
//             aria-expanded={mobileMenuOpen}
//             aria-controls="mobile-menu"
//           >
//             <div className="relative w-6 h-6">
//               <span
//                 className={cn(
//                   "absolute left-0 w-6 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out",
//                   mobileMenuOpen ? "top-3 rotate-45" : "top-1 rotate-0"
//                 )}
//               />
//               <span
//                 className={cn(
//                   "absolute left-0 top-3 w-6 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out",
//                   mobileMenuOpen ? "opacity-0" : "opacity-100"
//                 )}
//               />
//               <span
//                 className={cn(
//                   "absolute left-0 w-6 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out",
//                   mobileMenuOpen ? "top-3 -rotate-45" : "top-5 rotate-0"
//                 )}
//               />
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         id="mobile-menu"
//         className={cn(
//           "md:hidden fixed inset-x-0 top-20 bottom-0 bg-white transition-all duration-300 ease-in-out overflow-y-auto",
//           mobileMenuOpen
//             ? "opacity-100 translate-x-0"
//             : "opacity-0 translate-x-full pointer-events-none"
//         )}
//       >
//         {/* Overlay backdrop */}
//         <div
//           className={cn(
//             "fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity duration-300 -z-10",
//             mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//           )}
//           onClick={() => setMobileMenuOpen(false)}
//           aria-hidden="true"
//         />

//         {/* Menu Content */}
//         <div className="relative bg-white h-full shadow-2xl">
//           <div className="px-6 py-8 space-y-2">
//             {navigationLinks.map((link, index) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={cn(
//                   "block px-4 py-4 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all",
//                   "transform hover:translate-x-1"
//                 )}
//                 onClick={() => setMobileMenuOpen(false)}
//                 style={{
//                   animationDelay: `${index * 50}ms`,
//                 }}
//               >
//                 {link.label}
//               </Link>
//             ))}

//             {/* Mobile CTA */}
//             <div className="pt-6 border-t border-gray-200 mt-6">
//               <Button
//                 asChild
//                 size="lg"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg shadow-lg shadow-blue-600/20 font-semibold text-base"
//               >
//                 <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
//                   Get Custom Quote
//                 </Link>
//               </Button>
//             </div>

//             {/* Additional Info in Mobile Menu */}
//             <div className="pt-8 space-y-4">
//               <div className="px-4 py-3 bg-gray-50 rounded-lg">
//                 <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
//                   Contact Us
//                 </p>
//                 <a
//                   href="mailto:srk@hitechinsulation.in"
//                   className="text-sm text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2"
//                 >
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                   srk@hitechinsulation.in
//                 </a>
//               </div>

//               <div className="px-4 py-3 bg-blue-50 rounded-lg">
//                 <p className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-1">
//                   Manufacturing Since 1977
//                 </p>
//                 <p className="text-xs text-blue-700">Made in Chennai, India • Shipped Globally</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NavigationProps {
  onMobileMenuChange?: (open: boolean) => void;
}

export function Navigation({ onMobileMenuChange }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";
  const useSolidNav = isHome || scrolled;

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on resize */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
        onMobileMenuChange?.(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [onMobileMenuChange]);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
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
    { href: "/products", label: "Products" },
    { href: "/industries", label: "Industries" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        useSolidNav
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Hitech Insulation Home">
            <div className="relative w-36 h-12">
              <Image
                src={useSolidNav ? "/HITECHINSULATION.png" : "/HITECHINSULATION-white.png"}
                alt="Hitech Insulation"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav (UNCHANGED) */}
          <div className="hidden md:flex items-center gap-2">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm lg:text-base font-medium transition-colors",
                  useSolidNav
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-blue-400"
                )}
              >
                {link.label}
              </Link>
            ))}

            <Button
              asChild
              size="lg"
              className={cn(
                "ml-4 px-6 py-2.5 font-semibold",
                useSolidNav
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-white text-blue-900 hover:bg-blue-100"
              )}
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={openMenu}
            aria-label="Open Menu"
            className={cn(
              "md:hidden flex h-10 w-10 items-center justify-center rounded-xl",
              useSolidNav ? "hover:bg-gray-100" : "hover:bg-white/10"
            )}
          >
            <span className={cn("h-0.5 w-6 block", useSolidNav ? "bg-gray-900" : "bg-white")} />
          </button>
        </div>
      </div>

      {/* ================= MOBILE NAV ================= */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu} />

          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <Image
                src="/HITECHINSULATION.png"
                alt="Hitech Insulation"
                width={140}
                height={40}
                className="object-contain"
              />
              <button
                onClick={closeMenu}
                aria-label="Close Menu"
                className="rounded-lg p-2 hover:bg-gray-100 text-xl"
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 px-6 py-8 space-y-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-2xl font-semibold text-gray-900 tracking-tight hover:text-blue-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="px-6 py-6 border-t">
              <Button
                asChild
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg"
              >
                <Link href="/contact" onClick={closeMenu}>
                  Get Custom Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
