import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LogoCarousel from "../components/ui/LogoCarousel";

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

  // Loader component
  const Loader = () => (
    <div className="w-32 h-32 flex items-center justify-center">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-yellow-500"></div>
    </div>
  );

  // Hook-based image loader
  const LazyImage = ({ src, alt }) => {
    const [loading, setLoading] = useState(true);

    return (
      <div className="relative flex items-center justify-center w-full max-w-xs">
        {loading && <Loader />}
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoading(false)}
          className={`rounded-xl shadow-xl object-cover w-full transition-opacity duration-500 ${
            loading ? "opacity-0 absolute" : "opacity-100 relative"
          }`}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#040d1c] text-white relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Half-Moon Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-[#013998] opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[#013998] opacity-40 blur-2xl"></div>
      </div>

      {/* Hero / Page Header */}
      <motion.div
        className="w-full pt-24 sm:pt-32 pb-12 sm:pb-20 flex flex-col items-center text-center px-4 sm:px-6 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-[clamp(1.5rem,5vw,2.5rem)] font-bold text-white mb-4 text-center break-words">
          About Us
        </h1>
        <p className="text-gray-300 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-[clamp(0.9rem,1.5vw,1.1rem)] leading-relaxed whitespace-normal break-words">
          Getnet Haile Film Production brings stories to life through
          high-quality video and photography. Our mission, vision, and approach
          define the work we do for our clients.
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="flex-1 w-full relative z-10">
        <div className="w-full px-4 sm:px-6 flex flex-col gap-16 py-12 max-w-6xl mx-auto">
          {/* Mission Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              className="md:w-1/2 flex flex-col gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-[clamp(1.3rem,3vw,1.8rem)] font-semibold text-yellow-500 mb-2 break-words">
                Mission
              </h2>
              <p className="text-gray-300 text-[clamp(0.85rem,1.5vw,1rem)] leading-relaxed whitespace-normal break-words max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                At Getnet Haile Film Production, our mission is to bring stories
                to life through the art of video and photo. We are dedicated to
                crafting high-quality, engaging, and impactful content that
                connects with audiences and drives results.
              </p>
            </motion.div>

            <div className="md:w-1/2 flex justify-center">
              <LazyImage src="https://res.cloudinary.com/dwxufxm7s/image/upload/v1764850800/Mission_result_jtwaht.webp" alt="About Getnet Haile Films" />
            </div>
          </div>



          {/* Vision Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 flex justify-center order-1 md:order-none h-full">
              <LazyImage src="https://res.cloudinary.com/dwxufxm7s/image/upload/v1764850802/Vision_result_wfmgm1.webp" alt="Vision Getnet Haile Films" />
            </div>

            <motion.div
              className="md:w-1/2 flex flex-col gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-[clamp(1.3rem,3vw,1.8rem)] font-semibold text-yellow-500 mb-2 break-words">
                Vision
              </h2>
              <p className="text-gray-300 text-[clamp(0.85rem,1.5vw,1rem)] leading-relaxed whitespace-normal break-words max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                Our vision is to be the go-to partner for businesses and
                creators seeking high-quality video and photo content that tells
                powerful, authentic stories.
              </p>
            </motion.div>
          </div>



          {/* Approach Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              className="md:w-1/2 flex flex-col gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-[clamp(1.3rem,3vw,1.8rem)] font-semibold text-yellow-500 mb-2 break-words">
                Our Approach
              </h2>
              <p className="text-gray-300 text-[clamp(0.85rem,1.5vw,1rem)] leading-relaxed whitespace-normal break-words max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                We believe that the key to successful video and photo production
                lies in a meticulous, collaborative approach that prioritizes
                both creativity and precision.
              </p>
            </motion.div>

            <div className="md:w-1/2 flex justify-center">
              <LazyImage src="https://res.cloudinary.com/dwxufxm7s/image/upload/v1764850799/Approach_result_ctubj8.webp" alt="Approach Getnet Haile Films" />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 relative z-10 max-w-6xl mx-auto">
        <h2 className="text-center text-yellow-500 text-[clamp(1.5rem,3vw,2rem)] font-semibold mb-10 sm:mb-12 break-words">
          Meet Our Team
        </h2>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="bg-[#0a1a2f] rounded-xl shadow-lg overflow-hidden text-center p-6 hover:scale-105 transition-transform whitespace-normal break-words"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full mx-auto mb-4 border-2 border-yellow-500"
              />
              <h3 className="text-[clamp(1rem,1.5vw,1.2rem)] font-semibold break-words">
                {member.name}
              </h3>
              <p className="text-gray-400 text-[clamp(0.8rem,1.5vw,1rem)] whitespace-normal break-words">
                {member.position}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Logos Carousel */}
      <section className="mt-12 sm:mt-16 relative z-10 px-4 sm:px-6">
        <h2 className="text-center text-yellow-500 text-[clamp(1.5rem,3vw,2rem)] font-semibold mb-6 break-words">
          Our Clients
        </h2>
        <LogoCarousel />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
