import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useNavigate } from "react-router-dom";
import worksData from "../data/worksData";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-screen h-[90vh] sm:h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Getnet Haile Film Production
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Bringing Stories to Life through Film & Photography
          </motion.p>
          <Button
            variant="ghost"
            className="!bg-transparent border border-[rgb(23,97,126)] text-white font-semibold px-6 py-3 rounded-full 
             hover:bg-[rgb(23,97,126)] hover:text-[rgb(23,97,126)] transition-colors duration-300"
            onClick={() => navigate("/portfolio")}
          >
            View Portfolio
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#111827] w-full text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-white">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {[
            "Corporate Video Production",
            "Commercials & Ads",
            "Event Coverage & Live Streaming",
          ].map((service, i) => (
            <Card
              key={i}
              className="!bg-transparent border border-gray-700 shadow-lg rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
            >
              <CardContent className="!bg-transparent p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white hover:text-yellow-400 transition-colors">
                  {service}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Professional {service.toLowerCase()} tailored to your needs.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-center">
          {["Documentaries & Narrative Films", "Creative Services"].map(
            (service, i) => (
              <Card
                key={i}
                className="!bg-transparent border border-gray-700 shadow-lg rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
              >
                <CardContent className="!bg-transparent p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white hover:text-yellow-400 transition-colors">
                    {service}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Professional {service.toLowerCase()} tailored to your
                    needs.
                  </p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-12 sm:py-16 px-4 sm:px-6 w-full text-center bg-[#040d1c]">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-10">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {worksData.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="bg-white/10 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => navigate(`/portfolio/${project.id}`)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/portfolio")}
          className="mt-8 !bg-[#013998] hover:bg-[#0252c8] text-white px-6 sm:px-8 py-3 rounded-full"
        >
          Know More
        </button>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#111827] w-full text-center flex justify-center">
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
            Get in Touch
          </h2>
          <form className="w-full bg-[#111827]/70 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-[#1f2937] text-white focus:outline-none focus:ring-2 focus:ring-[#013998]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-[#1f2937] text-white focus:outline-none focus:ring-2 focus:ring-[#013998]"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-lg bg-[#1f2937] text-white focus:outline-none focus:ring-2 focus:ring-[#013998] mb-6"
            />
            <Button className="bg-[#013998] hover:bg-[#0252c8] text-white px-6 sm:px-8 py-3 rounded-full w-full sm:w-auto">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
