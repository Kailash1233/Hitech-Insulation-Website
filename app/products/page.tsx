import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Layers,
  ListChecks,
  Ruler,
  Shield,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products, productCategories } from "@/lib/products";
import { getProductImage } from "@/lib/product-images";
import { getSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const productList = Object.values(products);

const categorizedProducts = productCategories
  .map((category) => ({
    category,
    items: productList.filter((product) => product.category === category),
  }))
  .filter((group) => group.items.length > 0);

export const metadata: Metadata = getSeoMetadata('products');

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <Badge className="bg-blue-50 text-blue-900 border border-blue-100 text-sm font-semibold px-4 py-2 rounded-full">
            20 Core Products • 1000+ Custom Configurations
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Complete Electrical Insulation Catalog
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore precision pressboards, epoxy laminates, PTFE products, and custom-engineered insulation components built for transformer, motor, and switchgear manufacturers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-base shadow-lg shadow-blue-600/20"
            >
              <Link href="/contact#quote">
                Request Product Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 px-8 py-6 text-base"
            >
              <Link href="/contact">Talk to Application Engineer</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-gray-200">
            {[
              { label: "47+ Years", description: "Manufacturing" },
              { label: "ISO", description: "Certified Plant" },
              { label: "20 Products", description: "Across 12 families" },
              { label: "24 hrs", description: "Quote turnaround" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-gray-900">{stat.label}</div>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: "Certified Quality",
              description: "Electrical insulation materials produced under ISO-certified processes for consistent performance.",
            },
            {
              icon: Ruler,
              title: "Custom Dimensions",
              description: "Sheets, rods, tubes, and components cut or machined to the exact tolerances your design requires.",
            },
            {
              icon: ListChecks,
              title: "Application Ready",
              description: "Products engineered for real-world transformer, motor, switchgear, and bus duct environments.",
            },
          ].map((feature) => (
            <Card
              key={feature.title}
              className="border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
                Product Families
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
                Browse by Application Needs
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Layers className="h-4 w-4" />
              12 categories • 20 detailed SKUs
            </div>
          </div>

          <div className="space-y-12">
            {categorizedProducts.map((group) => (
              <div key={group.category} className="space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {group.category}
                    </h3>
                    <p className="text-gray-600">
                      {group.items.length} specialized product
                      {group.items.length > 1 ? "s" : ""}
                    </p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="border-gray-200 hover:border-blue-600 hover:text-blue-600"
                  >
                    <Link href="/contact#quote">
                      Request Samples <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((product) => (
                    <Card
                      key={product.id}
                      className="h-full border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all flex flex-col"
                    >
                      <CardHeader>
                        <div className="relative h-44 w-full rounded-xl mb-4 overflow-hidden border border-gray-200 bg-gray-100">
                          <Image
                            src={getProductImage(product.id)}
                            alt={`${product.name} - ${product.category} electrical insulation`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full bg-blue-600 text-white shadow-md">
                            {product.category}
                          </div>
                        </div>
                        <CardTitle className="text-xl text-gray-900">
                          {product.name}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {product.shortDescription}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="mt-auto space-y-4">
                        <div className="text-sm text-gray-600">
                          Key spec:{" "}
                          <span className="font-semibold text-gray-900">
                            {product.specifications[0]?.value}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button
                            asChild
                            size="sm"
                            className="flex-1 bg-blue-600 hover:bg-blue-700"
                          >
                            <Link href={`/products/${product.id}`}>
                              View Details
                            </Link>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600"
                          >
                            <Link href="/contact#quote">
                              Quote <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Need a Material You Don&apos;t See Here?
          </h2>
          <p className="text-lg text-gray-600">
            Our engineering team fabricates custom gaskets, machined parts, and assemblies from any insulation material we supply. Share your drawings-we&apos;ll send CAD-reviewed solutions within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-6">
              <Link href="/contact#quote">
                Send Requirements <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 px-8 py-6"
            >
              <a href="mailto:srk@hitechinsulation.in">Email Engineering Team</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

