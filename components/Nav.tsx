"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav({ onGetStarted }: { onGetStarted?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-brand-navy/10 bg-white/95 backdrop-blur-sm fixed top-0 z-50">
      <div className="container flex items-center justify-between h-16 px-6 md:px-4">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image src="/logo-icon.png" alt="PeerPays logo" width={32} height={32} priority />
          <span className="font-semibold text-lg text-brand-navy">PeerPays</span>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link className="nav-link text-brand-teal font-medium hover:text-brand-navy" href="/credit-cards">Apply for Cards</Link>
          <Link className="nav-link" href="/how-it-works">How it works</Link>
          <Link className="nav-link" href="/faq">FAQ</Link>
          {onGetStarted ? (
            <button
              onClick={onGetStarted}
              className="btn btn-primary text-sm px-4 py-2"
            >
              Get started
            </button>
          ) : (
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScSUn2RHGz_b8qAxaGYI4PH4DdRbOlTdnQ9WYzkr56TsX6XHA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-sm px-4 py-2"
            >
              Get started
            </a>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-navy hover:text-brand-teal transition-colors"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-brand-navy/10">
          <div className="container py-4 space-y-3">
            <Link href="/credit-cards" className="block nav-link text-brand-teal font-medium" onClick={() => setIsOpen(false)}>
              Apply for Cards
            </Link>
            <Link href="/how-it-works" className="block nav-link" onClick={() => setIsOpen(false)}>
              How it works
            </Link>
            <Link href="/faq" className="block nav-link" onClick={() => setIsOpen(false)}>
              FAQ
            </Link>
            {onGetStarted ? (
              <button
                onClick={() => {
                  onGetStarted();
                  setIsOpen(false);
                }}
                className="btn btn-primary inline-block"
              >
                Get started
              </button>
            ) : (
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScSUn2RHGz_b8qAxaGYI4PH4DdRbOlTdnQ9WYzkr56TsX6XHA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-block"
                onClick={() => setIsOpen(false)}
              >
                Get started
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}