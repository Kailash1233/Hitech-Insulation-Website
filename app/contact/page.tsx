"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import Image from "next/image";
import { SITE } from "@/lib/site";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xwpgqnay", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    setIsLoading(false);

    if (response.ok) {
      setIsSubmitted(true);
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Contact Hero */}
      <section className="relative min-h-[70svh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/hero/contact_hero.jpg" // place this inside /public/hero
            alt="Engineering and sales consultation for electrical insulation solutions"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center text-white">
          <div className="space-y-6 sm:space-y-8">
            {/* Label */}
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
              Contact Us
            </p>

            {/* Heading */}
            <h1
              className="font-display font-bold tracking-tight leading-tight
                   text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Talk to Our Engineering
              <br className="hidden sm:block" />& Sales Team
            </h1>

            {/* Subtext */}
            <p
              className="text-base sm:text-lg md:text-xl
                   text-gray-200 leading-relaxed max-w-3xl mx-auto"
            >
              Share your drawings, specifications, BOMs, or requirement summary. Our engineering
              team reviews every request and responds with technical guidance and pricing within 24
              hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* FORM / SUCCESS */}
          <Card className="border-2 border-gray-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Request A Custom Quote</CardTitle>
            </CardHeader>

            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center text-center py-12 space-y-4">
                  <CheckCircle className="h-14 w-14 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Request Submitted Successfully
                  </h3>
                  <p className="text-gray-600 max-w-md">
                    Thank you for contacting Hitech Insulation. Our engineering team will review
                    your requirements and respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input name="name" required placeholder="Your full name" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <Input name="company" required placeholder="Your company name" />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        className="h-12 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="h-12 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  {/* Product */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Product Required *
                    </label>
                    <select
                      name="product_required"
                      required
                      className="w-full h-12 rounded-md border border-gray-200 px-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    >
                      <option value="">Select a product</option>
                      <option value="Pre-Compressed Pressboard">Pre-Compressed Pressboard</option>
                      <option value="Pressboard Sheets">Pressboard Sheets & Machined Parts</option>
                      <option value="Pressboard Components">
                        Pressboard Components / Transformer Insulation Kits
                      </option>
                      <option value="Mica Sheets / Mica Tapes">Mica Sheets / Mica Tapes</option>
                      <option value="Glass Fibre Tapes">
                        Glass Fibre / Polyester / Cotton Tapes
                      </option>
                      <option value="Crepe Paper">Crepe Paper (Electrical Grade)</option>
                      <option value="Hylam Sheets">Hylam Sheets</option>
                      <option value="Kapton Tape">Kapton Tape</option>
                      <option value="Fibre Glass Adhesive Tapes">Fibre Glass Adhesive Tapes</option>
                      <option value="Polyester Adhesive Tapes">Polyester Adhesive Tapes</option>
                      <option value="Epoxy Cast Insulators">Epoxy Cast Insulators</option>
                      <option value="Other">Other (Specify Below)</option>
                    </select>
                  </div>

                  {/* Other Product */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      If Other, specify product details
                    </label>
                    <Textarea
                      name="other_product_details"
                      rows={3}
                      placeholder="FRP Rods, Syndanio Sheets, Epoxy Bushings, Cork Sheets, Custom insulation components..."
                      className="border-gray-200 focus:border-blue-600 focus:ring-blue-600 resize-none"
                    />
                  </div>

                  {/* Requirements */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Specifications & Requirements *
                    </label>
                    <Textarea
                      name="requirements"
                      required
                      rows={6}
                      placeholder="Dimensions, thickness, voltage class, drawings link, quantity, delivery timeline..."
                      className="border-gray-200 focus:border-blue-600 focus:ring-blue-600 resize-none"
                    />
                  </div>

                  <input type="hidden" name="source" value="Contact Page Form" />

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 h-14"
                  >
                    {isLoading ? "Submitting..." : "Submit Request"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Reach Us Directly</CardTitle>
              </CardHeader>

              <CardContent className="space-y-5 text-gray-600">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase">Email</p>
                    <a href={`mailto:${SITE.email}`} className="text-lg text-blue-700 font-semibold">
                      {SITE.email}
                    </a>
                    <p className="text-sm text-gray-500">Send drawings, BOM, or RFQ files</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase">Phone</p>
                    <a href={SITE.phoneHref} className="text-lg text-blue-700 font-semibold">
                      {SITE.phoneDisplay}
                    </a>
                    <p className="text-sm text-gray-500">
                      {SITE.hours.days} • {SITE.hours.display} •{" "}
                      <a
                        href={SITE.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline"
                      >
                        WhatsApp
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase">Factory</p>
                    <p className="text-lg text-gray-900 font-semibold">Guindy, Chennai, Tamil Nadu</p>
                    <address className="text-sm text-gray-500 not-italic">
                      {SITE.name}, {SITE.address.street}
                      <br />
                      {SITE.address.locality} – {SITE.address.postalCode}, {SITE.address.region}, India
                    </address>
                    <a
                      href={SITE.profiles.googleBusiness}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-700 underline"
                    >
                      Get directions on Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase">Response Time</p>
                    <p className="text-lg text-gray-900 font-semibold">Within 24 hours</p>
                    <p className="text-sm text-gray-500">Faster for urgent shutdowns</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
