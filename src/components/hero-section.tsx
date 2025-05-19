import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="heroBackground w-full min-h-screen">
      <main className="flex flex-col items-center text-center px-4 pt-6">
        <Image
          src="/images/snapwork-logo.svg"
          alt="Snapwork Logo"
          width={250}
          height={250}
        />
        <div className="mt-20 text-darkblue">
          <h3 className="text-5xl md:text-6xl font-bold leading-tight">
            One Platform, <br />
            All your services
          </h3>
          <p className="mt-10 text-md md:text-2xl font-medium">
            Easily get matched with trusted <br />
            professionals whether you need
          </p>

          <div className="flex justify-center mt-6">
            <Button variant="primary">Book Now</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
