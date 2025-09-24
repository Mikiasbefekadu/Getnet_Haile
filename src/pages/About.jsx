import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LogoCarousel from "../components/ui/LogoCarousel";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Getnet Haile",
      position: "Founder & Director",
      image: "src/assets/Gech.jpg",
    },
    {
      name: "Bereket Siefu",
      position: "Production Manager",
      image: "src/assets/Beki.jpg",
    },
    {
      name: "Abdi Mohamed",
      position: "Marketing Manager",
      image: "src/assets/Abdi.jpg",
    },
    {
      name: "Efirem Endasha",
      position: "Cinematography",
      image: "src/assets/Efi.jpg",
    },
    {
      name: "Eyuel Zerabruk",
      position: "Creative Director",
      image: "src/assets/Eyu.jpg",
    },
    {
      name: "Yilmazer Birhanu",
      position: "Photographer",
      image: "src/assets/Yilma.jpg",
    },
  ];

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
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-yellow-500 mb-4">
          About Us
        </h1>
        <p className="text-gray-300 max-w-3xl text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed">
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
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold text-yellow-500 mb-2">
                Mission
              </h2>
              <p className="text-gray-300 text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed">
                At Getnet Haile Film Production, our mission is to bring stories
                to life through the art of video and photo. We are dedicated to
                crafting high-quality, engaging, and impactful content that
                connects with audiences and drives results.
              </p>
            </motion.div>

            <div className="md:w-1/2 flex justify-center">
              <img
                src="src/assets/editing-7320126_1920.jpg"
                alt="About Getnet Haile Films"
                className="rounded-xl shadow-xl object-cover w-full max-w-md"
              />
            </div>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 flex justify-center order-1 md:order-none">
              <img
                src="src/assets/image-editing-2707653_1920.jpg"
                alt="Vision Getnet Haile Films"
                className="rounded-xl shadow-xl object-cover w-full max-w-md"
              />
            </div>

            <motion.div
              className="md:w-1/2 flex flex-col gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold text-yellow-500 mb-2">
                Vision
              </h2>
              <p className="text-gray-300 text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed">
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
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold text-yellow-500 mb-2">
                Our Approach
              </h2>
              <p className="text-gray-300 text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed">
                We believe that the key to successful video and photo production
                lies in a meticulous, collaborative approach that prioritizes
                both creativity and precision.
              </p>
            </motion.div>

            <div className="md:w-1/2 flex justify-center">
              <img
                src="src/assets/About/Approach/Approach.JPG"
                alt="Approach Getnet Haile Films"
                className="rounded-xl shadow-xl object-cover w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 relative z-10 max-w-6xl mx-auto">
        <h2 className="text-center text-yellow-500 text-2xl sm:text-3xl font-semibold mb-10 sm:mb-12">
          Meet Our Team
        </h2>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="bg-[#0a1a2f] rounded-xl shadow-lg overflow-hidden text-center p-6 hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full mx-auto mb-4 border-2 border-yellow-500"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Logos Carousel */}
      <section className="mt-12 sm:mt-16 relative z-10 px-4 sm:px-6">
        <h2 className="text-center text-yellow-500 text-2xl sm:text-3xl font-semibold mb-6">
          Our Clients
        </h2>
        <LogoCarousel />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
