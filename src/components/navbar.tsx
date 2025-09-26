"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 pt-4 sm:pt-6">
      <header className="w-full flex items-center justify-between px-6 py-4 bg-orange-200 rounded-2xl">
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
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="#pricing"
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Join our waitlist button */}
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200">
          Join our waitlist
        </Button>
      </header>
    </div>
  );
}
