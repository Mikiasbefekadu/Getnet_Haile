import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Button } from "../components/ui/Button";
import LogoCarousel from "../components/ui/LogoCarousel";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#040d1c] text-white relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Half-Moon Effect */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#013998] opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#013998] opacity-40 blur-2xl"></div>
      </div>

      {/* Contact Section */}
      <motion.section
        className="pt-32 pb-20 relative flex-1 flex flex-col items-center justify-center text-center px-6 py-20 z-10 w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
        <p className="text-gray-300 max-w-3xl mb-12 text-lg text-center">
          Let’s collaborate and bring your story to life. Reach out to us for
          partnerships, inquiries, or project discussions. We’d love to hear
          from you.
        </p>

        {/* Contact Section Wrapper (shared container) */}
        <div className="w-full bg-[#111827]/70 rounded-2xl shadow-xl backdrop-blur p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Illustration */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src="src/assets/Contact Us/flat-design-illustration-customer-support.png"
              alt="Contact Illustration"
              className="w-full max-w-sm md:max-w-md object-contain"
            />
          </div>

          {/* Contact Form */}
          <form className="flex-1 w-full">
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
            <Button className="bg-[#013998] hover:bg-[#0252c8] text-white px-8 py-3 rounded-full">
              Send Message
            </Button>
          </form>
        </div>

        {/* Client Logos Carousel */}
        <section className="mt-16 relative z-10">
          <h2 className="text-center text-yellow-500 text-2xl font-semibold mb-6">
            Our Clients
          </h2>
          <LogoCarousel />
        </section>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
