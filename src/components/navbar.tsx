"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`w-full transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 z-50 px-0 py-2 shadow-lg bg-white/10 backdrop-blur-sm"
          : "px-4 sm:px-6 md:px-10 pt-4 sm:pt-6"
      }`}
    >
      <header
        className={`w-full flex items-center justify-between relative transition-all duration-300 ${
          isScrolled
            ? "px-4 sm:px-6 md:px-10 py-3 sm:py-4"
            : "px-4 sm:px-6 py-3 sm:py-4 bg-darkblue rounded-2xl"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={
                isScrolled
                  ? "/images/snapwork-logo.svg"
                  : "/images/snapwork-logo-white.svg"
              }
              alt="Snapwork Logo"
              width={80}
              height={60}
              className={`w-auto cursor-pointer ${
                isScrolled 
                  ? "h-10 sm:h-12 md:h-14" 
                  : "h-6 sm:h-8 md:h-10"
              }`}
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/about"
            className={`${
              isScrolled ? "text-darkblue" : "text-white"
            } hover:text-orange-100 font-bold transition-colors duration-200`}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={`${
              isScrolled ? "text-darkblue" : "text-white"
            } hover:text-orange-100 font-bold transition-colors duration-200`}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`${
              isScrolled ? "text-darkblue" : "text-white"
            } hover:text-orange-100 font-bold transition-colors duration-200`}
          >
            Contact Us
          </Link>
          <Link
            href="/join-us"
            className={`${
              isScrolled ? "text-darkblue" : "text-white"
            } hover:text-orange-100 font-bold transition-colors duration-200`}
          >
            Join Us
          </Link>
        </nav>

        {/* Desktop Book Now button */}
        <a
          href="https://book-snapwork.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant={isScrolled ? "default" : "secondary"}
            className="hidden md:block text-sm md:text-base px-4 md:px-6"
          >
            Book Now
          </Button>
        </a>

        {/* Mobile hamburger menu button */}
        <Button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 !bg-transparent !p-0"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`w-6 h-0.5 ${
              isScrolled ? "bg-darkblue" : "bg-white"
            } transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 ${
              isScrolled ? "bg-darkblue" : "bg-white"
            } transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 ${
              isScrolled ? "bg-darkblue" : "bg-white"
            } transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </Button>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-blue-100 rounded-2xl shadow-lg md:hidden z-50">
            <nav className="flex flex-col space-y-4 p-6">
              <Link
                href="/about"
                className="text-darkblue hover:text-orange-100 font-bold transition-colors duration-200 text-center py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/#why-us"
                className="text-darkblue hover:text-orange-100 font-bold transition-colors duration-200 text-center py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Us?
              </Link>
              <Link
                href="/#services"
                className="text-darkblue hover:text-orange-100 font-bold transition-colors duration-200 text-center py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-darkblue hover:text-orange-100 font-bold transition-colors duration-200 text-center py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/join-us"
                className="text-darkblue hover:text-orange-100 font-bold transition-colors duration-200 text-center py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Us
              </Link>
              <div className="pt-4 border-t border-darkblue/20">
                <a
                  href="https://book-snapwork.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    className="w-full text-sm block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book Now
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
