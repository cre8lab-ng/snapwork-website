import { Button } from "./ui/button";
import Image from "next/image";
import SectionHeader from "./section-header";

const steps = [
  {
    number: "1",
    title: "Click \"Book Now\" and head over to our web app"
  },
  {
    number: "2", 
    title: "Tell us where you're booking from"
  },
  {
    number: "3",
    title: "Select the type of services you want, any extra tasks and the frequency of service"
  },
  {
    number: "4",
    title: "Make payment and wait for our confirmation email containing your booking details"
  }
];

export default function HowToBook() {
  return (
    <section id="how-to-book" className="section-spacing bg-blue-50 relative overflow-hidden">
      <div className="px-4">
        <SectionHeader
          title="How to book"
          subtitle="Booking on Snapwork is simple and straightforward! Get started in these four easy steps"
          animated={true}
          showUnderline={true}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto px-4">
        {/* Steps Content */}
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-darkblue text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                {step.number}
              </div>
              <p className="text-body leading-relaxed pt-2 group-hover:text-darkblue transition-colors duration-300">
                {step.title}
              </p>
            </div>
          ))}

          <div className="pt-6">
            <a
              href="https://book-snapwork.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-darkblue hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Book Now
              </Button>
            </a>
          </div>
        </div>

        {/* Image Section - Breaking out of container */}
        <div className="relative md:absolute md:right-0 md:top-3/4 md:-translate-y-1/2 md:w-1/2">
          <div className="flex justify-end">
            <Image
              src="/images/hand-phone.svg"
              alt="Phone in hand showing booking interface"
              width={400}
              height={400}
              className="h-auto w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px] animate-float drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
