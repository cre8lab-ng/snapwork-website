import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const rotatingWords = [
  { text: "Cleaners" },
  { text: "Plumbers" },
  { text: "Electricians" },
];

export default function Quote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const { text } = rotatingWords[index];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 spiral-edges overflow-hidden relative">
      {/* Add subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none"></div>

      <div className="grid md:grid-cols-2 items-center max-w-full relative z-10">
        <div className="space-y-8 px-4 md:px-20 pt-48 md:pt-40 lg:pt-16 pb-12 md:pb-0">
          {/* Enhanced intro text with better styling */}
          <p className="text-xl md:text-2xl font-medium text-darkblue/60 tracking-wide leading-relaxed">
            Dependable partners for every business need from
          </p>

          {/* Enhanced main heading with better visual hierarchy */}
          <h2 className="text-5xl md:text-8xl font-black text-darkblue transition-all duration-700 leading-tight tracking-tight drop-shadow-md">
            {text}
          </h2>

          {/* Enhanced button with better spacing and styling */}
          <div className="pt-4">
            <Button>Request a Quote</Button>
          </div>
        </div>

        <div className="mt-8 md:mt-24 flex justify-end overflow-visible -mr-2 md:-mr-4">
          <Image
            src="/images/hand-phone.svg"
            alt="Phone in hand"
            width={500}
            height={500}
            className="h-auto w-full max-w-[400px] md:max-w-[500px] animate-float rotate-10 ml-16 md:ml-24 translate-x-4 md:translate-x-8"
          />
        </div>
      </div>
    </section>
  );
}
