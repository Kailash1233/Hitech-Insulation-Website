import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Instagram, Facebook, Youtube, Linkedin, ArrowRight } from "lucide-react";
import { SITE, yearsInBusiness } from "@/lib/site";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { profiles } = SITE;
  const socials = [
    { href: profiles.instagram, label: "Instagram", Icon: Instagram },
    { href: profiles.facebook, label: "Facebook", Icon: Facebook },
    { href: profiles.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: profiles.youtube, label: "YouTube", Icon: Youtube },
  ].filter((s) => s.href);
  const listings = [
    { href: profiles.googleBusiness, label: "Google" },
    { href: profiles.indiamart, label: "IndiaMART" },
    { href: profiles.justdial, label: "Justdial" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - CTA Banner */}
        <div className="border-b border-gray-800 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-gray-400 text-lg">
                Request a custom quote and get expert engineering support within 24 hours.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all whitespace-nowrap"
            >
              Get Quote Now <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 py-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/HITECHINSULATION.png"
                alt="Hitech Insulation"
                width={140}
                height={48}
                className="brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Pressboard and electrical insulation manufacturer in Guindy, Chennai since 1977 –{" "}
              {yearsInBusiness()} years of supplying transformer, motor, and switchgear
              manufacturers across India and overseas.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-300 border border-gray-700">
                ISO Certified
              </div>
              <div className="bg-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-300 border border-gray-700">
                Est. 1977
              </div>
              <div className="bg-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-300 border border-gray-700">
                Made in India
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/pressboard"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  Pressboard Manufacturer
                </Link>
              </li>
              <li>
                <Link
                  href="/products/pre-compressed-pressboard"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  Pre-Compressed Pressboard
                </Link>
              </li>
              <li>
                <Link
                  href="/products/transformer-insulation-kits"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  Transformer Insulation Kits
                </Link>
              </li>
              <li>
                <Link
                  href="/products/g10-epoxy-sheet"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  Epoxy Sheets
                </Link>
              </li>
              <li>
                <Link
                  href="/products/paper-phenolic"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  Hylam &amp; Phenolic Laminates
                </Link>
              </li>
              <li>
                <Link
                  href="/products/ptfe-sheet"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  PTFE Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products/custom-gaskets"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  Custom Components
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:srk@hitechinsulation.in"
                  className="text-gray-400 hover:text-white transition-colors flex items-start gap-3 group"
                >
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-500 group-hover:text-blue-400" />
                  <span className="text-sm break-all">srk@hitechinsulation.in</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="text-gray-400 hover:text-white transition-colors flex items-start gap-3 group"
                >
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-500 group-hover:text-blue-400" />
                  <span className="text-sm">{SITE.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-500" />
                <address className="text-sm text-gray-400 not-italic">
                  {SITE.name}, {SITE.address.street},
                  <br />
                  {SITE.address.locality} – {SITE.address.postalCode}, {SITE.address.region}, India
                </address>
              </li>
              <li>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 mt-6">
                  Find Us Online
                </p>
                {socials.length > 0 && (
                  <div className="flex gap-3 mb-3">
                    {socials.map(({ href, label, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                        aria-label={label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {listings.map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-blue-600 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-300 hover:text-white border border-gray-700 transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 leading-7 text-center max-w-6xl mx-auto">
            Hitech Insulation, Guindy, Chennai is a leading manufacturer and supplier of electrical
            insulation materials including Pressboard, Pre-Compressed Pressboard, Nomex Paper, Kraft Paper, FR4 Epoxy Sheets, Bakelite
            Sheets, PTFE Sheets, FRP Components, Mica Products, Polyester Films, Transformer
            Insulation Kits and Custom Electrical Insulation Components serving transformer,
            switchgear, motor, generator and electrical equipment manufacturers across Tamil Nadu,
            South India, North India and export markets.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} Hitech Insulation. All rights reserved. | Established 1977 | Designed
              with <span className="text-red-500">❤️</span> by{" "}
              <Link
                href="https://adszoo.in"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300 transition-colors"
              >
                Adszoo
              </Link>
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-700">•</span>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
              <span className="text-gray-700">•</span>
              <span className="text-gray-400">Made in India 🇮🇳</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
