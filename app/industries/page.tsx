import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Box, Cpu, Factory, Flame, Shield, Sparkles, Zap } from "lucide-react";
import { getSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const industries = [
  {
    title: "Power & Distribution Transformers",
    icon: Zap,
    description:
      "Pressboard spacers, insulation kits, winding cylinders, and crepe papers engineered for high dielectric strength and oil compatibility.",
    needs: [
      "High-voltage dielectric strength",
      "Precision pre-cut components",
      "Oil-immersed reliability",
    ],
    materials: ["Pressboard", "Kraft Paper", "Nomex", "Transformer Kits"],
  },
  {
    title: "Motor & Generator Manufacturers",
    icon: Cpu,
    description:
      "Phenolic laminates, epoxy glass sheets, and slot liners cut to exact tolerances for LV and HV motor insulation.",
    needs: ["Mechanical strength", "Thermal stability", "Custom slot liners"],
    materials: ["FR4/G10", "Cotton Phenolic", "Polyester Film", "Nomex"],
  },
  {
    title: "Panel Board & Switchgear",
    icon: Factory,
    description:
      "Arc-resistant epoxy sheets, bakelite panels, and machined barriers for indoor and outdoor switchgear assemblies.",
    needs: ["Arc resistance", "Dimensional accuracy", "Clean finishes"],
    materials: ["FR4", "Bakelite", "Epoxy Rods", "Custom Gaskets"],
  },
  {
    title: "Bus Duct & Power Distribution",
    icon: Box,
    description:
      "Temperature-resistant laminates, PTFE components, and epoxy tubes for high current busbar insulation.",
    needs: ["Heat resistance", "Low dielectric loss", "Custom machining"],
    materials: ["PTFE", "Delrin", "Fiberglass Tubes", "Epoxy Sheets"],
  },
  {
    title: "Foundry & Thermal Equipment",
    icon: Flame,
    description:
      "Syndanio boards, mica sheets, and high-temperature insulation tailored for furnaces, kilns, and heating systems.",
    needs: ["1000°C stability", "Thermal shock resistance", "Clean machining"],
    materials: ["Syndanio", "Mica Sheets", "PTFE Cloth", "Custom Assemblies"],
  },
  {
    title: "Custom Fabrication & OEMs",
    icon: Sparkles,
    description:
      "End-to-end insulation engineering for specialized electrical equipment, including prototypes and short runs.",
    needs: ["Rapid prototyping", "Multi-material builds", "Design assistance"],
    materials: ["All catalog materials", "CNC machining", "Laser/Waterjet cutting"],
  },
];

export const metadata: Metadata = getSeoMetadata("industries");

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-5 py-2.5">
              <Award className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">
                Trusted By Electrical OEMs Worldwide
              </span>
            </div>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Industries We Power
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            From power transformers to aerospace-grade insulation, Hitech delivers customized
            solutions that survive extreme electrical, mechanical, and thermal loads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-base shadow-lg shadow-blue-600/20"
            >
              <Link href="/contact">Discuss Your Application</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 px-8 py-6"
            >
              <Link href="/products">View Material Catalog</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry) => (
            <Card
              key={industry.title}
              className="border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all flex flex-col"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                      <industry.icon className="h-7 w-7 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">{industry.title}</CardTitle>
                    <CardDescription className="mt-2 text-base leading-relaxed">
                      {industry.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 mt-auto">
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Critical Needs
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {industry.needs.map((need) => (
                      <span
                        key={need}
                        className="inline-flex items-center text-sm font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-700"
                      >
                        <Shield className="h-3.5 w-3.5 mr-2 text-blue-600" />
                        {need}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Recommended Materials
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.materials.map((material) => (
                      <Badge
                        key={material}
                        variant="secondary"
                        className="bg-blue-50 text-blue-900"
                      >
                        {material}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">Request Application Support</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Component Capabilities Across Industries
          </h2>
          <p className="text-lg text-gray-600">
            We produce everything from raw sheets to finished assemblies. Send us drawings or legacy
            part numbers and we&apos;ll reverse engineer the exact insulation stack-up.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Pressboard Kits", detail: "Baffles, cylinders, spacers" },
              { title: "Epoxy Components", detail: "Busbar supports, barriers" },
              { title: "PTFE Fabrication", detail: "Custom gaskets, seals" },
              { title: "Machined Assemblies", detail: "Ready-to-install kits" },
            ].map((capability) => (
              <div
                key={capability.title}
                className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900">{capability.title}</h3>
                <p className="text-gray-600 mt-2">{capability.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Need Field-Proven Insulation For Your Industry?
          </h2>
          <p className="text-lg text-blue-100">
            Our application engineers review your specs, match the right materials, and deliver
            prototypes or production batches with zero guesswork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6"
            >
              <Link href="/contact">Submit Project Brief</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-blue-700 text-white hover:bg-blue-600 px-8 py-6"
            >
              <a href="mailto:srk@hitechinsulation.in">Email Engineering</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
