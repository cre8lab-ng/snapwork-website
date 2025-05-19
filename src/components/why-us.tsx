import Image from "next/image";
import Icon from "./icon";

const reasons = [
  {
    title: "Reliable Experts",
    description:
      "From plumbing to electrical repairs, our verified experts get the job done right the first time.",
    image: "/images/reliable-expert.svg",
    alt: "Reliable Experts Image",
    bgColor: "bg-lightblue-200",
  },
  {
    title: "Hassle-Free Booking",
    description:
      "Booking a service is easy—skip the long calls. Just a few clicks to find help and fix things fast.",
    image: "/images/hasslefree-booking.svg",
    alt: "Booking App Image",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Hassle-Free Booking",
    description:
      "Booking a service is easy—skip the long calls. Just a few clicks to find help and fix things fast.",
    image: "/images/transparent-pricing.svg",
    alt: "Guy Booking Image",
    bgColor: "bg-lightblue-200",
  },
  {
    title: "Transparent Pricing",
    description:
      "We show prices upfront—no hidden fees. Just clear, honest pricing so you know what to expect before work begins.",
    image: "/images/transparent-pricing2.svg",
    alt: "Pricing Chart Image",
    bgColor: "bg-amber-100",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-6xl font-bold text-center text-white">Why Us?</h2>
      <div className="flex justify-center mb-10">
      <Icon name="underline" color="stroke-orange-100" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`rounded-[16px] p-6 h-[340px] text-center transform transition duration-300 ${reason.bgColor}`}
            style={{ rotate: index % 2 === 0 ? "-2deg" : "2deg" }}
          >
            <div className="w-full h-[120px] relative mb-4 mx-auto">
              <div className="w-full mb-8">
                <div className="w-full h-[180px] mb-6 relative">
                  <Image
                    src={reason.image}
                    alt={reason.alt}
                    fill
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#0D2B7C] mt-20">{reason.title}</h3>
            <p className="text-sm text-gray-700 mt-2">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
