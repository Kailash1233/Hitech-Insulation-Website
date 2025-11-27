"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    requirements: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Thank you! Our team will contact you within 24 hours.");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      product: "",
      requirements: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-[0.4em]">
            Contact Us
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900">
            Talk To Our Engineering & Sales Team
          </h1>
          <p className="text-lg text-gray-600">
            Send us your drawings, specifications, or requirement summary. We&apos;ll respond with technical guidance and pricing within 24 hours.
          </p>
        </div>
      </section>

      <section id="quote" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card className="border-2 border-gray-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Request A Custom Quote</CardTitle>
              <p className="text-sm text-gray-500">
                Provide as much detail as possible-materials, dimensions, voltage class, quantity, delivery timelines.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="h-12 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company *</label>
                    <Input
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Manufacturer / OEM"
                      className="h-12 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="h-12 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="h-12 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Product Category *</label>
                  <Select
                    value={formData.product}
                    onValueChange={(value) => setFormData({ ...formData, product: value })}
                  >
                    <SelectTrigger className="h-12 border-gray-200 focus:border-blue-600 focus:ring-blue-600">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pressboard">Pressboard & Kraft Paper</SelectItem>
                      <SelectItem value="epoxy">Epoxy / FR4 / G10</SelectItem>
                      <SelectItem value="phenolic">Bakelite / Phenolic</SelectItem>
                      <SelectItem value="ptfe">PTFE / Engineering Plastics</SelectItem>
                      <SelectItem value="thermal">Thermal Insulation</SelectItem>
                      <SelectItem value="custom">Custom Assemblies</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Specifications *</label>
                  <Textarea
                    required
                    rows={6}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="Dimensions, thickness, material, drawings link, voltage class, quantity..."
                    className="border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-base font-semibold"
                >
                  Submit Request <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
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
                    <a href="mailto:srk@hitechinsulation.in" className="text-lg text-blue-700 font-semibold">
                      srk@hitechinsulation.in
                    </a>
                    <p className="text-sm text-gray-500">Send drawings, BOM, or RFQ files</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase">Phone</p>
                    <p className="text-lg text-gray-900 font-semibold">+91 44 1234 5678</p>
                    <p className="text-sm text-gray-500">Mon - Sat • 9:30 AM to 6:30 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase">Factory</p>
                    <p className="text-lg text-gray-900 font-semibold">Chennai, Tamil Nadu</p>
                    <p className="text-sm text-gray-500">
                      7/4 Industrial Estate, Guindy<br />Chennai - 600032, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase">Response Time</p>
                    <p className="text-lg text-gray-900 font-semibold">24 hours</p>
                    <p className="text-sm text-gray-500">Faster for urgent shutdowns</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 bg-blue-50">
              <CardContent className="space-y-4 py-6">
                <h3 className="text-xl font-semibold text-blue-900">
                  Ready With Drawings Or BOM?
                </h3>
                <p className="text-blue-800 text-sm">
                  Email us CAD/PDF files and mention voltage class, insulation level, and delivery timelines.
                  We&apos;ll revert with a manufacturability review before quoting.
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className="bg-white text-blue-900 hover:bg-gray-100 w-full"
                >
                  <a href="mailto:srk@hitechinsulation.in?subject=RFQ%20-%20Hitech%20Insulation">
                    Send Files Via Email
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

