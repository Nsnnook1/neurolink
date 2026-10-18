"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="w-full bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">

        <Link href="/" className="text-xl font-bold text-green-900">
          NEUROLINK AI
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#solutions">Solutions</Link>
          <Link href="#insights">Insights</Link>
          {/* <Link href="#contact">Contact</Link> */}
        </div>

        <Link
          href="#contact"
          className="hidden rounded-full bg-green-900 px-6 py-3 text-sm text-white lg:block"
        >
          Contact Us
        </Link>

        {/* Mobile */}
        <button
          type="button"
          className="text-2xl lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="flex flex-col gap-5 border-t border-gray-200 bg-white px-5 py-6 lg:hidden"
        >
          <Link href="#home" onClick={closeMenu}>
            Home
          </Link>

          <Link href="#about" onClick={closeMenu}>
            About
          </Link>

          <Link href="#solutions" onClick={closeMenu}>
            Solutions
          </Link>

          <Link href="#insights" onClick={closeMenu}>
            Insights
          </Link>

          {/* <Link href="#contact" onClick={closeMenu}>
            Contact
          </Link> */}

          <Link
            href="#contact"
            onClick={closeMenu}
            className="rounded-full bg-green-900 px-6 py-3 text-center text-white"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
