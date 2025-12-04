// src/components/ui/PortfolioTabs.jsx
import React from "react";

const services = [
  "All",
  // "Corporate Video Production",
  "Commercials & Ads",
  "Event Coverage & Live Streaming",
  "Documentaries & Narrative Films",
  // "Creative Services",
];

export default function PortfolioTabs({ selectedService, setSelectedService }) {
  return (
    <div className="px-6 py-4">
      {/* Use justify-around to spread evenly */}
      <div className="flex flex-wrap justify-around gap-4">
        {services.map((service) => {
          const isActive = selectedService === service;
          return (
            <button
              key={service}
              onClick={() => setSelectedService(service)}
              className={`px-4 py-2 rounded-md text-lg font-medium transition-all duration-300
                ${isActive
                  ? "text-yellow-500 !bg-black"
                  : "text-white !bg-black hover:bg-gray-800 hover:scale-105"}
              `}
            >
              {service}
            </button>
          );
        })}
      </div>
    </div>
  );
}
