"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between p-2 lg:px-8 lg:py-6 relative z-50">
      <div className="flex items-center gap-2 bg-blue-200 p-2 rounded-xl">
        <Image
          src="images/snapwork-logo.svg"
          alt="Snapwork Logo"
          width={150}
          height={150}
        />
      </div>

      {/* Desktop Nav */}
      <nav className="space-x-6 hidden md:flex bg-blue-200 p-4 rounded-xl">
        <Link href="#why-us" className="text-darkblue font-bold">
          Why Us
        </Link>
        <Link href="#services" className="text-darkblue font-bold">
          Services
        </Link>
        <Link href="#pricing" className="text-darkblue font-bold">
          Pricing
        </Link>
        <Link href="#contact" className="text-darkblue font-bold">
          Contact Us
        </Link>
      </nav>

      {/* Desktop Book Now Button */}
      <a
        href="https://book-snapwork.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block"
      >
        <Button className="bg-darkblue text-blue-200 rounded-xl p-3">
          Book Now
        </Button>
      </a>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex flex-col gap-1 w-8 h-8 justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 bg-darkblue flex flex-col items-center justify-center space-y-6 z-40 md:hidden transition-opacity duration-300">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-blue-200 text-3xl font-bold focus:outline-none"
            aria-label="Close menu"
          >
            ×
          </button>

          <Link
            href="#why-us"
            onClick={() => setMenuOpen(false)}
            className="text-blue-200 font-bold text-2xl"
          >
            Why Us
          </Link>
          <Link
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="text-blue-200 font-bold text-2xl"
          >
            Services
          </Link>
          <Link
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="text-blue-200 font-bold text-2xl"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-blue-200 font-bold text-2xl"
          >
            Contact Us
          </Link>

          <a
            href="https://book-snapwork.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="bg-blue-200 text-darkblue text-lg p-4 rounded-xl font-semibold"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
