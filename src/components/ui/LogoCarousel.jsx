// src/components/ui/LogoCarousel.jsx
import { motion } from "framer-motion";

const logos = [
  "src/assets/LogoCarousel/medroc-removebg-preview.png",
  "src/assets/LogoCarousel/rescue-removebg-preview.png",
  "src/assets/LogoCarousel/office-removebg-preview.png",
  "src/assets/LogoCarousel/black-removebg-preview.png",
  "src/assets/LogoCarousel/mayor-removebg-preview.png",
  "src/assets/LogoCarousel/AMN-removebg-preview.png",
  "src/assets/LogoCarousel/walta-removebg-preview.png",
]; // replace with your client logos

export default function LogoCarousel() {
  return (
    <div className="w-full overflow-hidden bg-transparent py-10">
      <motion.div
        className="flex gap-16"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {/* Duplicate logos so it loops seamlessly */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={logo}
              alt={`client-logo-${index}`}
              className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
