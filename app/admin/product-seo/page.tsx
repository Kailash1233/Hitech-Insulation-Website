"use client";

import { useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clipboard, ExternalLink } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { allProducts as products } from "@/lib/products";
import { productSeoOverrides, resolveProductSeo } from "@/lib/product-seo";

export default function ProductSeoDashboard() {
  const rows = useMemo(
    () =>
      Object.entries(products).map(([slug, product]) => {
        const seo = resolveProductSeo(slug, product);
        return {
          slug,
          product,
          seo,
          hasOverride: Boolean(productSeoOverrides[slug]),
        };
      }),
    []
  );

  const copyToClipboard = useCallback(async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch (error) {
      console.error("Unable to copy to clipboard", error);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest">
              SEO Control Center
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Product SEO Tracker
            </h1>
            <p className="text-gray-600 mt-2">
              View live title/description/keywords for each slug. Edit overrides in
              <code className="mx-1 rounded bg-gray-100 px-1.5 py-0.5 text-sm text-gray-800">
                lib/product-seo.ts
              </code>{" "}
              for production-ready changes.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link href="/products">
                View Catalog <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild>
              <a href="mailto:srk@hitechinsulation.in?subject=SEO%20Update%20Request">
                Email SEO Update
              </a>
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Per-Product SEO</CardTitle>
            <CardDescription>
              Copy keywords or verify that every product slug has clean metadata. Use overrides to
              fine-tune copy without touching page logic.
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableCaption>SEO coverage for all catalog products.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[220px]">Product</TableHead>
                  <TableHead className="min-w-[260px]">Title</TableHead>
                  <TableHead className="min-w-[260px]">Description</TableHead>
                  <TableHead className="min-w-[220px]">Keywords</TableHead>
                  <TableHead className="w-[120px] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map(({ slug, product, seo, hasOverride }) => (
                  <TableRow key={slug}>
                    <TableCell className="align-top">
                      <div className="flex gap-3">
                        <div className="relative h-14 w-14 overflow-hidden rounded-md border border-gray-200 bg-white">
                          <Image
                            src={seo.image || "/products/pressboardsheet-2-570x400.jpg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{product.name}</div>
                          <div className="text-sm text-gray-600">/{slug}</div>
                          <div className="mt-1">
                            <Badge variant={hasOverride ? "default" : "secondary"}>
                              {product.category}
                            </Badge>
                            {hasOverride && (
                              <Badge
                                variant="outline"
                                className="ml-2 border-blue-500 text-blue-700"
                              >
                                Override
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="align-top">
                      <div className="text-gray-900 font-medium line-clamp-2">{seo.title}</div>
                    </TableCell>
                    <TableCell className="align-top">
                      <div className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                        {seo.description}
                      </div>
                    </TableCell>
                    <TableCell className="align-top">
                      <div className="text-gray-700 text-sm leading-snug space-y-1">
                        {seo.keywords.map((keyword) => (
                          <div key={keyword} className="line-clamp-1">
                            {keyword}
                          </div>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="align-top text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(seo.keywords.join(", "))}
                        >
                          Copy Keywords <Clipboard className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="sm" asChild>
                          <Link href={`/products/${slug}`}>
                            View <ExternalLink className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
