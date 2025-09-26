"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 pt-4 sm:pt-6">
      <header className="w-full flex items-center justify-between px-6 py-4 bg-blue-100 rounded-2xl">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/snapwork-logo.svg"
            alt="Snapwork Logo"
            width={80}
            height={60}
            className="w-auto h-12"
          />
        </div>

        {/* Center Navigation Links */}
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

        {/* Join our waitlist button */}
        <Button >
          Join our waitlist
        </Button>
      </header>
    </div>
  );
}
