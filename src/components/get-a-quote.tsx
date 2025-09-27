import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const rotatingWords = [
  "Electricians",
  "Bricklayers",
  "Tailors",
  "Painters",
  "Cleaners",
];

const serviceImages = [
  { src: "/images/electrician.svg", alt: "Electrician Service" },
  { src: "/images/bricklayer.svg", alt: "Bricklayer Service" },
  { src: "/images/tailor.svg", alt: "Tailoring Service" },
  { src: "/images/painter.svg", alt: "Painting Service" },
  { src: "/images/cleaner.svg", alt: "Cleaning Service" },
];

export default function GetAQuote() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % serviceImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(imageInterval);
  }, []);

  const text = rotatingWords[index];
  const currentImage = serviceImages[imageIndex];

  return (
    <section className="w-full overflow-hidden relative">
      <div className="grid md:grid-cols-2 items-center max-w-full relative z-10">
        <div className="space-y-10 section-spacing px-4 md:px-20">
          {/* Enhanced intro text with animated underline */}
          <div className="relative">
            <p className="text-subtitle tracking-wide leading-relaxed element-spacing">
              Dependable partners for every business need from
            </p>
          </div>

          {/* Enhanced main heading with smooth transitions and color changes */}
          <div className="relative">
            <h1
              className={`text-hero transition-all duration-500 leading-tight tracking-tight drop-shadow-lg ${
                isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-4"
              }`}
            >
              {text}
            </h1>
          </div>

          {/* Enhanced description text */}
          <p className="text-body leading-relaxed max-w-lg">
            Connect with skilled professionals who deliver quality work on time,
            every time.
          </p>
          <Link href="/get-a-quote">
            <Button>Request a quote</Button>
          </Link>
        </div>

        {/* Right side - Quote background image */}
        <div className="hidden md:flex items-center justify-center p-8">
          {/* Right side - Rotating Service Worker Images */}
          <div className="relative">
            <div className="relative z-10 transition-all duration-500 ease-in-out">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={400}
                height={500}
                className="w-full max-w-[350px] md:max-w-[400px] h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
