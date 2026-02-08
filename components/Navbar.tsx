"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white border-b z-50">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Vertex Treks Logo"
            width={1024}
            height={1024}
            priority
            className="h-18 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-navy">
          <Link href="/treks" className="hover:text-glacier">
            Treks
          </Link>
          <Link href="/about" className="hover:text-glacier">
            About
          </Link>
          <Link href="/contact" className="hover:text-glacier">
            Contact
          </Link>

          {/* Book Now Button */}
          <Link
            href="/contact"
            className="bg-navy text-white px-5 py-2 rounded-lg hover:opacity-90"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-navy"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 space-y-4 text-navy">
            <Link href="/treks" onClick={() => setMenuOpen(false)}>
              Treks
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-navy text-white text-center py-2 rounded-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
