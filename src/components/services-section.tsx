import React, { useState } from "react";
import Icon from "./icon";


const services = [
  { title: "Inverter Repair & Install", icon: "inverter-repair", category: "Technical" },
  { title: "Fashion Designer", icon: "fashion-designer", category: "Creative" },
  { title: "Electrical Services", icon: "electrical-services", category: "Technical" },
  { title: "Hair Services", icon: "hair-services", category: "Beauty" },
  { title: "Generator Repair & Install", icon: "generator-repair", category: "Technical" },
  { title: "Laundry & Dry Cleaning", icon: "laundry-drycleaning", category: "Lifestyle" },
  { title: "Cleaning Services", icon: "cleaning-services", category: "Lifestyle" },
  { title: "Makeup Services", icon: "makeup-services", category: "Beauty" },
  { title: "Catering Services", icon: "catering-services", category: "Lifestyle" },
  { title: "Plumbing", icon: "plumbing", category: "Technical" },
];

const categories = ["All", "Technical", "Beauty", "Creative", "Lifestyle"];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredServices = activeCategory === "All" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Subtle floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-400/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-gray-800 via-blue-600 to-orange-500 bg-clip-text text-transparent mb-6 leading-tight">
              Our Services
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our premium range of professional services, crafted to exceed your expectations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-50/80 backdrop-blur-lg rounded-2xl p-2 border border-gray-200/50 shadow-lg">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
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
                <div className={`
                  relative h-40 rounded-2xl p-4 cursor-pointer
                  bg-white border border-gray-200
                  shadow-md
                  transition-all duration-300 transform
                  hover:scale-105 hover:shadow-lg
                  ${hoveredCard === index ? 'border-blue-300 shadow-blue-100' : ''}
                `}>

                  {/* Content */}
                  <div className="flex flex-col h-full justify-center items-center text-center">
                    {/* Icon container */}
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center
                      bg-blue-50 border border-blue-100
                      transition-all duration-300
                      ${hoveredCard === index ? 'bg-blue-100 border-blue-200' : ''}
                    `}>
                      <Icon 
                        name={service.icon} 
                        size="w-6 h-6" 
                        color="text-blue-600"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-semibold text-gray-800 leading-tight mt-3 mb-2">
                      {service.title}
                    </h3>

                    {/* Category tag */}
                    <div className="px-2 py-1 rounded-full bg-orange-50 border border-orange-100">
                      <span className="text-xs text-orange-600 font-medium">
                        {service.category}
                      </span>
                    </div>
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
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}