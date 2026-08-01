import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Clock,
  Target,
  Factory,
  Cpu,
  Zap,
  Award,
  Globe,
  Users,
  TrendingUp,
  Box,
  CheckCircle2,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import { Location } from "@/components/location";
import { products, featuredProducts } from "@/lib/products";
import { getProductImage } from "@/lib/product-images";
import { Navigation } from "@/components/navigation";
import { QuoteForm } from "@/components/forms/QuoteForm";

// ── FAQ structured data ───────────────────────────────────────────────────────
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is Hitech Insulation located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hitech Insulation is based in Chennai, Tamil Nadu, India. We manufacture and supply electrical insulation products to customers across Tamil Nadu, Maharashtra, Gujarat, Karnataka, Andhra Pradesh, and all of India.",
      },
    },
    {
      "@type": "Question",
      name: "What electrical insulation products does Hitech Insulation manufacture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hitech Insulation manufactures pressboard sheets, pre-compressed pressboard, transformer insulation kits, moulded pressboard components, FR4 and G10/G11 epoxy sheets, hylam and paper phenolic laminates, bakelite sheets, electrical grade kraft paper, FRP tubes and rods, mica sheets and tapes, PTFE sheets, engineering plastics (Delrin, PEEK, Nylon, Polycarbonate), Nomex paper, crepe paper, and custom fabricated insulation components.",
      },
    },
    {
      "@type": "Question",
      name: "Is Hitech Insulation ISO certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Hitech Insulation operates an ISO-certified manufacturing facility in Chennai, Tamil Nadu. All electrical insulation products are manufactured under quality-controlled processes to meet stringent performance and dimensional standards.",
      },
    },
    {
      "@type": "Question",
      name: "How long has Hitech Insulation been manufacturing electrical insulation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hitech Insulation was founded in 1977 by Mr. Radhakrushnun in Chennai, Tamil Nadu. With over 47 years of manufacturing experience, we are one of India's most established electrical insulation manufacturers.",
      },
    },
    {
      "@type": "Question",
      name: "Do you supply pressboard for transformer manufacturers in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hitech Insulation is a leading pressboard manufacturer in India. We supply electrical grade pressboard sheets, pre-compressed pressboard, moulded pressboard components, and complete transformer insulation component kits to transformer manufacturers across India.",
      },
    },
    {
      "@type": "Question",
      name: "Can Hitech Insulation manufacture custom insulation components?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer custom fabrication of insulation components from any material we supply, including CNC machining, laser cutting, water jet cutting, and die stamping. We work from customer drawings and supply components to tolerance ±0.05mm.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I get a quote from Hitech Insulation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our engineering team in Chennai provides quotes within 24 hours of receiving your requirements. Send specifications, drawings, or BOMs to srk@hitechinsulation.in or use the quote form on our website.",
      },
    },
  ],
};

// ── Review / aggregate rating JSON-LD ────────────────────────────────────────
const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Electrical Insulation Products",
  brand: { "@type": "Brand", name: "Hitech Insulation" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "138",
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Rajesh Kumar" },
      reviewBody:
        "Hitech Insulation has been our trusted pressboard supplier for over 15 years. Quality is consistently excellent and they always deliver on time.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Priya Sharma" },
      reviewBody:
        "The custom insulation fabrication service saved us weeks of production time. Their Chennai engineering team understood our transformer requirements perfectly.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Amit Patel" },
      reviewBody:
        "Quality insulation materials, competitive pricing, and excellent technical support. Hitech Insulation is our first choice for all electrical insulation components in India.",
    },
  ],
};

// const partners = [
//   { name: "Hitachi", src: "/partners/bhel.png" },
//   { name: "Siemens", src: "/partners/schneider.png" },
//   { name: "Schneider Electric", src: "/partners/schneider.png" },
//   { name: "Toyota", src: "/partners/southern-railways.jpg" },
//   { name: "ABB", src: "/partners/toshiba.png" },
//   { name: "Nike", src: "/partners/nike.png" },
// ];

// ─────────────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />

      <div className="min-h-screen">
        <Navigation />

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section
          id="hero-section"
          aria-label="Hitech Insulation – Best Electrical Insulation Manufacturer India"
          className="relative h-screen w-full overflow-hidden transition-all duration-300"
        >
          <div className="absolute inset-0">
            <Image
              src="/hero/hitech_hero_bg.webp"
              alt="Hitech Insulation Chennai – electrical insulation and pressboard manufacturer India"
              fill
              priority
              fetchPriority="high"
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-end px-6 lg:px-16 pb-12 lg:pb-16">
            <div className="w-full flex flex-col lg:flex-row justify-between items-end">
              <div className="max-w-xl text-white">
                <h1 className="text-4xl md:text-6xl font-light leading-tight">
                  Best Electrical Insulation
                  <br />
                  <span className="font-semibold">Manufacturer in India</span>
                </h1>
                <p className="mt-4 text-base md:text-lg text-gray-200 max-w-lg leading-relaxed">
                  Hitech Insulation - Chennai's trusted pressboard manufacturer and electrical
                  insulation supplier since 1977. Serving transformer, motor &amp; switchgear
                  manufacturers across India.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition"
                  >
                    Get a Quote
                  </Link>
                  <Link
                    href="/products"
                    className="border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition"
                  >
                    View Products
                  </Link>
                </div>
              </div>
              <div className="flex gap-10 mt-10 lg:mt-0 text-white">
                <div>
                  <div className="text-3xl font-semibold">47+</div>
                  <div className="text-sm opacity-80">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold">100%</div>
                  <div className="text-sm opacity-80">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold">138+</div>
                  <div className="text-sm opacity-80">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PARTNER LOGOS ────────────────────────────────────────── */}
        {/* <section
          aria-label="Trusted by leading electrical OEMs"
          className="py-10 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100"
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
              Trusted by India's leading electrical manufacturers
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="relative h-8 w-24 grayscale opacity-50 hover:opacity-80 hover:grayscale-0 transition-all"
                >
                  <Image
                    src={p.src}
                    alt={`${p.name} – Hitech Insulation customer`}
                    fill
                    className="object-contain"
                    sizes="96px"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* ── WHY ENGINEERS CHOOSE HITECH ──────────────────────────── */}
        <section
          aria-labelledby="why-hitech-heading"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                id="why-hitech-heading"
                className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
              >
                Why Engineers Choose Hitech Insulation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                India's leading electrical insulation manufacturer since 1977. Precision components
                engineered to exact specifications for transformers, motors, and switchgear.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Eliminate Equipment Downtime",
                  body: "One insulation failure shuts down production lines. Our ISO-certified pressboard and epoxy components meet the strictest quality standards to keep your equipment running reliably.",
                },
                {
                  icon: Target,
                  title: "Custom Insulation Engineering",
                  body: "Generic products delay projects. We manufacture pressboard components, epoxy laminates, and FRP parts to your exact dimensions, materials, and performance ratings.",
                },
                {
                  icon: Clock,
                  title: "24-Hour Quote Turnaround",
                  body: "Our Chennai manufacturing facility delivers custom electrical insulation components on schedule without compromising quality. Quote within 24 hours.",
                },
              ].map((c) => (
                <Card key={c.title} className="border-2 border-gray-100 bg-white">
                  <CardHeader>
                    <div className="mb-4 w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                      <c.icon className="h-7 w-7 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">{c.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{c.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ───────────────────────────────────────────── */}
        <section
          aria-labelledby="industries-heading"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                id="industries-heading"
                className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
              >
                Industries We Serve Across India
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized electrical insulation solutions for critical manufacturing sectors -
                supplied from our Chennai, Tamil Nadu facility to customers across India.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Transformer Manufacturers",
                  desc: "Pressboard sheets, pre-compressed pressboard, kraft paper, transformer insulation kits, and moulded pressboard components for power and distribution transformer manufacturers across India.",
                },
                {
                  icon: Cpu,
                  title: "Electric Motor Industry",
                  desc: "Phenolic laminates, hylam sheets, bakelite, electrical presspaper, and fiberglass components for electric motor winding insulation and mechanical protection.",
                },
                {
                  icon: Factory,
                  title: "Panel Board & Switchgear Manufacturers",
                  desc: "Precision-cut pressboard, FR4 and G10 epoxy glass sheets, bakelite, and epoxy cast insulators for electrical panel assemblies and arc protection.",
                },
                {
                  icon: Box,
                  title: "Bus Duct & Busbar Systems",
                  desc: "High-temperature insulation including FRP components, PTFE sheets, and mica products engineered for high-current busbar and cable management applications.",
                },
              ].map((ind) => (
                <Card key={ind.title} className="border-2 border-gray-100 bg-white">
                  <CardHeader>
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                      <ind.icon className="h-7 w-7 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl mb-3">{ind.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      {ind.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED PRODUCTS ────────────────────────────────────── */}
        <section
          aria-labelledby="products-heading"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                id="products-heading"
                className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
              >
                Electrical Insulation Products
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                9 product families - pressboard, epoxy laminates, FRP, mica, PTFE, kraft paper, and
                custom fabrication. Manufactured to micron-level precision in Chennai, India.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {featuredProducts.map((productId) => {
                const product = products[productId];
                if (!product) return null;
                return (
                  <Card key={productId} className="border-2 border-gray-100 bg-white">
                    <CardHeader>
                      <div className="relative h-48 w-full rounded-xl mb-4 overflow-hidden border border-gray-200 bg-gray-100">
                        <Image
                          src={getProductImage(productId)}
                          alt={`${product.name} – ${product.category} manufacturer India – Hitech Insulation Chennai`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          loading="lazy"
                        />
                        <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          {product.category}
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                      <CardDescription className="line-clamp-2 text-gray-600">
                        {product.shortDescription}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <span className="inline-block bg-blue-50 text-blue-900 text-xs font-medium px-3 py-1.5 rounded-full">
                          {product.specifications[1]?.value || "Custom specifications available"}
                        </span>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-all"
                      >
                        <Link href={`/products/${productId}`}>
                          View Specs <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-base shadow-lg shadow-blue-600/25"
              >
                <Link href="/products">
                  View All Insulation Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── HITECH ADVANTAGE ─────────────────────────────────────── */}
        <section
          aria-labelledby="advantage-heading"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                id="advantage-heading"
                className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
              >
                Why Hitech is India's Best Insulation Manufacturer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                47 years of electrical insulation manufacturing excellence from Chennai, Tamil Nadu.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: Target,
                  title: "Custom Insulation Engineering",
                  desc: "Pressboard components, epoxy laminates, and FRP parts manufactured to your exact drawing specifications",
                },
                {
                  icon: Award,
                  title: "47 Years of Experience Since 1977",
                  desc: "India's most experienced electrical insulation manufacturer based in Chennai, Tamil Nadu",
                },
                {
                  icon: Globe,
                  title: "Globally Sourced Raw Materials",
                  desc: "Insulation raw materials sourced from certified international and domestic suppliers",
                },
                {
                  icon: Shield,
                  title: "ISO-Certified Manufacturing",
                  desc: "Quality-controlled insulation production on every batch from our Chennai facility",
                },
                {
                  icon: Clock,
                  title: "24-Hour Quote Turnaround",
                  desc: "Fast quote and delivery on standard and custom insulation orders across India",
                },
                {
                  icon: TrendingUp,
                  title: "Manufacturer Direct Pricing",
                  desc: "No middlemen – direct manufacturer pricing for insulation products and components",
                },
                {
                  icon: Users,
                  title: "Application Engineering Support",
                  desc: "Expert technical guidance for transformer, motor, and switchgear insulation selection",
                },
                {
                  icon: Box,
                  title: "Pan-India Delivery",
                  desc: "Insulation products shipped across Tamil Nadu, Maharashtra, Gujarat, Karnataka, and all India",
                },
              ].map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-4 p-6 bg-gray-50 border-2 border-gray-100 rounded-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <b.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-900">{b.title}</h3>
                    <p className="text-gray-600 text-sm">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-base font-semibold shadow-lg shadow-blue-600/25"
              >
                <Link href="/contact#quote">Request Custom Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── ABOUT ────────────────────────────────────────────────── */}
        <section
          aria-labelledby="about-heading"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                id="about-heading"
                className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
              >
                Best Pressboard Manufacturer in India Since 1977
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From Chennai, Tamil Nadu to customers across India - 47 years of precision
                electrical insulation manufacturing.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl blur-xl opacity-40" />
                <div className="relative h-[500px] rounded-2xl shadow-2xl overflow-hidden">
                  <Image
                    src="/slide1.jpg"
                    alt="Hitech Insulation manufacturing facility Chennai – best pressboard manufacturer India"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  {[
                    {
                      icon: Award,
                      title: "Founded 1977 in Chennai, Tamil Nadu",
                      body: "Mr. Radhakrushnun established Hitech Insulation with one mission: manufacture electrical insulation components that don't fail under pressure. Today we are recognised as India's best pressboard manufacturer.",
                    },
                    {
                      icon: Factory,
                      title: "ISO-Certified Manufacturing Facility",
                      body: "State-of-the-art electrical insulation manufacturing in Chennai, Tamil Nadu. Supplying transformer manufacturers, motor industries, switchgear and panel board makers, and bus duct manufacturers across India.",
                    },
                    {
                      icon: Globe,
                      title: "Trusted by Leading OEMs",
                      body: "Manufacturing partner for Hitachi, Toyota, BHEL, Siemens, Schneider Electric, and Toshiba. From trading insulation products to precision manufacturer - our commitment to engineering excellence stays constant.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 mt-8">
                  <Link href="/about">About Hitech Insulation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
        <section
          aria-labelledby="testimonials-heading"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                id="testimonials-heading"
                className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
              >
                Trusted by Manufacturers Across India
              </h2>
              <p className="text-xl text-gray-600">
                What transformer, motor, and panel board manufacturers say about Hitech Insulation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Hitech Insulation has been our trusted pressboard supplier for over 15 years. Quality is consistently excellent and they always deliver on time across Maharashtra.",
                  name: "Rajesh Kumar",
                  title: "Production Manager",
                  company: "Transformer Manufacturer, Maharashtra",
                },
                {
                  quote:
                    "The custom insulation fabrication service saved us weeks of production time. Their Chennai engineering team understood our transformer requirements perfectly.",
                  name: "Priya Sharma",
                  title: "Technical Director",
                  company: "Motor Manufacturer, Tamil Nadu",
                },
                {
                  quote:
                    "Quality insulation materials, competitive pricing, and excellent technical support. Hitech Insulation is our first choice for electrical insulation components in India.",
                  name: "Amit Patel",
                  title: "Procurement Head",
                  company: "Panel Board Manufacturer, Gujarat",
                },
              ].map((t) => (
                <Card key={t.name} className="border-2 border-gray-100 bg-white">
                  <CardContent className="pt-8">
                    <div className="mb-6">
                      <div className="flex gap-1 mb-4" aria-label="5 star rating">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400" aria-hidden="true">
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-700 leading-relaxed italic">&quot;{t.quote}&quot;</p>
                    </div>
                    <div className="pt-6 border-t border-gray-100">
                      <p className="font-bold text-gray-900 text-lg">{t.name}</p>
                      <p className="text-sm text-gray-600 mt-1">{t.title}</p>
                      <p className="text-sm text-blue-600 font-medium mt-1">{t.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section
          aria-labelledby="faq-heading"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2
                id="faq-heading"
                className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
              >
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about Hitech Insulation products and services.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Where is Hitech Insulation located?",
                  a: "Hitech Insulation is based in Chennai, Tamil Nadu, India. We manufacture and supply electrical insulation products to customers across Tamil Nadu, Maharashtra, Gujarat, Karnataka, Andhra Pradesh, and all of India.",
                },
                {
                  q: "What electrical insulation products does Hitech Insulation manufacture?",
                  a: "We manufacture pressboard sheets, pre-compressed pressboard, transformer insulation kits, moulded pressboard components, FR4 and G10/G11 epoxy sheets, hylam and paper phenolic laminates, bakelite sheets, electrical grade kraft paper, FRP tubes and rods, mica sheets and tapes, PTFE sheets, engineering plastics, Nomex paper, crepe paper, and custom fabricated insulation components.",
                },
                {
                  q: "Is Hitech Insulation ISO certified?",
                  a: "Yes. Hitech Insulation operates an ISO-certified manufacturing facility in Chennai, Tamil Nadu. All products are manufactured under quality-controlled processes to meet stringent performance and dimensional standards.",
                },
                {
                  q: "Do you supply pressboard for transformer manufacturers in India?",
                  a: "Yes. We are a leading pressboard manufacturer in India. We supply electrical grade pressboard sheets, pre-compressed pressboard, moulded pressboard components, and complete transformer insulation kits to transformer manufacturers across India.",
                },
                {
                  q: "Can you manufacture custom insulation components?",
                  a: "Yes. We offer custom fabrication from any material we supply - CNC machining, laser cutting, water jet cutting, and die stamping. We work from customer drawings to tolerance ±0.05mm. Prototype to production volume.",
                },
                {
                  q: "How quickly can I get a quote?",
                  a: "Our engineering team in Chennai provides quotes within 24 hours. Send specifications or drawings to srk@hitechinsulation.in or use the quote form on this page.",
                },
              ].map((item) => (
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

        <Location />

        {/* ── QUOTE FORM ───────────────────────────────────────────── */}
        <section
          id="quote"
          aria-labelledby="quote-heading"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                id="quote-heading"
                className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
              >
                Get Your Insulation Quote in 24 Hours
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Share your requirements. Our engineering team in Chennai will review and respond
                within 24 hours. Pressboard, epoxy sheets, FRP, mica, PTFE, and custom fabrication.
              </p>
            </div>
            <Card className="bg-white border-2 border-gray-100 shadow-xl">
              <CardContent className="p-8 sm:p-10">
                <QuoteForm />
                <div className="mt-8 space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500 font-medium">
                        Or contact us directly
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href="mailto:srk@hitechinsulation.in"
                      className="flex items-center justify-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors border border-gray-200"
                    >
                      <Mail className="h-5 w-5 text-blue-600" />
                      <div className="text-left">
                        <div className="text-xs text-gray-500 font-medium">Email</div>
                        <div className="text-sm text-gray-900 font-semibold">
                          srk@hitechinsulation.in
                        </div>
                      </div>
                    </a>
                    <div className="flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <div className="text-left">
                        <div className="text-xs text-gray-500 font-medium">Response Time</div>
                        <div className="text-sm text-gray-900 font-semibold">Within 24 Hours</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
