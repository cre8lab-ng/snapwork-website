// import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

// const rotatingWords = [
//   { text: "Cleaners"},
//   { text: "Plumbers" },
//   { text: "Electricians" },
//   { text: "Painters" },
//   { text: "Tailors" },
// ];

export default function GetAQuote() {
  // const [index, setIndex] = useState(0);
  // const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsVisible(false);
  //     setTimeout(() => {
  //       setIndex((i) => (i + 1) % rotatingWords.length);
  //       setIsVisible(true);
  //     }, 300);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  // const { text } = rotatingWords[index];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 spiral-edges overflow-hidden relative">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.06),transparent_50%)] pointer-events-none"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-purple-200/40 rounded-lg rotate-45 animate-float" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-40 left-20 w-8 h-8 bg-indigo-200/50 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 right-40 w-20 h-20 bg-orange-200/20 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>

      <div className="grid md:grid-cols-2 items-center max-w-full relative z-10">
        <div className="space-y-10 px-4 md:px-20 pt-48 md:pt-40 lg:pt-20 pb-12 md:pb-0">
          {/* Enhanced intro text with animated underline */}
          <div className="relative">
            <p className="text-xl md:text-2xl font-medium text-darkblue/70 tracking-wide leading-relaxed mb-2">
              Dependable partners for every business need from
            </p>
          </div>

          {/* Enhanced main heading with smooth transitions and color changes */}
          {/* <div className="relative">
            <h2 className={`text-darkblue text-5xl md:text-8xl font-black transition-all duration-500 leading-tight tracking-tight drop-shadow-lg  ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
              {text}
            </h2>
           
          </div> */}

          {/* Enhanced description text */}
          <p className="text-lg md:text-xl text-darkblue/60 leading-relaxed max-w-lg">
            Connect with skilled professionals who deliver quality work on time, every time. 
            <span className="font-semibold text-darkblue/80"> Get your free quote today!</span>
          </p>

         
            <Button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10">Request a Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
           
          

        </div>

        <div className="mt-8 md:mt-24 flex justify-end overflow-visible -mr-2 md:-mr-4 relative">
          {/* Enhanced phone image with better positioning and effects */}
          <div className="relative">
            <Image
              src="/images/hand-phone.svg"
              alt="Phone in hand"
              width={500}
              height={500}
              className="h-auto w-full max-w-[400px] md:max-w-[500px] animate-float rotate-6 ml-16 md:ml-24 translate-x-4 md:translate-x-8 drop-shadow-2xl"
            />
            {/* Glowing effect behind phone */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl scale-150 -z-10"></div>
          </div>
          
          {/* Floating notification badges */}
          <div className="absolute top-20 left-10 bg-white rounded-lg shadow-lg p-3 animate-float border border-blue-100" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-darkblue">Available Now</span>
            </div>
          </div>
          
          <div className="absolute bottom-32 left-0 bg-white rounded-lg shadow-lg p-3 animate-float border border-purple-100" style={{animationDelay: '0.8s'}}>
             <div className="text-xs text-darkblue/60">Quick Response</div>
             <div className="text-sm font-semibold text-darkblue">&lt; 2 hours</div>
           </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/20 to-transparent"></div>
    </section>
  );
}
