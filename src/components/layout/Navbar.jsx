import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Contact", to: "/contact" },
    // { name: "Services", to: "#services" },
  ];

  return (
    <nav className="fixed top-5 left-0 w-full flex justify-center z-50">
      <div className="w-[95%] backdrop-blur-lg border border-[rgb(23,97,126)] shadow-md rounded-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            className="!text-white text-[clamp(1rem,2vw,1.5rem)] font-bold tracking-wide flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            🎬 Getnet Haile Films
          </motion.a>

          {/* Desktop Menu */}
          <motion.ul
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {navItems.map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={item.to}
                  className="!text-white font-medium relative group text-[clamp(0.9rem,1.5vw,1.1rem)]"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[rgb(23,97,126)] transition-all group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden bg-transparent p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} color="rgb(23,97,126)" />
            ) : (
              <Menu size={28} color="rgb(23,97,126)" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col items-center space-y-4 py-4 md:hidden"
          >
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.to}
                  className="text-white text-[clamp(1rem,2.5vw,1.2rem)] font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </nav>
  );
}
