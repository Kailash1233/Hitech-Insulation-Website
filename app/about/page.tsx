import { Factory, Globe, Handshake, ShieldCheck, Users, Wrench } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Location } from "@/components/location";
import Image from "next/image";

const milestones = [
  {
    year: "1974",
    title: "Foundation in Parrys, Chennai",
    description:
      "The journey began in 1974 at Parrys, Chennai, with a small but focused setup dedicated to precision metal and industrial component work. This phase laid the foundation of discipline, craftsmanship, and long-term vision.",
  },
  {
    year: "2003",
    title: "Establishment of a New Factory",
    description:
      "To meet growing demand and expand manufacturing capabilities, a new factory was established in 2003. This marked a significant scale-up in production capacity and technical infrastructure.",
  },
  {
    year: "2013",
    title: "Expansion Through Global Partnerships",
    description:
      "Between 2013 and 2014, the company entered strategic global partnerships, enabling technology exchange, quality benchmarking, and access to international markets.",
  },
  {
    year: "2022",
    title: "Pressboard Component Manufacturing in Kundrathur",
    description:
      "In 2022, operations expanded into pressboard component manufacturing with a dedicated facility in Kundrathur, strengthening capabilities in specialized industrial components and diversified manufacturing.",
  },
  {
    year: "Today",
    title: "Custom Engineering Hub",
    description:
      "End-to-end insulation engineering partner serving Indian and international transformer, motor, and switchgear manufacturers.",
  },
];

export const metadata: Metadata = getSeoMetadata("about");

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative min-h-[85svh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/hero/about_hero.jpg" // make sure this exists in /public/hero
            alt="Hitech Insulation manufacturing facility and electrical insulation components"
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
            {/* Heritage */}
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Since 1977
            </p>

            {/* Heading */}
            <h1
              className="font-display font-bold tracking-tight leading-tight
                   text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Built on Precision.
              <br className="hidden sm:block" />
              Sustained by Trust.
            </h1>

            {/* Description */}
            <p
              className="text-base sm:text-lg md:text-xl
                   text-gray-200 leading-relaxed max-w-3xl mx-auto"
            >
              Hitech Insulation is a second-generation manufacturing company delivering premium
              electrical insulation components for transformers, motors, and engineered electrical
              systems worldwide. We combine decades of craftsmanship with modern production
              standards to ensure consistent, field-proven reliability.
            </p>

            {/* CTA */}
            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700
                     px-8 py-5 text-base font-semibold
                     shadow-lg shadow-blue-600/30"
              >
                Talk to Leadership
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-black
                     hover:bg-white/90 px-8 py-5 text-base"
              >
                <a href="mailto:srk@hitechinsulation.in">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="border-2 border-gray-100 shadow-sm">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <Factory className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">Manufacturing Heritage</CardTitle>
              <CardDescription>
                Multi-decade experience in cellulose pressboards, epoxy laminates, PTFE products,
                and custom machined insulation components.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-4 text-base leading-relaxed">
              <p>
                We operate from Chennai, India with ISO-certified processes and carefully sourced
                raw materials. Every batch is documented, traceable, and tested.
              </p>
              <p>
                Our team blends traditional craft-hand finishing, manual inspection-with modern CNC
                cutting, laser profiling, and automated curing.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 shadow-sm">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">Zero-Compromise Quality</CardTitle>
              <CardDescription>
                Our guiding principle: insulation should never be the reason a transformer or motor
                fails in the field.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-4 text-base leading-relaxed">
              <p>
                Detailed inspection checklists, dielectric testing, and dimensional verification
                ensure every panel, tube, and gasket meets spec.
              </p>
              <p>
                We partner closely with engineering teams to review drawings, simulate environments,
                and validate performance before production.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-[0.3em]">
              Trusted Process
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
              What Sets Hitech Apart
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              We are not traders-we are manufacturers. That lets us control material selection,
              machining, finishing, packaging, and delivery timelines end-to-end.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                title: "Global Materials",
                description:
                  "Sourcing programs across Europe and Asia ensure consistent quality of cellulose pulp, epoxy resins, and PTFE fabrics.",
              },
              {
                icon: Wrench,
                title: "Engineering Partnership",
                description:
                  "We study your CAD files, winding plans, and electrical specs before making the first cut.",
              },
              {
                icon: Users,
                title: "People First",
                description:
                  "Highly trained technicians with decades of experience handle finishing, inspection, and packaging.",
              },
              {
                icon: Handshake,
                title: "Long-Term Support",
                description:
                  "From prototyping to volume production, we stay involved through installation and maintenance cycles.",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <item.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center">
            <p className="text-sm font-semibold text-blue-600 tracking-[0.3em] uppercase">
              Timeline
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
              Four Decades Of Milestones
            </h2>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 rounded-2xl border border-gray-200 bg-gray-50/60"
              >
                <div className="text-3xl font-black text-blue-600 w-full md:w-24">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                  <p className="text-gray-600 mt-2">{milestone.description}</p>
                </div>
                <div className="hidden md:block text-4xl text-gray-300 font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Location />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Let&apos;s Build Your Next Insulation Program
          </h2>
          <p className="text-lg text-blue-100">
            Share your drawings, specifications, or legacy part numbers. Our engineers will
            recommend the right materials, thicknesses, and finishing to ensure your equipment never
            fails.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6"
            >
              <Link href="/contact">Schedule Technical Call</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-blue-700 text-white hover:bg-blue-600 px-8 py-6"
            >
              <a href="mailto:srk@hitechinsulation.in">Send Specifications</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
