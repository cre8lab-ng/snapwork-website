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
    <footer className="bg-darkblue text-white px-4 pt-20 pb-10">
      <div className="lg:flex justify-between">
        <div>
          <h2 className="text-xl font-bold mb-4 leading-snug">
            Stay updated with Snapwork by
            <br />
            signing up for our newsletter
          </h2>
          <input
            type="email"
            placeholder="Email Address"
            className="bg-blue-300 w-full rounded-lg px-4 py-3 mb-4 text-white border border-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          <Button variant="secondary">
            Subscribe
          </Button>
        </div>

        <div className="mt-6 lg:mt-0">
          <div
            className="flex justify-between items-center md:block cursor-pointer"
            onClick={() => toggleSection("company")}
          >
            <h3 className="text-lg font-semibold mb-4 md:mb-2">COMPANY</h3>
            <div className="md:hidden">
              <Image
                src="/images/dropdown.svg"
                alt="Dropdown"
                width={20}
                height={20}
              />
            </div>
          </div>
          <ul
            className={`space-y-2 md:block ${
              isOpen("company") ? "block" : "hidden md:block"
            }`}
          >
            <li>About Us</li>
            <li>Join as a service provider</li>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="mt-6 lg:mt-0">
          <div
            className="flex justify-between items-center md:block cursor-pointer"
            onClick={() => toggleSection("quick")}
          >
            <h3 className="text-lg font-semibold mb-4 md:mb-2">QUICK LINKS</h3>
            <div className="md:hidden">
              <Image
                src="/images/dropdown.svg"
                alt="Dropdown"
                width={20}
                height={20}
              />
            </div>
          </div>
          <ul
            className={`space-y-2 md:block ${
              isOpen("quick") ? "block" : "hidden md:block"
            }`}
          >
            <li>Book Now</li>
            <li>FAQ</li>
            <li>Get a quote</li>
            <li>Services</li>
          </ul>
        </div>

        <div className="mt-6 lg:mt-0">
          <div
            className="flex justify-between items-center md:block cursor-pointer"
            onClick={() => toggleSection("contact")}
          >
            <h3 className="text-lg font-semibold mb-4 md:mb-2">CONTACT</h3>
            <div className="md:hidden">
              <Image
                src="/images/dropdown.svg"
                alt="Dropdown"
                width={20}
                height={20}
              />
            </div>
          </div>
          <ul
            className={`space-y-3 md:block ${
              isOpen("contact") ? "block" : "hidden md:block"
            } text-sm`}
          >
            <li className="flex items-center gap-2">
              <Icon name="mail" />
              snap@work.ng
            </li>
            <li className="flex items-center gap-2">
              <Icon name="whatsapp" />
              +23404059336711
            </li>
            <li className="flex items-center gap-2">
              <Icon name="phone" />
              +23404059336711
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-30 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <Image
            src="images/snapwork-logo-white.svg"
            alt="Snapwork Logo"
            width={500}
            height={300}
          />
        </div>
        <div className="flex items-center gap-4">
          <div>
            <Icon name="linkedIn-bg" />
          </div>
          <div>
            <Icon name="instagram-bg" />
          </div>
          <div>
            <Icon name="mail-bg" />
          </div>
          <div>
            <Icon name="twitter-bg" />
          </div>
          <div>
            <Icon name="whatsapp-bg" />
          </div>
        </div>
      </div>
    </footer>
  );
}
