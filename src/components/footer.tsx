import { useState } from "react";
import Icon from "./icon";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const isOpen = (section: string) => openSection === section;

  return (
    <footer className="bg-darkblue text-white section-spacing px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Newsletter signup section */}
          <div className="lg:col-span-1 lg:pr-8">
            <h2 className="text-subtitle component-spacing leading-relaxed !text-white">
              Stay updated with Snapwork by
              signing up for our newsletter
            </h2>
            <div className="space-y-6">
              <input
                type="email"
                placeholder="Email Address"
                className=" w-full rounded-lg px-6 py-4 text-blue-300 border border-gray-300 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <Button variant="secondary" className="w-auto px-10 py-3">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Company section */}
          <div className="lg:col-span-1">
            <div
              className="flex justify-between items-center lg:block cursor-pointer lg:cursor-default"
              onClick={() => toggleSection("company")}
            >
              <h3 className="text-h3 element-spacing tracking-wide !text-white">COMPANY</h3>
              <div className="lg:hidden">
                <Image
                  src="/images/dropdown.svg"
                  alt="Dropdown"
                  width={20}
                  height={20}
                  className={`transform transition-transform ${isOpen("company") ? "rotate-180" : ""}`}
                />
              </div>
            </div>
            <ul
              className={`space-y-3 lg:block ${
                isOpen("company") ? "block" : "hidden lg:block"
              } text-blue-100`}
            >
              <li className="hover:text-white cursor-pointer transition-colors !text-body">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors !text-body">Join as a service provider</li>
              <li className="hover:text-white cursor-pointer transition-colors !text-body">Terms of use</li>
              <li className="hover:text-white cursor-pointer transition-colors !text-body">Privacy Policy</li>
            </ul>
          </div>

          {/* Quick Links section */}
          <div className="lg:col-span-1">
            <div
              className="flex justify-between items-center lg:block cursor-pointer lg:cursor-default"
              onClick={() => toggleSection("quick")}
            >
              <h3 className="text-h3 element-spacing tracking-wide !text-white">QUICK LINKS</h3>
              <div className="lg:hidden">
                <Image
                  src="/images/dropdown.svg"
                  alt="Dropdown"
                  width={20}
                  height={20}
                  className={`transform transition-transform ${isOpen("quick") ? "rotate-180" : ""}`}
                />
              </div>
            </div>
            <ul
              className={`space-y-3 lg:block ${
                isOpen("quick") ? "block" : "hidden lg:block"
              } text-blue-100`}
            >
              <li className="hover:text-white cursor-pointer transition-colors !text-body">Book Now</li>
              <li className="hover:text-white cursor-pointer transition-colors !text-body">FAQ</li>
              <li className="hover:text-white cursor-pointer transition-colors !text-body">Get a quote</li>
              <li className="hover:text-white cursor-pointer transition-colors !text-body">Services</li>
            </ul>
          </div>

          {/* Contact section */}
          <div className="lg:col-span-1">
            <div
              className="flex justify-between items-center lg:block cursor-pointer lg:cursor-default"
              onClick={() => toggleSection("contact")}
            >
              <h3 className="text-h3 element-spacing tracking-wide !text-white">CONTACT</h3>
              <div className="lg:hidden">
                <Image
                  src="/images/dropdown.svg"
                  alt="Dropdown"
                  width={20}
                  height={20}
                  className={`transform transition-transform ${isOpen("contact") ? "rotate-180" : ""}`}
                />
              </div>
            </div>
            <ul
              className={`space-y-4 lg:block ${
                isOpen("contact") ? "block" : "hidden lg:block"
              } text-blue-100`}
            >
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <Icon name="mail" />
                <span className="!text-body">snap@work.ng</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <Icon name="whatsapp" />
                <span className="!text-body">+23404059336711</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <Icon name="phone" />
                <span className="!text-body">+23404059336711</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with logo and social icons */}
        <div className="mt-16 pt-8 border-t border-blue-700/50 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/images/snapwork-logo-white.svg"
              alt="Snapwork Logo"
              width={0}
              height={0}
              className="w-auto h-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="hover:scale-110 transition-transform cursor-pointer">
              <Icon name="linkedIn-bg" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer">
              <Icon name="instagram-bg" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer">
              <Icon name="mail-bg" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer">
              <Icon name="twitter-bg" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer">
              <Icon name="whatsapp-bg" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
