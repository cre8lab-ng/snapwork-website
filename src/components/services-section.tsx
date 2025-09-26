import React, { useState } from "react";
import Icon from "./icon";
import { Button } from "./ui/button";
import SectionHeader from "./section-header";

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
      <div className="relative z-10 pt-12 px-4">
        {/* Hero Section */}
        <SectionHeader
          title="Our Services"
          subtitle="Discover our premium range of professional services, crafted to exceed your expectations"
          animated={true}
        />

        {/* Category Filter */}
        <div className="flex justify-center mb-16">
          <div className="backdrop-blur-lg rounded-2xl p-2 border shadow-lg bg-gray-100 border-lightblue-200">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category
                      ? "text-white  bg-gradient-to-r from-blue-500 to-darkblue shadow-[0_10px_25px_rgba(20,39,94,0.25)]"
                      : "text-darkblue bg-transparent hover:text-blue-600 "
                  }`}
                >
                  {category}
                </Button>
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
                  border bg-[#F5F9FF]
                  transition-all duration-300 transform
                  hover:scale-105
                  ${
                    hoveredCard === index
                      ? "border-blue-400 shadow-[0_10px_25px_rgba(175,209,250,0.3)]"
                      : "border-lightblue-200 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
                  }
                `}
                >
                  {/* Content */}
                  <div className="flex flex-col h-full justify-center items-center text-center">
                    {/* Icon container */}
                    <div
                      className={`
                      w-10 h-10 rounded-lg flex items-center justify-center
                      transition-all duration-300 mt-4
                      ${
                        hoveredCard === index
                          ? "bg-transparent"
                          : "bg-lightblue-100"
                      }
                    `}
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
    </div>
  );
}
