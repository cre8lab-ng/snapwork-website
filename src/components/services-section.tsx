import React, { useState } from "react";
import Icon from "./icon";

const services = [
  {
    title: "Inverter Repair & Install",
    icon: "inverter-repair",
    category: "Technical",
  },
  { title: "Fashion Designer", icon: "fashion-designer", category: "Creative" },
  {
    title: "Electrical Services",
    icon: "electrical-services",
    category: "Technical",
  },
  { title: "Hair Services", icon: "hair-services", category: "Beauty" },
  {
    title: "Generator Repair & Install",
    icon: "generator-repair",
    category: "Technical",
  },
  {
    title: "Laundry & Dry Cleaning",
    icon: "laundry-drycleaning",
    category: "Lifestyle",
  },
  {
    title: "Cleaning Services",
    icon: "cleaning-services",
    category: "Lifestyle",
  },
  { title: "Makeup Services", icon: "makeup-services", category: "Beauty" },
  {
    title: "Catering Services",
    icon: "catering-services",
    category: "Lifestyle",
  },
  { title: "Plumbing", icon: "plumbing", category: "Technical" },
];

const categories = ["All", "Technical", "Beauty", "Creative", "Lifestyle"];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 py-20 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight drop-shadow-lg text-darkblue">
              Our Services
            </h3>
            <div className="flex justify-center mb-4">
              <div className="wavy-animation">
                <Icon name="underline" color="stroke-orange-100" />
              </div>
            </div>
            <style jsx>{`
              .wavy-animation {
                animation: wavy 2s ease-in-out infinite;
              }

              @keyframes wavy {
                0%,
                100% {
                  transform: translateX(0) rotate(0deg);
                }
                25% {
                  transform: translateX(10px) rotate(5deg);
                }
                50% {
                  transform: translateX(0) rotate(0deg);
                }
                75% {
                  transform: translateX(-10px) rotate(-5deg);
                }
              }
            `}</style>
          </div>

          <p className="text-center mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium  max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl text-darkblue">
            Discover our premium range of professional services, crafted to
            exceed your expectations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-16">
          <div className="backdrop-blur-lg rounded-2xl p-2 border shadow-lg bg-gray-100 border-lightblue-200">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={` px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category
                      ? "text-white shadow-lg"
                      : "hover:text-blue-600 "
                  }`}
                  style={
                    activeCategory === category
                      ? {
                          background: `linear-gradient(to right, var(--color-blue-500), var(--color-darkblue))`,
                          boxShadow: "0 10px 25px rgba(20, 39, 94, 0.25)",
                        }
                      : {
                          color: "var(--color-darkblue)",
                          backgroundColor: "transparent",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (activeCategory !== category) {
                      e.currentTarget.style.backgroundColor =
                        "var(--color-lightblue-100)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== category) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div
                  className={`
                  relative h-40 rounded-2xl p-4 cursor-pointer
                  border
                  shadow-md
                  transition-all duration-300 transform
                  hover:scale-105 hover:shadow-lg
                `}
                  style={{
                    backgroundColor: "#F5F9FF",
                    borderColor:
                      hoveredCard === index
                        ? "var(--color-blue-400)"
                        : "var(--color-lightblue-200)",
                    boxShadow:
                      hoveredCard === index
                        ? "0 10px 25px rgba(175, 209, 250, 0.3)"
                        : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  {/* Content */}
                  <div className="flex flex-col h-full justify-center items-center text-center">
                    {/* Icon container */}
                    <div
                      className={`
                      w-10 h-10 rounded-lg flex items-center justify-center
                      border transition-all duration-300 mt-4
                    `}
                      style={{
                        backgroundColor:
                          hoveredCard === index
                            ? "var(--color-lightblue-200)"
                            : "var(--color-lightblue-100)",
                        borderColor:
                          hoveredCard === index
                            ? "var(--color-blue-400)"
                            : "var(--color-lightblue-200)",
                      }}
                    >
                      <Icon name={service.icon} size="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold leading-tight mt-6 mb-2 text-darkblue">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white/20 rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
