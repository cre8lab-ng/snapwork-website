import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const rotatingWords = [
  { text: "Cleaners" },
  { text: "Plumbers" },
  { text: "Electricians" },
  { text: "Painters" },
  { text: "Tailors" },
];

export default function GetAQuote() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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

  const { text } = rotatingWords[index];

  return (
    <section className="w-full min-h-screen overflow-hidden relative">
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
            <span className="font-semibold text-darkblue/80">
              Get your free quote today!
            </span>
          </p>

          <Button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">Request a Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>

      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/20 to-transparent"></div>
    </section>
  );
}
