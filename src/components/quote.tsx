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
    <section
      className="w-full min-h-screen bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/images/quote-bg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid md:grid-cols-2 items-center">
        <div className="space-y-6 px-20 pt-40 lg:pt-12">
          <p className="text-3xl font-medium text-darkblue">
            Does your business need <br />
            reliable partners like
          </p>

          <h2 className="text-7xl font-bold text-[#162B7D] transition-all duration-500">
            {text}
            <div className="mt-2">
              <Icon name="underline" color={color} key={text}/>
            </div>
          </h2>

          <p className="text-2xl text-darkblue">we’ve got you covered</p>

          <Button className="bg-darkblue text-blue-200 rounded-xl p-3">
            Get a quote
          </Button>
        </div>

        <div className="mt-12 md:mt-0 flex justify-end">
        <Image
            src="/images/hand-phone.svg"
            alt="Phone in hand"
            width={400}
            height={400}
            className="h-auto max-w-[90%] md:max-w-none md:w-auto md:translate-x-8"
          />
        </div>
      </div>
    </section>
  );
}
