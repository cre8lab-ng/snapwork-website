"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 pt-4 sm:pt-6">
      <header className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-blue-100 rounded-2xl relative">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/snapwork-logo.svg"
            alt="Snapwork Logo"
            width={80}
            height={60}
            className="w-auto h-10 sm:h-12 md:h-14"
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#services"
            className="text-darkblue hover:text-orange-100 font-bold transition-colors duration-200"
          >
            Why Us?
          </Link>
          <Link
            href="#about"
            className="text-darkblue hover:text-orange-100 font-bold transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="#pricing"
            className="text-darkblue hover:text-orange-100 font-bold transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="text-darkblue hover:text-orange-100 font-bold transition-colors duration-200"
          >
            Contact Us
          </Link>
        </nav>

        {/* Desktop Book Now button */}
        <Button className="hidden md:block text-sm md:text-base px-4 md:px-6">
          Book Now
        </Button>

        {/* Mobile hamburger menu button */}
        <Button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 !bg-transparent !p-0"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`w-6 h-0.5 bg-darkblue transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-darkblue transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-darkblue transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </Button>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-blue-100 rounded-2xl shadow-lg md:hidden z-50">
            <nav className="flex flex-col space-y-4 p-6">
              <Link
                href="#services"
                className="text-darkblue hover:text-orange-100 font-bold transition-colors duration-200 text-center py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Us?
              </Link>
              <Link
                href="#about"
                className="text-darkblue hover:text-orange-100 font-bold transition-colors duration-200 text-center py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#pricing"
                className="text-darkblue hover:text-orange-100 font-bold transition-colors duration-200 text-center py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="text-darkblue hover:text-orange-100 font-bold transition-colors duration-200 text-center py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="pt-4 border-t border-darkblue/20">
                <Button 
                  className="w-full text-sm block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
