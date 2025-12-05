"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section - Clean, Modern with Added Spacing */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        {/* Subtle gradient accent */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-50 via-indigo-50 to-transparent opacity-60 blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gray-50 to-transparent opacity-40 blur-3xl -z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-5 py-2.5">
              <Award className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">
                Manufacturing Excellence Since 1977
              </span>
            </div>
          </div>
          {/* Main Content - Centered */}
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              Precision Insulation
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
                You Can Trust
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              High-performance electrical insulation components for transformer, motor, and
              switchgear manufacturers across India.
            </p>
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Button
                size="lg"
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white text-base px-8 py-6 rounded-lg shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all font-semibold"
              >
                <Link href="#quote" className="inline-flex items-center">
                  Get Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base px-8 py-6 rounded-lg border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all font-semibold"
              >
                <Link href="#products">Browse Products</Link>
              </Button>
            </div>
            {/* Product Images Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {[
                { src: "/hero/pressboardsheet.jpg", label: "Pressboard" },
                { src: "/hero/epoxy.jpg", label: "Epoxy Sheets" },
                { src: "/hero/bakelite.png", label: "Bakelite" },
                { src: "/hero/kraft.png", label: "Kraft Paper" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="relative bg-white rounded-xl overflow-hidden border-2 border-gray-200 aspect-square group"
                >
                  <Image
                    src={item.src}
                    alt={`${item.label} - Electrical insulation material`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-semibold text-sm">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-gray-200">
              {[
                { label: "47+", description: "Years in Business" },
                { label: "100+", description: "Custom Products" },
                { label: "ISO", description: "Certified" },
              ].map((stat) => (
                <div key={stat.description}>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Client Logos Section */}
          <div className="pt-16 border-t border-gray-200">
            <p className="text-center text-gray-500 text-xs font-semibold mb-10 uppercase tracking-widest">
              Trusted by Industry Leaders
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center max-w-5xl mx-auto mb-8">
              {["hitachi", "toyota", "nike", "abb", "siemens", "schneider"].map((logo) => (
                <div
                  key={logo}
                  className="relative flex items-center justify-center h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                >
                  <div className="w-full h-full flex items-center justify-center bg-white rounded-lg border border-gray-200 p-4 hover:border-gray-300 hover:shadow-md transition-all">
                    <Image
                      src={`/logos/${logo}.png`}
                      alt={`${logo} logo`}
                      width={120}
                      height={60}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm">
              Made in Chennai, India • Shipped Globally
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
