/*import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="w-full border-b border-brand-navy/10 bg-white sticky top-0 z-50 backdrop-blur">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-icon.png" alt="PeerPays logo" width={32} height={32} priority />
          <span className="font-semibold text-lg text-brand-navy">PeerPays</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link className="nav-link" href="/how-it-works">How it works</Link>
          <Link className="nav-link" href="/faq">FAQ</Link>
          <Link className="btn btn-primary" href="#get-started">Get started</Link>
        </nav>
      </div>
    </header>
  );
}

*/

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#faf9fa] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/logo-icon.png" // ← your PeerPays logo path
                alt="PeerPays"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-800 hover:text-purple-600">
              Home
            </Link>
            <Link href="/faq" className="text-gray-800 hover:text-purple-600">
              FAQ
            </Link>
            <Link href="/how-it-works" className="text-gray-800 hover:text-purple-600">
              How it Works
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#faf9fa] px-4 pb-4 space-y-2">
          <Link href="/" className="block text-gray-800 hover:text-purple-600">
            Home
          </Link>
          <Link href="/faq" className="block text-gray-800 hover:text-purple-600">
            FAQ
          </Link>
          <Link href="/how-it-works" className="block text-gray-800 hover:text-purple-600">
            How it Works
          </Link>
        </div>
      )}
    </nav>
  );
}
