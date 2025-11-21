'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="font-bold text-xl text-gray-900">
              HITECH INSULATION
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors">
              Home
            </Link>
            <Link href="/#products" className="text-gray-700 hover:text-blue-900 transition-colors">
              Products
            </Link>
            <Link href="/#industries" className="text-gray-700 hover:text-blue-900 transition-colors">
              Industries
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-blue-900 transition-colors">
              About
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-blue-900 transition-colors">
              Contact
            </Link>
            <Button asChild className="bg-blue-900 hover:bg-blue-800">
              <Link href="/#quote">Get Quote</Link>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-blue-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#products"
              className="block py-2 text-gray-700 hover:text-blue-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/#industries"
              className="block py-2 text-gray-700 hover:text-blue-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="/#about"
              className="block py-2 text-gray-700 hover:text-blue-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="block py-2 text-gray-700 hover:text-blue-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full bg-blue-900 hover:bg-blue-800">
              <Link href="/#quote" onClick={() => setMobileMenuOpen(false)}>
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
