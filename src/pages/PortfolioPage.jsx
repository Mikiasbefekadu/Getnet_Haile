import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PortfolioTabs from "../components/ui/PortfolioTabs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import worksData from "../data/worksData";

// 🔑 Define all categories here (include all from PortfolioTabs)
const allServices = [
  "All",
  "Corporate Video Production",
  "Commercials & Ads",
  "Event Coverage & Live Streaming",
  "Documentaries & Narrative Films",
  "Creative Services",
  "Photography",
  "Post Production",
  "Animation & Motion Graphics",
  "Others", // add more if your tabs have them
];

export default function PortfolioPage() {
  const [selectedService, setSelectedService] = useState("All");
  const navigate = useNavigate();

  const safeWorksData = Array.isArray(worksData) ? worksData : [];

  const filteredWorks =
    selectedService === "All"
      ? safeWorksData
      : safeWorksData.filter((work) => work.service === selectedService);

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#040d1c] text-white relative overflow-hidden">
      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] rounded-full bg-[#013998] opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] md:w-[500px] h-[250px] sm:h-[400px] md:h-[500px] rounded-full bg-[#013998] opacity-40 blur-2xl"></div>
      </div>

      {/* Header */}
      <motion.div
        className="pt-28 sm:pt-32 pb-12 sm:pb-20 relative z-10 text-center px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-yellow-500 mb-4">
          Portfolio
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Explore our projects by category. Click a card to see full details.
        </p>
      </motion.div>

      {/* Tabs (desktop) */}
      <div className="relative z-10 hidden md:block">
        <PortfolioTabs
          selectedService={selectedService}
          setSelectedService={setSelectedService}
          services={allServices} // 🔑 pass down the same services
        />
      </div>

      {/* Dropdown (tablet + mobile) */}
      <div className="relative z-10 md:hidden px-4 sm:px-6 mb-6">
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="w-full px-4 py-2 bg-[#02132e] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#013998]"
        >
          {allServices.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Works Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredWorks.length > 0 ? (
          filteredWorks.map((work) => (
            <motion.div
              key={work.id}
              className="bg-black rounded-xl shadow-lg cursor-pointer overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700"
              whileHover={{ y: -5 }}
              onClick={() => navigate(`/portfolio/${work.id}`)}
            >
              <img
                src={work.image || "/fallback.jpg"}
                alt={work.title || "Portfolio project"}
                className="w-full h-40 sm:h-48 md:h-56 object-cover"
              />
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-semibold text-yellow-500 mb-1 sm:mb-2">
                  {work.title || "Untitled Project"}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  {work.description || "No description available."}
                </p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-400 col-span-full text-center">
            No projects found for this category.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}
