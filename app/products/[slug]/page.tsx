import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, ChevronRight, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { allProducts as products } from "@/lib/products";
import { getProductImage } from "@/lib/product-images";
import { resolveProductSeo } from "@/lib/product-seo";
import { getSeoMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products[slug];
  if (!product) {
    return getSeoMetadata("default");
  }

  return getSeoMetadata("productDetails", resolveProductSeo(slug, product));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products[slug];

  if (!product) {
    notFound();
  }

  const specSubject = encodeURIComponent(`Technical Specs - ${product.name}`);
  const relatedProductsData = product.relatedProducts
    .slice(0, 3)
    .map((id) => products[id])
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-blue-900 flex items-center">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-blue-900">
              Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="sticky top-24">
                <div className="relative h-96 w-full rounded-lg mb-6 overflow-hidden border-2 border-gray-200 bg-gray-100">
                  <Image
                    src={getProductImage(product.id)}
                    alt={`${product.name} - ${product.category} electrical insulation material`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="flex gap-4">
                  <Button size="lg" asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Link href="/contact">Request Custom Quote</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600"
                    asChild
                  >
                    <a href={`mailto:srk@hitechinsulation.in?subject=${specSubject}`}>
                      <FileText className="h-5 w-5 mr-2" />
                      Get Specs
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-900">{product.category}</Badge>
              <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-xl text-gray-600 mb-8">{product.shortDescription}</p>

              <div className="space-y-6 mb-12">
                <h2 className="font-display text-2xl font-bold text-gray-900">Overview</h2>
                {product.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                  Technical Specifications
                </h2>
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/3">Specification</TableHead>
                        <TableHead>Value</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {product.specifications.map((spec, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{spec.label}</TableCell>
                          <TableCell>{spec.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Applications</h2>
                <ul className="space-y-3">
                  {product.applications.map((application, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <ChevronRight className="h-5 w-5 text-blue-900 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                  Why Choose This Product
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <p className="text-gray-600">{benefit}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Need Custom Specifications?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our engineering team can customize this product to your exact requirements. Get
                    in touch for a detailed quote.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link href="/contact">Request Quote</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="mailto:srk@hitechinsulation.in">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Technical Team
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {relatedProductsData.length > 0 && (
            <div>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProductsData.map((relatedProduct) => (
                  <Card key={relatedProduct.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="relative h-40 w-full rounded-lg mb-4 overflow-hidden border border-gray-200 bg-gray-100">
                        <Image
                          src={getProductImage(relatedProduct.id)}
                          alt={`${relatedProduct.name} - ${relatedProduct.category}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <CardTitle className="text-lg">{relatedProduct.name}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {relatedProduct.shortDescription}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50"
                      >
                        <Link href={`/products/${relatedProduct.id}`}>
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
