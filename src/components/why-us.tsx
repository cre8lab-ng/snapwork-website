import Image from "next/image";
import SectionHeader from "./section-header";

const reasons = [
  {
    title: "Reliable Experts",
    description:
      "From home fixes to corporate needs, our verified experts deliver reliable results, done right the first time.",
    image: "/images/reliable-expert.svg",
    alt: "Reliable Experts Image",
    bgColor: "bg-lightblue-200",
  },
  {
    title: "Hassle-Free Booking",
    description:
      "Skip the calls and endless searching, book instantly with Snapwork.",
    image: "/images/hasslefree-booking.svg",
    alt: "Booking App Image",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear quotes, no surprises, see transparent pricing upfront before you confirm any booking or payment.",
    image: "/images/transparent-pricing.svg",
    alt: "Transparent Pricing Image",
    bgColor: "bg-lightblue-200",
  },
];

export default function WhyUs() {
  return (
    <section className="px-4 mb-28">
      <SectionHeader
        title="Why Us?"
        subtitle="Your go-to platform for trusted providers, fair prices, and services done right the first time."
        animated={true}
        showUnderline={true}
      />
 
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
  {reasons.map((reason, index) => {
    // Different animation patterns for each card
    const animationClass = [
      'animate-float-bounce',      // Card 0: Floating with bounce
      'animate-wiggle-rotate',     // Card 1: Wiggle and rotate
      'animate-pulse-scale',       // Card 2: Pulsing scale
      'animate-swing-pendulum',    // Card 3: Pendulum swing
      'animate-wave-motion',       // Card 4: Wave-like motion
      'animate-spiral-dance'       // Card 5: Spiral dance
    ][index % 6];

    return (
      <div
        key={index}
        className={`rounded-[20px] p-2 h-[420px] text-center transform transition-all duration-500 hover:scale-110 hover:shadow-2xl cursor-pointer ${reason.bgColor} ${animationClass}`}
        style={{
          animationDelay: `${index * 300}ms`,
          animationDuration: `${3 + (index % 3)}s`,
        }}
      >
        {/* Animated image container */}
        <div className="w-full h-[140px] relative mb-6 mx-auto">
          <div className="w-full mb-8">
            <div className={`w-full h-[180px] mb-6 relative animate-image-${index % 4}`}>
              <Image
                src={reason.image}
                alt={reason.alt}
                fill
                className="object-contain w-full h-full filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
              />
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-darkblue mt-16 mb-4 animate-text-glow">
          {reason.title}
        </h3>
        <p className="text-base text-dark mt-3 leading-relaxed animate-text-fade">
          {reason.description}
        </p>
      </div>
    );
  })}
</div>
      
    <style jsx>{`
  /* Card Animation 1: Float and Bounce */
  @keyframes float-bounce {
    0%, 100% { 
      transform: translateY(0px) rotate(-2deg) scale(1);
    }
    25% { 
      transform: translateY(-8px) rotate(-3deg) scale(1.02);
    }
    50% { 
      transform: translateY(-15px) rotate(-1deg) scale(1.05);
    }
    75% { 
      transform: translateY(-8px) rotate(-3deg) scale(1.02);
    }
  }
  .animate-float-bounce {
    animation: float-bounce 4s ease-in-out infinite;
  }

  /* Card Animation 2: Wiggle and Rotate */
  @keyframes wiggle-rotate {
    0% { 
      transform: rotate(2deg) translateX(0px);
    }
    10% { 
      transform: rotate(4deg) translateX(2px);
    }
    20% { 
      transform: rotate(1deg) translateX(-1px);
    }
    30% { 
      transform: rotate(5deg) translateX(3px);
    }
    40% { 
      transform: rotate(0deg) translateX(-2px);
    }
    50% { 
      transform: rotate(3deg) translateX(1px);
    }
    60% { 
      transform: rotate(-1deg) translateX(-3px);
    }
    70% { 
      transform: rotate(4deg) translateX(2px);
    }
    80% { 
      transform: rotate(1deg) translateX(-1px);
    }
    90% { 
      transform: rotate(2deg) translateX(1px);
    }
    100% { 
      transform: rotate(2deg) translateX(0px);
    }
  }
  .animate-wiggle-rotate {
    animation: wiggle-rotate 3s ease-in-out infinite;
  }

  /* Card Animation 3: Pulse Scale */
  @keyframes pulse-scale {
    0%, 100% { 
      transform: scale(1) rotate(-2deg);
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    50% { 
      transform: scale(1.08) rotate(2deg);
      box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    }
  }
  .animate-pulse-scale {
    animation: pulse-scale 3.5s ease-in-out infinite;
  }

  /* Card Animation 4: Pendulum Swing */
  @keyframes swing-pendulum {
    0%, 100% { 
      transform: rotate(2deg) translateY(0px);
    }
    25% { 
      transform: rotate(-4deg) translateY(-5px);
    }
    50% { 
      transform: rotate(6deg) translateY(0px);
    }
    75% { 
      transform: rotate(-3deg) translateY(-3px);
    }
  }
  .animate-swing-pendulum {
    animation: swing-pendulum 4.5s ease-in-out infinite;
    transform-origin: top center;
  }

  /* Card Animation 5: Wave Motion */
  @keyframes wave-motion {
    0%, 100% { 
      transform: translateY(0px) translateX(0px) rotate(-2deg);
    }
    25% { 
      transform: translateY(-10px) translateX(5px) rotate(1deg);
    }
    50% { 
      transform: translateY(5px) translateX(-3px) rotate(-3deg);
    }
    75% { 
      transform: translateY(-5px) translateX(7px) rotate(2deg);
    }
  }
  .animate-wave-motion {
    animation: wave-motion 5s ease-in-out infinite;
  }

  /* Card Animation 6: Spiral Dance */
  @keyframes spiral-dance {
    0% { 
      transform: rotate(2deg) scale(1) translateY(0px);
    }
    16% { 
      transform: rotate(15deg) scale(1.03) translateY(-3px);
    }
    33% { 
      transform: rotate(-10deg) scale(0.98) translateY(2px);
    }
    50% { 
      transform: rotate(20deg) scale(1.05) translateY(-5px);
    }
    66% { 
      transform: rotate(-15deg) scale(0.97) translateY(3px);
    }
    83% { 
      transform: rotate(8deg) scale(1.02) translateY(-2px);
    }
    100% { 
      transform: rotate(2deg) scale(1) translateY(0px);
    }
  }
  .animate-spiral-dance {
    animation: spiral-dance 6s ease-in-out infinite;
  }

  /* Image Animations */
  @keyframes image-0 {
    0%, 100% { transform: rotateY(0deg) scale(1); }
    50% { transform: rotateY(15deg) scale(1.1); }
  }
  .animate-image-0 {
    animation: image-0 2s ease-in-out infinite;
  }

  @keyframes image-1 {
    0%, 100% { transform: rotateX(0deg); }
    50% { transform: rotateX(10deg); }
  }
  .animate-image-1 {
    animation: image-1 2.5s ease-in-out infinite;
  }

  @keyframes image-2 {
    0%, 100% { transform: rotate(0deg) scale(1); }
    25% { transform: rotate(5deg) scale(1.05); }
    75% { transform: rotate(-5deg) scale(1.05); }
  }
  .animate-image-2 {
    animation: image-2 3s ease-in-out infinite;
  }

  @keyframes image-3 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-5px) rotate(3deg); }
  }
  .animate-image-3 {
    animation: image-3 2.2s ease-in-out infinite;
  }

  /* Text Animations */
  @keyframes text-glow {
    0%, 100% { 
      color: #0D2B7C;
      text-shadow: none;
    }
    50% { 
      color: #1e40af;
      text-shadow: 0 0 10px rgba(29, 64, 175, 0.3);
    }
  }
  .animate-text-glow {
    animation: text-glow 3s ease-in-out infinite;
  }

  @keyframes text-fade {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
  }
  .animate-text-fade {
    animation: text-fade 4s ease-in-out infinite;
  }

  /* Hover effects enhancement */
  .grid > div:hover {
    animation-play-state: paused;
    z-index: 10;
  }
`}</style>
    </section>
  );
}