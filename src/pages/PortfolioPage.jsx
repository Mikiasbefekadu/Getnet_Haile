// import { useState } from "react";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
// import PortfolioTabs from "../components/ui/PortfolioTabs";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import worksData from "../data/worksData";

// // 🔑 Define all categories here (include all from PortfolioTabs)
// const allServices = [
//   "All",
//   // "Corporate Video Production",
//   "Commercials & Ads",
//   "Event Coverage & Live Streaming",
//   "Documentaries & Narrative Films",
//   // "Creative Services",
//   // "Photography",
//   // "Post Production",
//   // "Animation & Motion Graphics",
//   // "Others",
// ];

// // 🧩 Separate component for each work card
// function WorkCard({ work, onClick }) {
//   const [isLoading, setIsLoading] = useState(true);

//   return (
//     <motion.div
//       key={work.id}
//       className="bg-black rounded-xl shadow-lg cursor-pointer overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700"
//       whileHover={{ y: -5 }}
//       onClick={onClick}
//     >
//       <div className="relative w-full h-40 sm:h-48 md:h-56">
//         {/* Loader */}
//         {isLoading && (
//           <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
//             <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-yellow-500"></div>
//           </div>
//         )}

//         <img
//           src={work.image || "/fallback.jpg"}
//           alt={work.title || "Portfolio project"}
//           className={`w-full h-40 sm:h-48 md:h-56 object-cover transition-opacity duration-500 ${
//             isLoading ? "opacity-0" : "opacity-100"
//           }`}
//           onLoad={() => setIsLoading(false)}
//         />
//       </div>

//       <div className="p-4 sm:p-5">
//         <h3 className="text-base sm:text-lg font-semibold text-yellow-500 mb-1 sm:mb-2">
//           {work.title || "Untitled Project"}
//         </h3>
//         <p className="text-gray-300 text-xs sm:text-sm">
//           {work.description || "No description available."}
//         </p>
//       </div>
//     </motion.div>
//   );
// }

// export default function PortfolioPage() {
//   const [selectedService, setSelectedService] = useState("All");
//   const navigate = useNavigate();

//   const safeWorksData = Array.isArray(worksData) ? worksData : [];

//   const filteredWorks =
//     selectedService === "All"
//       ? safeWorksData
//       : safeWorksData.filter((work) => work.service === selectedService);

//   return (
//     <div className="min-h-screen w-full flex flex-col bg-[#040d1c] text-white relative">
//       <Navbar />

//       {/* Background */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] rounded-full bg-[#013998] opacity-70 blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] md:w-[500px] h-[250px] sm:h-[400px] md:h-[500px] rounded-full bg-[#013998] opacity-40 blur-2xl"></div>
//       </div>

//       {/* Header */}
//       <motion.div
//         className="pt-28 sm:pt-32 pb-12 sm:pb-20 relative z-10 text-center px-4"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
//           Portfolio
//         </h1>
//         <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
//           Explore our projects by category. Click a card to see full details.
//         </p>
//       </motion.div>

//       {/* Tabs (desktop) */}
//       <div className="relative z-10 hidden md:block">
//         <PortfolioTabs
//           selectedService={selectedService}
//           setSelectedService={setSelectedService}
//           services={allServices}
//         />
//       </div>

//       {/* Dropdown (tablet + mobile) */}
//       <div className="relative z-10 md:hidden px-4 sm:px-6 mb-6 w-full">
//         <select
//           value={selectedService}
//           onChange={(e) => setSelectedService(e.target.value)}
//           className="w-full px-4 py-2 bg-[#02132e] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#013998]"
//         >
//           {allServices.map((service) => (
//             <option key={service} value={service}>
//               {service}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Works Grid */}
//       <div className="relative z-10 w-full px-4 sm:px-6 py-8 sm:py-12 mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl mx-auto">
//           {filteredWorks.length > 0 ? (
//             filteredWorks.map((work) => (
//               <WorkCard
//                 key={work.id}
//                 work={work}
//                 onClick={() => navigate(`/portfolio/${work.id}`)}
//               />
//             ))
//           ) : (
//             <p className="text-gray-400 col-span-full text-center">
//               No projects found for this category.
//             </p>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }


import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import worksData from "../data/worksData";
import { Folder, Play, Camera, FileText, Sparkles } from "lucide-react";

const allServices = [
  "All",
  "Commercials & Ads",
  "Event Coverage & Live Streaming",
  "Documentaries & Narrative Films",
];

const serviceIcons = {
  "All": Folder,
  "Commercials & Ads": Play,
  "Event Coverage & Live Streaming": Camera,
  "Documentaries & Narrative Films": FileText,
};

function WorkCard({ work, onClick }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-[#0a1a2f]/60 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-white/5 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)]">
        <div className="relative w-full h-36 sm:h-48 overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 z-10">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-yellow-500"></div>
            </div>
          )}
          <img
            src={work.image || "/fallback.jpg"}
            alt={work.title || "Portfolio project"}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setIsLoading(false)}
          />
        </div>

        <div className="p-4 sm:p-6 text-left">
          <h3 className="text-base sm:text-lg font-semibold text-yellow-500 mb-1 sm:mb-2 group-hover:text-yellow-400 transition-colors duration-300">
            {work.title || "Untitled Project"}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
            {work.description || "No description available."}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

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

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] rounded-full bg-[#013998] opacity-20 blur-[80px] sm:blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[200px] sm:w-[400px] md:w-[500px] h-[200px] sm:h-[400px] md:h-[500px] rounded-full bg-[#013998] opacity-15 blur-[60px] sm:blur-[100px]"></div>
      </div>

      {/* Header */}
      <motion.div
        className="w-full pt-28 sm:pt-32 pb-10 sm:pb-16 text-center px-4 sm:px-6 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0a1a2f]/80 border border-yellow-500/30 mb-4 sm:mb-6"
        >
          <Folder className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
          <span className="text-yellow-500 text-xs sm:text-sm font-medium tracking-wide uppercase">
            Our Work
          </span>
        </motion.div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
          Our <span className="text-yellow-500">Portfolio</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0">
          Explore our projects by category. Click a card to see full details.
        </p>
      </motion.div>

      {/* Tabs (desktop) */}
      <div className="relative z-10 hidden md:flex justify-center px-4 sm:px-6 mb-8 sm:mb-10">
        <div className="inline-flex flex-wrap justify-center gap-2 sm:gap-3 bg-[#0a1a2f]/60 backdrop-blur-sm rounded-xl p-2 border border-white/5">
          {allServices.map((service) => {
            const Icon = serviceIcons[service] || Sparkles;
            const isActive = selectedService === service;
            return (
              <button
                key={service}
                onClick={() => setSelectedService(service)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-yellow-500 text-[#040d1c]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                {service}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dropdown (tablet + mobile) */}
      <div className="relative z-10 md:hidden px-4 sm:px-6 mb-6 w-full">
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="w-full px-4 py-3 bg-[#0a1a2f]/60 backdrop-blur-sm text-white text-sm rounded-xl border border-white/5 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
        >
          {allServices.map((service) => (
            <option key={service} value={service} className="bg-[#0a1a2f]">
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Works Grid */}
      <section className="relative z-10 w-full px-4 sm:px-6 lg:px-16 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {filteredWorks.length > 0 ? (
            filteredWorks.map((work) => (
              <WorkCard
                key={work.id}
                work={work}
                onClick={() => navigate(`/portfolio/${work.id}`)}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-12"
            >
              <p className="text-gray-400 text-sm sm:text-base">
                No projects found for this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}