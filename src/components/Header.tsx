"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-[#1a365d]">
              Kara
            </span>
            <span className="text-sm font-medium text-slate-600 hidden sm:inline">
              Legal & Compliance Advisory
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-[#1a365d] font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#1a365d] text-white px-5 py-2.5 rounded-md font-semibold hover:bg-[#0f2744] transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-[#1a365d] font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-[#1a365d] text-white px-5 py-2.5 rounded-md font-semibold text-center w-fit"
                onClick={() => setMobileOpen(false)}
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
