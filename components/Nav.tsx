"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav({ onGetStarted }: { onGetStarted?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-brand-navy/10 bg-white/95 backdrop-blur-sm fixed top-0 z-50">
      <div className="container flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image src="/logo-icon.png" alt="PeerPays logo" width={28} height={28} priority className="md:w-8 md:h-8" />
          <span className="font-semibold text-base md:text-lg text-brand-navy">PeerPays</span>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link className="nav-link text-brand-teal font-medium hover:text-brand-navy transition-colors" href="/credit-cards">Apply for Cards</Link>
          <Link className="nav-link hover:text-brand-teal transition-colors" href="/how-it-works">How it works</Link>
          <Link className="nav-link hover:text-brand-teal transition-colors" href="/faq">FAQ</Link>
          {onGetStarted ? (
            <button
              onClick={onGetStarted}
              className="btn btn-primary text-sm px-4 py-2 hover:scale-105 transition-transform"
            >
              Get started
            </button>
          ) : (
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScSUn2RHGz_b8qAxaGYI4PH4DdRbOlTdnQ9WYzkr56TsX6XHA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-sm px-4 py-2 hover:scale-105 transition-transform"
            >
              Get started
            </a>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 -mr-2 text-brand-navy hover:text-brand-teal hover:bg-brand-teal/5 rounded-lg transition-all duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t border-brand-navy/10 transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container px-4 py-3 space-y-1">
          <Link 
            href="/credit-cards" 
            className="block py-2 px-3 text-brand-teal font-medium hover:bg-brand-teal/5 rounded-md transition-colors text-sm" 
            onClick={() => setIsOpen(false)}
          >
            Apply for Cards
          </Link>
          <Link 
            href="/how-it-works" 
            className="block py-2 px-3 text-brand-navy hover:bg-brand-navy/5 rounded-md transition-colors text-sm" 
            onClick={() => setIsOpen(false)}
          >
            How it works
          </Link>
          <Link 
            href="/faq" 
            className="block py-2 px-3 text-brand-navy hover:bg-brand-navy/5 rounded-md transition-colors text-sm" 
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
          <div className="pt-1">
            {onGetStarted ? (
              <button
                onClick={() => {
                  onGetStarted();
                  setIsOpen(false);
                }}
                className="btn btn-primary w-full justify-center text-sm py-2"
              >
                Get started
              </button>
            ) : (
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScSUn2RHGz_b8qAxaGYI4PH4DdRbOlTdnQ9WYzkr56TsX6XHA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full justify-center inline-flex text-sm py-2"
                onClick={() => setIsOpen(false)}
              >
                Get started
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}