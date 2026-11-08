import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ClipboardList,
  Factory,
  Globe,
  Layers,
  Mail,
  Phone,
  Ruler,
  Truck,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/lib/products";
import { getProductImage } from "@/lib/product-images";
import { breadcrumbJsonLd, faqJsonLd, getSeoMetadata } from "@/lib/seo";
import { SITE, yearsInBusiness } from "@/lib/site";

export const metadata: Metadata = getSeoMetadata("pressboard");

const pressboardRange = [
  "pressboard",
  "pre-compressed-pressboard",
  "moulded-pressboard-components",
  "transformer-insulation-kits",
]
  .map((id) => products[id])
  .filter(Boolean);

const comparison = [
  {
    label: "What it is",
    pressboard: "Calendered cellulose board made from high-purity, long-fibre pulp",
    precompressed: "Pressboard compressed under heat and pressure to a higher density",
  },
  {
    label: "Density",
    pressboard: "0.9 – 1.2 g/cm³",
    precompressed: "1.3 – 1.4 g/cm³",
  },
  {
    label: "Thickness",
    pressboard: "Thinner sheets – easy to bend, wrap and form",
    precompressed: "3 mm – 75 mm sheets and blocks",
  },
  {
    label: "Shrinkage",
    pressboard: "Low",
    precompressed: "Very low – holds winding height under clamping",
  },
  {
    label: "Typical parts",
    pressboard: "Barriers, cylinders, wraps, strips, radial spacers",
    precompressed: "Support blocks, clamping & pressure rings, thick spacers, lead supports",
  },
  {
    label: "Best for",
    pressboard: "Distribution transformers and general solid insulation",
    precompressed: "Power transformers and load-bearing, short-circuit-stressed zones",
  },
];

const components = [
  "Radial spacers and duct spacers",
  "Axial strips / sticks and dovetail strips",
  "Winding cylinders and barrier wraps",
  "End rings, clamping rings and pressure rings",
  "Support blocks and yoke insulation",
  "Angle rings, caps, snouts and lead exits (moulded)",
  "Lead supports, cleats and bushing insulation",
  "Complete transformer insulation kits to drawing",
];

const regions = [
  {
    icon: Factory,
    title: "Chennai & Tamil Nadu",
    body: "Same-city supply from our Guindy and Kundrathur units to transformer makers and repairers across Chennai, Coimbatore, Hosur, Madurai, Trichy and the rest of Tamil Nadu.",
  },
  {
    icon: Truck,
    title: "South & North India",
    body: "Regular dispatch to Karnataka, Andhra Pradesh, Telangana and Kerala, and to Maharashtra, Gujarat, Delhi NCR, Uttar Pradesh, Haryana, Punjab, Rajasthan, Madhya Pradesh and West Bengal.",
  },
  {
    icon: Globe,
    title: "Export Orders",
    body: "Export-packed pressboard sheets and finished components for transformer manufacturers and repair shops overseas. Share your drawings and destination port for a quotation.",
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Send your requirement",
    body: "Drawing, BOM or sheet size, thickness, grade and quantity – by email, phone or the quote form.",
  },
  {
    icon: Ruler,
    title: "Engineering review & quote",
    body: "Our team checks the material and machining needed and sends pricing and lead time within 24 hours.",
  },
  {
    icon: Layers,
    title: "Manufacture & inspection",
    body: "Cutting, machining or moulding in Chennai, followed by dimensional inspection of every batch.",
  },
  {
    icon: Truck,
    title: "Kitted dispatch",
    body: "Parts tagged and grouped by transformer and assembly sequence, packed for safe transit across India or for export.",
  },
];

const faqs = [
  {
    q: "What is pressboard in a transformer?",
    a: "Pressboard (transformer board) is a dense cellulose board that forms the solid insulation in oil-immersed transformers. After it is dried and impregnated with transformer oil it gives high dielectric strength, and it is used for barriers, cylinders, spacers, strips, rings and support blocks.",
  },
  {
    q: "What is pre-compressed pressboard and when should I use it?",
    a: "Pre-compressed pressboard is pressboard that has been compressed to a higher density (about 1.3–1.4 g/cm³). It shrinks less and carries more mechanical load, so it is used for thick spacers, support blocks and clamping rings that must hold winding height and resist short-circuit forces – especially in power transformers.",
  },
  {
    q: "Who manufactures pressboard components in Chennai?",
    a: `Hitech Insulation, Industrial Estate, Guindy, Chennai has been in electrical insulation since ${SITE.foundingYear}. Our Kundrathur unit is dedicated to pressboard component manufacturing – spacers, strips, rings, blocks, moulded parts and complete transformer insulation kits made to drawing.`,
  },
  {
    q: "Do you supply pressboard to North India?",
    a: "Yes. We dispatch pressboard sheets and finished components to transformer manufacturers in Maharashtra, Gujarat, Delhi NCR, Uttar Pradesh, Haryana, Punjab, Rajasthan, Madhya Pradesh, West Bengal and other states, as well as across South India.",
  },
  {
    q: "Can Hitech Insulation export pressboard?",
    a: "Yes, we accept export orders for pressboard sheets, pre-compressed pressboard and machined or moulded components. Send drawings, quantities and the destination port and we will quote with export packing.",
  },
  {
    q: "What is the price of pressboard / pre-compressed pressboard?",
    a: "Pressboard is usually priced per kilogram and depends on grade, density, thickness, quantity and any machining. Send your sheet size or drawing and quantity and we will send a firm price within 24 hours.",
  },
  {
    q: "Can you machine pressboard to my drawing?",
    a: "Yes. We cut, punch, CNC machine, drill, bond and mould pressboard to customer drawings, and can supply individual parts or complete kits tagged by assembly sequence.",
  },
  {
    q: "What information do you need for a pressboard quote?",
    a: "Grade (standard or pre-compressed), thickness, sheet size or drawing, quantity, delivery location and required date. For kits, share the transformer rating and the insulation drawing or BOM.",
  },
];

const jsonLd = [
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Pressboard", path: "/pressboard" },
  ]),
  faqJsonLd(faqs),
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pressboard products by Hitech Insulation",
    itemListElement: pressboardRange.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${SITE.url}/products/${p.id}`,
    })),
  },
];

export default function PressboardPage() {
  const years = yearsInBusiness();

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[80svh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/products/mouldable-press-boards.jpg"
            alt="Pressboard insulation manufactured by Hitech Insulation, Chennai"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center text-white pt-24 pb-12">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-2 sm:px-5 sm:py-2.5">
              <Award className="h-4 w-4 text-blue-300 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold">
                {years}+ years in electrical insulation • Guindy, Chennai
              </span>
            </div>
          </div>

          <h1 className="font-display font-bold tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Pressboard &amp; Pre-Compressed Pressboard Manufacturer in Chennai
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Electrical grade pressboard sheets, high-density pre-compressed pressboard, machined
            and moulded pressboard components and complete transformer insulation kits – made to
            your drawings and supplied across India and for export.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-5 text-base font-semibold shadow-lg shadow-blue-600/30"
            >
              <Link href="/contact">
                Get a Pressboard Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-black hover:bg-white/90 px-8 py-5 text-base font-semibold"
            >
              <a href={SITE.phoneHref}>
                <Phone className="mr-2 h-5 w-5" />
                {SITE.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── INTRO (answer-first for AI / featured snippets) ─────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-5 text-gray-600 text-lg leading-relaxed">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Transformer pressboard, made in Chennai since {SITE.foundingYear}
          </h2>
          <p>
            <strong className="text-gray-900">Hitech Insulation</strong> is a pressboard and
            electrical insulation manufacturer in Guindy, Chennai, Tamil Nadu. We supply{" "}
            <Link href="/products/pressboard" className="text-blue-700 underline">
              electrical grade pressboard sheets
            </Link>
            ,{" "}
            <Link href="/products/pre-compressed-pressboard" className="text-blue-700 underline">
              pre-compressed pressboard
            </Link>
            ,{" "}
            <Link href="/products/moulded-pressboard-components" className="text-blue-700 underline">
              moulded pressboard components
            </Link>{" "}
            and{" "}
            <Link href="/products/transformer-insulation-kits" className="text-blue-700 underline">
              transformer insulation kits
            </Link>{" "}
            to power and distribution transformer manufacturers, repairers and OEMs.
          </p>
          <p>
            Our second unit at Kundrathur, Chennai is dedicated to pressboard component
            manufacturing. Every part is cut, machined or moulded to the customer&apos;s drawing,
            inspected for dimensions, and dispatched tagged and kitted by assembly sequence – so
            your shop floor spends less time cutting and more time winding.
          </p>
        </div>
      </section>

      {/* ── RANGE ──────────────────────────────────────────────── */}
      <section
        aria-labelledby="range-heading"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="range-heading"
              className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            >
              Our Pressboard Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From full sheets to finished, kitted transformer insulation components.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pressboardRange.map((product) => (
              <Card key={product.id} className="border-2 border-gray-100 bg-white">
                <CardHeader>
                  <div className="relative h-48 w-full rounded-xl mb-4 overflow-hidden border border-gray-200 bg-gray-100">
                    <Image
                      src={getProductImage(product.id)}
                      alt={`${product.name} – Hitech Insulation, Chennai`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <CardDescription className="line-clamp-3 text-gray-600">
                    {product.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-all"
                  >
                    <Link href={`/products/${product.id}`}>
                      View Specs <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ─────────────────────────────────────────── */}
      <section aria-labelledby="compare-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="compare-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              Pressboard vs Pre-Compressed Pressboard
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Which grade should you specify? A quick engineering comparison.
            </p>
          </div>
          <div className="overflow-x-auto border-2 border-gray-100 rounded-xl">
            <table className="w-full text-left text-sm sm:text-base">
              <thead className="bg-gray-50 text-gray-900">
                <tr>
                  <th scope="col" className="p-4 font-semibold w-1/4">
                    Property
                  </th>
                  <th scope="col" className="p-4 font-semibold">
                    Electrical Grade Pressboard
                  </th>
                  <th scope="col" className="p-4 font-semibold">
                    Pre-Compressed Pressboard
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {comparison.map((row) => (
                  <tr key={row.label} className="border-t border-gray-100">
                    <th scope="row" className="p-4 font-medium text-gray-900">
                      {row.label}
                    </th>
                    <td className="p-4">{row.pressboard}</td>
                    <td className="p-4">{row.precompressed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Values are typical. Exact grade, density and test data are confirmed with each
            quotation.
          </p>
        </div>
      </section>

      {/* ── COMPONENTS ─────────────────────────────────────────── */}
      <section
        aria-labelledby="components-heading"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[420px] rounded-2xl shadow-2xl overflow-hidden">
            <Image
              src="/products/transformer-insulation-kits.webp"
              alt="Machined pressboard transformer insulation components – spacers, strips and rings"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2
              id="components-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            >
              Pressboard Components We Manufacture
            </h2>
            <ul className="space-y-3">
              {components.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── WHERE WE SUPPLY ────────────────────────────────────── */}
      <section aria-labelledby="supply-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="supply-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              Pressboard Supply Across India &amp; Overseas
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((r) => (
              <Card key={r.title} className="border-2 border-gray-100 bg-white">
                <CardHeader>
                  <div className="mb-4 w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                    <r.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">{r.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{r.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO ORDER ───────────────────────────────────────── */}
      <section
        aria-labelledby="order-heading"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="order-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              How to Order Pressboard from Hitech
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="p-6 bg-white border-2 border-gray-100 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-sm font-semibold text-blue-600">Step {i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="faq-heading"
              className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            >
              Pressboard FAQs
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group bg-white border-2 border-gray-100 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  <span>{item.q}</span>
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 group-open:rotate-45 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Need pressboard or pressboard components?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Send your drawing, thickness and quantity. Our Chennai team replies within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`mailto:${SITE.email}?subject=${encodeURIComponent("Pressboard enquiry")}`}>
                <Mail className="mr-2 h-4 w-4" />
                {SITE.email}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
