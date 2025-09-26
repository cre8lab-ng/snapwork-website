import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Icon from "./icon";
import Image from "next/image";

const rotatingWords = [
  { text: "Cleaners", color: "stroke-orange-300" },
  { text: "Plumbers", color: "stroke-blue-400" },
  { text: "Electricians", color: "stroke-green-500" },
];

export default function Quote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const { text, color } = rotatingWords[index];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 spiral-edges overflow-hidden">
      <div className="grid md:grid-cols-2 items-center max-w-full">
        <div className="space-y-6 px-4 md:px-20 pt-40 lg:pt-12">
          <p className="text-3xl font-medium text-darkblue">
            Dependable partners for every business need from{" "}
          </p>

          <h2 className="text-4xl md:text-7xl font-bold text-[#162B7D] transition-all duration-500">
            {text}
            <div className="mt-2">
              <Icon name="underline" color={color} key={text} />
            </div>
          </h2>

          <p className="text-2xl text-darkblue">you can trust.</p>

          <Button>Request a Quote.</Button>
        </div>

        <div className="mt-12 md:mt-0 flex justify-end overflow-hidden">
          <Image
            src="/images/hand-phone.svg"
            alt="Phone in hand"
            width={400}
            height={400}
            className="h-auto w-full max-w-[300px] md:max-w-[400px] animate-float rotate-10"
          />
        </div>
      </div>
    </section>
  );
}
