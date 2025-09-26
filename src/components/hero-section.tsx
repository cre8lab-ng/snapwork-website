import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen">
      <main className="flex flex-col items-center text-center px-10 pt-6">
        <div className="relative w-full">
          <Image
            src="/images/hero-illustration-workers.svg"
            alt="Snapwork Logo"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-26 text-center px-4 text-white">
            <h3 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
              One Platform, <br />
              All your services
            </h3>
            <p className="mt-10 text-md md:text-2xl font-medium drop-shadow-lg">
              Easily get matched with trusted <br />
              professionals whether you need
            </p>

            <div className="flex justify-center mt-6 cursor-pointer">
              <a
                href="https://book-snapwork.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block"
              >
                <Button variant="secondary" size="lg">
                  Book Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
