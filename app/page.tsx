"use client";

import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Clock,
  Target,
  Check,
  Factory,
  Cpu,
  Zap,
  Box,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { products, featuredProducts } from "@/lib/products";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    requirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you within 24 hours.");
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

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            40 Years of Engineering Excellence.
            <br />
            Zero Compromises on Quality.
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            From transformers to switchgear, we manufacture precision-engineered
            insulation components that power India&apos;s leading industries -
            and the world&apos;s biggest brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              asChild
              className="bg-blue-900 hover:bg-blue-800 text-lg px-8 py-6"
            >
              <Link href="#quote">Get Custom Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 border-blue-900 text-blue-900 hover:bg-blue-50"
            >
              <Link href="#products">View All Products</Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 border-t border-gray-200 pt-8">
            <span className="font-semibold">Trusted by Hitachi</span>
            <span className="text-gray-300">•</span>
            <span className="font-semibold">Toyota</span>
            <span className="text-gray-300">•</span>
            <span className="font-semibold">Nike</span>
            <span className="text-gray-300">•</span>
            <span className="font-semibold">Made in Chennai, India</span>
            <span className="text-gray-300">•</span>
            <span className="font-semibold">Shipped Globally</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
            Your Equipment Deserves Insulation That Won&apos;t Fail
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-900 mb-4" />
                <CardTitle className="text-xl">
                  Equipment Downtime Costs You Lakhs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  One insulation failure can shut down your entire production
                  line
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-900 mb-4" />
                <CardTitle className="text-xl">
                  Generic Products Delay Your Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Off-the-shelf solutions rarely meet exact specifications
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-900">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-900 mb-4" />
                <CardTitle className="text-xl">
                  We Solve Both Problems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Custom-engineered insulation delivered on time, every time
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="industries"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
            Powering the Industries That Power the World
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-blue-900 mb-3" />
                <CardTitle className="text-2xl">
                  Transformer Manufacturers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  High-voltage insulation for power distribution and
                  transmission transformers
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Cpu className="h-10 w-10 text-blue-900 mb-3" />
                <CardTitle className="text-2xl">Motor Industry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Durable laminates and sheets for electric motor insulation and
                  mechanical components
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Factory className="h-10 w-10 text-blue-900 mb-3" />
                <CardTitle className="text-2xl">
                  Panel Board & Switchgear
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Precision pressboards and epoxy sheets for electrical panel
                  assemblies
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Box className="h-10 w-10 text-blue-900 mb-3" />
                <CardTitle className="text-2xl">Bus Duct Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Temperature-resistant materials engineered for high-current
                  applications
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              8 Core Products. 1000+ Custom Configurations.
            </h2>
            <p className="text-xl text-gray-600">
              Every component manufactured to micron-level precision in our
              Chennai facility
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((productId) => {
              const product = products[productId];
              return (
                <Card
                  key={productId}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <Box className="h-16 w-16 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">
                      {product.name.split("-")[0].trim()}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {product.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-900 text-xs px-3 py-1 rounded-full">
                        {product.specifications[1]?.value || "Multiple specs"}
                      </span>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-blue-900 text-blue-900 hover:bg-blue-50"
                    >
                      <Link href={`/products/${productId}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-800">
              <Link href="/products/pressboard-3mm">View All 20 Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            What You Get When You Choose Hitech Insulation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Custom engineering to your exact specifications",
              "40+ years of manufacturing expertise since 1977",
              "Globally sourced materials from trusted suppliers",
              "ISO-certified quality control on every batch",
              "Fast turnaround on custom orders",
              "Direct manufacturer pricing (no middlemen)",
              "Technical support from our engineering team",
              "Delivery across all Indian states and international shipping",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              <Link href="#quote">Request Your Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
            What Our Partners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-6 italic">
                  &quot;Hitech Insulation has been our trusted partner for over
                  15 years. Their pressboard quality is consistently excellent,
                  and they always deliver on time.&quot;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Rajesh Kumar</p>
                  <p className="text-sm text-gray-500">Production Manager</p>
                  <p className="text-sm text-gray-500">
                    Transformer Manufacturer, Maharashtra
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-6 italic">
                  &quot;The custom fabrication service saved us weeks of
                  production time. Their engineering team understood our
                  requirements perfectly and delivered exactly what we
                  needed.&quot;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Priya Sharma</p>
                  <p className="text-sm text-gray-500">Technical Director</p>
                  <p className="text-sm text-gray-500">
                    Motor Industry, Tamil Nadu
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-6 italic">
                  &quot;Quality materials, competitive pricing, and excellent
                  technical support. Hitech Insulation is our first choice for
                  all electrical insulation components.&quot;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Amit Patel</p>
                  <p className="text-sm text-gray-500">Procurement Head</p>
                  <p className="text-sm text-gray-500">
                    Panel Board Manufacturer, Gujarat
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
            Built on 40 Years of Trust
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
              <Factory className="h-32 w-32 text-white opacity-50" />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 1977 by Mr. Radhakrushnun, Hitech Insulation began
                with a simple mission: manufacture insulation components that
                don&apos;t fail.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we operate state-of-the-art facilities in Chennai, Tamil
                Nadu, supplying precision-engineered electrical insulation to
                transformer manufacturers, motor industries, and electrical
                equipment makers across India and internationally.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From our early days trading insulation products to becoming a
                trusted manufacturing partner for global brands like Hitachi,
                Toyota, and Nike, our commitment remains unchanged: engineering
                excellence, delivered consistently.
              </p>
              <Button asChild className="bg-blue-900 hover:bg-blue-800">
                <Link href="#contact">Learn More About Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="quote"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get Your Custom Quote in 24 Hours
            </h2>
            <p className="text-xl text-blue-100">
              Tell us your specifications. Our engineers will design the perfect
              solution for your application.
            </p>
          </div>
          <Card className="bg-white text-gray-900">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <Input
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Your company"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Product Interest
                  </label>
                  <Select
                    value={formData.product}
                    onValueChange={(value) =>
                      setFormData({ ...formData, product: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a product category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pressboard">Pressboard</SelectItem>
                      <SelectItem value="epoxy">Epoxy Sheets</SelectItem>
                      <SelectItem value="phenolic">
                        Phenolic Laminates
                      </SelectItem>
                      <SelectItem value="ptfe">PTFE Products</SelectItem>
                      <SelectItem value="kraft">Kraft Paper</SelectItem>
                      <SelectItem value="custom">Custom Components</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Specifications / Requirements
                  </label>
                  <Textarea
                    required
                    value={formData.requirements}
                    onChange={(e) =>
                      setFormData({ ...formData, requirements: e.target.value })
                    }
                    placeholder="Please describe your requirements (thickness, size, quantity, application, etc.)"
                    rows={5}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white"
                >
                  Get Quote Now
                </Button>
              </form>
              <div
                id="contact"
                className="mt-6 text-center text-gray-600 flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>
                  Or email us directly:{" "}
                  <a
                    href="mailto:srk@hitechinsulation.in"
                    className="text-blue-900 font-semibold hover:underline"
                  >
                    srk@hitechinsulation.in
                  </a>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
