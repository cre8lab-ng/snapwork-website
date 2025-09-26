import React from "react";
import Icon from "./icon";

const services = [
  { title: "Inverter Repair & install", icon: "inverter-repair" },
  { title: "Plumbing", icon: "plumbing" },
  { title: "Generator Repair & install", icon: "generator-repair" },
  { title: "Makeup Services", icon: "makeup-services" },
  { title: "Laundry & Dry Cleaning", icon: "laundry-drycleaning" },
  { title: "Cleaning Services", icon: "cleaning-services" },
  { title: "Catering Services", icon: "catering-services" },
  { title: "Hair Services", icon: "hair-services" },
  { title: "Fashion Designer", icon: "fashion-designer" },
  { title: "Electrical Services", icon: "electrical-services" },
  { title: "Fashion Designer", icon: "fashion-designer" },
  { title: "Electrical Services", icon: "electrical-services" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <h2 className="text-6xl font-bold text-center">Our Services</h2>
      <div className="flex justify-center mb-10">
      <Icon name="underline" color="stroke-orange-100" />

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 px-4 max-w-6xl mx-auto">
      {services.map((service, index) => (
          <div
          key={index}
          className="bg-[#2A3D8F] rounded-xl px-6 py-6 flex items-center justify-between shadow-md w-full"
        >
          <div className="basis-[40%] flex justify-center">
            <Icon name={service.icon} />
          </div>
        
          <p className="basis-[40%] font-semibold text-lg leading-tight text-center">
            {service.title}
          </p>
        </div>
        
        ))}
      </div>
    </div>
  );
}
