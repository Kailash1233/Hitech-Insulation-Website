import Link from 'next/link';
import { Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#quote" className="hover:text-white transition-colors">
                  Request Quote
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Technical Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/pressboard-3mm" className="hover:text-white transition-colors">
                  Pressboard
                </Link>
              </li>
              <li>
                <Link href="/products/fr4-epoxy-sheet" className="hover:text-white transition-colors">
                  Epoxy Sheets
                </Link>
              </li>
              <li>
                <Link href="/products/paper-phenolic" className="hover:text-white transition-colors">
                  Phenolic Laminates
                </Link>
              </li>
              <li>
                <Link href="/products/ptfe-sheet" className="hover:text-white transition-colors">
                  PTFE Products
                </Link>
              </li>
              <li>
                <Link href="/products/custom-gaskets" className="hover:text-white transition-colors">
                  Custom Components
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Industries</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition-colors cursor-pointer">
                Transformer Manufacturers
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Motor Industry
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Panel Boards
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Switchgear
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:srk@hitechinsulation.in"
                  className="hover:text-white transition-colors"
                >
                  srk@hitechinsulation.in
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-center md:text-left">
            © 2025 Hitech Insulation. Established 1977
          </p>
          <p className="text-sm text-center md:text-right">
            ISO Certified • Made in India • Shipped Globally
          </p>
        </div>
      </div>
    </footer>
  );
}
