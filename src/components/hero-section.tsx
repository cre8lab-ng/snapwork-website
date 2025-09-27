import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full">
      <main className="flex flex-col items-center text-center px-4 sm:px-6 md:px-10 pt-4 sm:pt-6">
        <div className="relative w-full">
          <Image
            src="/images/hero-illustration-workers.svg"
            alt="Hero Illustration Workers"
            width={800}
            height={600}
            className="w-full rounded-lg h-96 sm:h-screen md:h-screen lg:h-auto object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 sm:pt-16 md:pt-20 lg:pt-26 text-center px-2 sm:px-4 text-white">
            <h1 className="text-hero  mb-4 sm:mb-6 md:mb-8 text-white">
              One Platform, <br />
              All your services
            </h1>
            <p className="text-subtitle max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl text-white">
              Easily get matched with trusted <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>professionals whether you need
            </p>

            <div className="flex justify-center mt-4 sm:mt-6 cursor-pointer">
              <a
                href="https://book-snapwork.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3"
                >
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
