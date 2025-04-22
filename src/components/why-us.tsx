import Image from "next/image";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function WhyUs() {
  const serviceProviders = [
    {
      name: "Tailor",
      image: "/tailor.svg",
      alt: "A tailor cutting fabric with scissors",
    },
    {
      name: "Electrician",
      image: "/electrician.svg",
      alt: "An electrician working with wires and tools",
    },
    {
      name: "Painter",
      image: "/painter.svg",
      alt: "A painter applying paint to a wall with a roller",
    },
    {
      name: "Bricklayer",
      image: "/bricklayer.svg",
      alt: "A bricklayer laying bricks to build a wall",
    },
    {
      name: "Cleaner",
      image: "/cleaner.svg",
      alt: "A cleaner tidying up a room with cleaning supplies",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProvider = serviceProviders[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % serviceProviders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [serviceProviders.length]);

  return (
    <>
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-xl">
            <div className="w-full h-48 mb-6">
              <Image
                src="/sample-1.svg"
                alt="Reliable Expert"
                width={500}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl text-blue-300 font-bold mb-4">
              Reliable Experts at Your Fingertips
            </h3>
            <p className="text-blue-300 mb-6">
              We connect you with trusted professionals who show up on time and
              get the job done right, whether it&apos;s plumbing, electrical work, or
              general home services.
            </p>
            <Button variant="primary">Book Now</Button>
          </div>

          <div className="p-6 rounded-xl">
            <div className="w-full h-48 mb-6">
              <Image
                src="/sample-2.svg"
                alt="Hassle-Free Booking"
                width={500}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl text-blue-300 font-bold mb-4">
              Hassle-Free Booking at Your Fingertips
            </h3>
            <p className="text-blue-300 mb-6">
              Booking a service is easy. No long calls or confusing steps, just
              a few clicks to find the right expert and get things fixed without
              stress or delays.
            </p>
            <Button variant="primary">Book Now</Button>
          </div>

          <div className="p-6 rounded-xl">
            <div className="w-full h-48 mb-6">
              <Image
                src="/sample-3.svg"
                alt="Transparent Pricing"
                width={500}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl text-blue-300 font-bold mb-4">
              Transparent Pricing, No Surprises
            </h3>
            <p className="text-blue-300 mb-6">
              We show you the price upfront. No hidden charges or extra fees,
              just honest, clear pricing so you always know what to expect
              before work even begins.
            </p>
            <Button variant="primary">Book Now</Button>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-between items-center py-16 px-6 md:px-16 w-full gap-8">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-blue-300 mb-4">
            Need Help With Something?
          </h2>
          <p className="text-blue-300 mb-4 text-xl">
            Easily get matched with trusted professionals
            <br />
            whether you need
            <span className="text-blue-100 font-semibold">
              {" "}
              {currentProvider.name}
            </span>
            <br />
            for as low as 3k
          </p>
          <Button>Book now</Button>
        </div>
        <div className="flex-1">
          <Image
            src={currentProvider.image}
            alt={currentProvider.alt}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>
    </>
  );
}
