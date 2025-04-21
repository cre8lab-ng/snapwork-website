"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-8 py-6 relative z-50">
      <div className="flex items-center gap-2 bg-blue-200 p-2 rounded-xl">
        <Image
          src="/snapwork-logo.svg"
          alt="Snapwork Logo"
          width={150}
          height={150}
        />
      </div>

      <nav className="space-x-6 hidden md:flex bg-blue-200 p-4 rounded-xl">
        <Link href="#why-us" className="text-blue-100 font-bold">
          Why Us
        </Link>
        <Link href="#services" className="text-blue-100 font-bold">
          Services
        </Link>
        <Link href="#pricing" className="text-blue-100 font-bold">
          Pricing
        </Link>
        <Link href="#contact" className="text-blue-100 font-bold">
          Contact Us
        </Link>
      </nav>

      <Button className="bg-blue-100 text-blue-200 rounded-xl p-3 hidden md:block">
        Book Now
      </Button>

      <div className="md:hidden">
        <button
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

      {menuOpen && (
        <div className="fixed inset-0 bg-blue-300 flex flex-col items-center justify-center space-y-6 z-40 md:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none"
            aria-label="Close menu"
          >
            ×
          </button>

          <Link
            href="#why-us"
            onClick={() => setMenuOpen(false)}
            className="text-blue-100 font-bold text-2xl"
          >
            Why Us
          </Link>
          <Link
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="text-blue-100 font-bold text-2xl"
          >
            Services
          </Link>
          <Link
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="text-blue-100 font-bold text-2xl"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-blue-100 font-bold text-2xl"
          >
            Contact Us
          </Link>
          <Button
            onClick={() => setMenuOpen(false)}
            className="bg-blue-100 text-blue-200 text-lg p-4 rounded-xl"
          >
            Book Now
          </Button>
        </div>
      )}
    </header>
  );
}
