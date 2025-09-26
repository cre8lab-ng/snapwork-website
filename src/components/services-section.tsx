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
      {/* Subtle floating elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 -left-20 w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: "var(--color-darkblue)", opacity: 0.15 }}
        ></div>
        <div 
          className="absolute top-40 -right-20 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ backgroundColor: "var(--color-orange-100)", opacity: 0.08 }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full blur-3xl animate-pulse delay-2000"
          style={{ backgroundColor: "var(--color-blue-300)", opacity: 0.12 }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-6xl font-bold text-center text-darkblue">
              Our Services
            </h2>
            <div className="flex justify-center mb-10">
              <Icon name="underline" color="stroke-orange-100" />
            </div>
           
          </div>
          <p
            className="text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--color-blue-300)" }}
          >
            Discover our premium range of professional services, crafted to
            exceed your expectations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-16">
          <div
            className="backdrop-blur-lg rounded-2xl p-2 border shadow-lg"
            style={{
              backgroundColor: "var(--color-gray-100)",
              borderColor: "var(--color-lightblue-200)",
            }}
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category
                      ? "text-white shadow-lg"
                      : "hover:text-blue-600"
                  }`}
                  style={
                    activeCategory === category
                      ? {
                          background: `linear-gradient(to right, var(--color-blue-500), var(--color-darkblue))`,
                          boxShadow: "0 10px 25px rgba(20, 39, 94, 0.25)",
                        }
                      : {
                          color: "var(--color-blue-300)",
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
                  bg-white border
                  shadow-md
                  transition-all duration-300 transform
                  hover:scale-105 hover:shadow-lg
                `}
                  style={{
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
                      border transition-all duration-300
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
                      <Icon
                        name={service.icon}
                        size="w-6 h-6"
                        color="text-blue-600"
                        style={{ color: "var(--color-blue-500)" }}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-sm font-semibold leading-tight mt-3 mb-2"
                      style={{ color: "var(--color-blue-300)" }}
                    >
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
