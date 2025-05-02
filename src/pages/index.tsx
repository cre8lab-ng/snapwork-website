"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import WebPageTitle from "@/components/webpagetitle";
import ServicesSection from "@/components/services-section";
import Footer from "@/components/footer";
import WhyUs from "@/components/why-us";
import CityMap from "@/components/city-map";
import ServiceProvider from "@/components/service-provider";
import Faq from "@/components/faq";
import ScrollingText from "@/components/scrolling-text";

export default function HeroSection() {
  const headings = [
    "One platform, all your services.",
    "Seamless Services, Anytime, Anywhere.",
    "Book Smart. Work Easy. Snapwork.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [headings.length]);

  return (
    <>
      <WebPageTitle title="Landing Page | Snapwork" />
      <div className="heroBackground">
        <Navbar />
        <main className="flex flex-col items-center mt-16 text-center px-4">
          <h1
            key={currentIndex}
            className="text-4xl md:text-5xl font-bold text-darkblue mb-6 mt-10 transition-opacity duration-1000 ease-in-out opacity-100"
          >
            {headings[currentIndex]}
          </h1>

          <Button className="bg-darkblue text-blue-200 rounded-xl px-6 py-3">
            Get started with us
          </Button>
        </main>
      </div>
      <ScrollingText/>
      <ServicesSection />
      <WhyUs />
      <CityMap />

      {/* Get a quote */}
      <div className="text-center py-20">
  <h1 className="font-extrabold text-2xl leading-tight text-blue-300">
    Discover custom solutions made just for you
  </h1>
  <div className="text-center mt-6 text-blue-300">
    <p>Looking to manage ongoing services or make a bulk booking?</p>
    <p>
      We’ll customise a solution that fits your team’s needs and budget.
    </p>
  </div>
  <Button className="mx-auto mt-6" size='lg'>Request a quote</Button>
</div>


      <ServiceProvider />
      <Faq />
      <Footer />
    </>
  );
}
