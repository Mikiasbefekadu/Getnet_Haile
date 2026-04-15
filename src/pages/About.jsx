import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LogoCarousel from "../components/ui/LogoCarousel";
import { Target, Eye, Lightbulb, Users, ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Getnet Haile",
      position: "Founder & Director",
      image: "https://res.cloudinary.com/dwxufxm7s/image/upload/v1764850951/Gech_result_btotit.webp",
    },
    {
      name: "Bereket Siefu",
      position: "Production Manager",
      image: "https://res.cloudinary.com/dwxufxm7s/image/upload/v1764850943/Beki_result_bdknam.webp",
    },
    {
      name: "Abdi Mohamed",
      position: "Marketing Manager",
      image: "https://res.cloudinary.com/dwxufxm7s/image/upload/v1764850941/Abdi_result_nz1tn0.webp",
    },
    {
      name: "Efirem Endasha",
      position: "Cinematography",
      image: "https://res.cloudinary.com/dwxufxm7s/image/upload/v1764850946/Efi_result_sv25ss.webp",
    },
    {
      name: "Eyuel Zerabruk",
      position: "Creative Director",
      image: "https://res.cloudinary.com/dwxufxm7s/image/upload/v1764850949/Eyu_result_dquw12.webp",
    },
    {
      name: "Yilmazer Birhanu",
      position: "Photographer",
      image: "https://res.cloudinary.com/dwxufxm7s/image/upload/v1764850954/Yilma_result_q1dzof.webp",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "At Gabi Films Production, our mission is to bring stories to life through the art of video and photo. We are dedicated to crafting high-quality, engaging, and impactful content that connects with audiences and drives results.",
      image: "https://res.cloudinary.com/dwxufxm7s/image/upload/v1764850800/Mission_result_jtwaht.webp",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "Our vision is to be the go-to partner for businesses and creators seeking high-quality video and photo content that tells powerful, authentic stories.",
      image: "https://res.cloudinary.com/dwxufxm7s/image/upload/v1764850802/Vision_result_wfmgm1.webp",
    },
    {
      icon: Lightbulb,
      title: "Our Approach",
      description: "We believe that the key to successful video and photo production lies in a meticulous, collaborative approach that prioritizes both creativity and precision.",
      image: "https://res.cloudinary.com/dwxufxm7s/image/upload/v1764850799/Approach_result_ctubj8.webp",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#040d1c] text-white relative overflow-hidden">
      <Navbar />

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] rounded-full bg-[#013998] opacity-20 blur-[80px] sm:blur-[120px]"></div>
        <div className="absolute bottom-1/3 left-0 w-[200px] sm:w-[400px] md:w-[500px] h-[200px] sm:h-[400px] md:h-[500px] rounded-full bg-[#013998] opacity-15 blur-[60px] sm:blur-[100px]"></div>
      </div>

      {/* Header */}
      <motion.div
        className="w-full pt-20 sm:pt-28 pb-10 sm:pb-16 text-center px-4 sm:px-6 relative z-10"
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
          <Users className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
          <span className="text-yellow-500 text-xs sm:text-sm font-medium tracking-wide uppercase">
            Who We Are
          </span>
        </motion.div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
          About <span className="text-yellow-500">Gabi Films</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0">
          Bringing stories to life through high-quality video and photography
        </p>
      </motion.div>

      {/* Values Section */}
      <section className="relative z-10 w-full px-4 sm:px-6 lg:px-16 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="h-full bg-[#0a1a2f]/60 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-white/5 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] relative">
                
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-yellow-500/0 via-yellow-500/20 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/0 to-transparent group-hover:via-yellow-500 transition-all duration-500"></div>

                {/* Image Container - Fixed to prevent cutting */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f] to-transparent z-10 opacity-60"></div>
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Floating Icon on Image */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#0a1a2f]/90 backdrop-blur-sm flex items-center justify-center border border-yellow-500/30 group-hover:scale-110 group-hover:border-yellow-500 group-hover:bg-yellow-500/20 transition-all duration-300 shadow-lg">
                    <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 relative z-10">
                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-yellow-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {value.description}
                  </p>
                  
                  {/* Animated Underline */}
                  <div className="mt-3 sm:mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-yellow-500 to-transparent transition-all duration-500 ease-out"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-16 relative z-10 bg-[#0a1a2f]/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0a1a2f]/80 border border-yellow-500/30 mb-3 sm:mb-4">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
              <span className="text-yellow-500 text-xs sm:text-sm font-medium tracking-wide uppercase">
                Our Team
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white">
              Meet the <span className="text-yellow-500">Creatives</span>
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                className="group relative cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="h-full bg-[#0a1a2f]/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/5 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] text-center relative overflow-hidden">
                  
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/10 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top Light */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-yellow-500/0 to-transparent group-hover:via-yellow-500 transition-all duration-500"></div>

                  {/* Image Container */}
                  <div className="relative inline-block mb-3 sm:mb-4">
                    <div className="absolute inset-0 rounded-full bg-yellow-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-full mx-auto border-2 border-yellow-500/50 group-hover:border-yellow-500 group-hover:scale-110 transition-all duration-500 shadow-lg"
                    />
                    {/* Ring Animation */}
                    <div className="absolute inset-0 rounded-full border-2 border-yellow-500/0 group-hover:border-yellow-500/40 scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300 relative z-10">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1 group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                    {member.position}
                  </p>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-500 group-hover:w-1/3 transition-all duration-500 ease-out"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <section className="py-12 sm:py-16 relative z-10 px-4 sm:px-6 lg:px-16">
        <motion.div
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Trusted <span className="text-yellow-500">Partners</span>
          </h2>
        </motion.div>
        <LogoCarousel />
      </section>

      <Footer />
    </div>
  );
}