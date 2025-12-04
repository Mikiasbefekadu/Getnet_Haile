import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Button } from "../components/ui/Button";
import LogoCarousel from "../components/ui/LogoCarousel";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setSuccessMessage("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("https://formspree.io/f/mpwyrbrg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#040d1c] text-white relative overflow-hidden">
      <Navbar />

      {/* Background Half-Moon Effect */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#013998] opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#013998] opacity-40 blur-2xl"></div>
      </div>

      {/* Contact Section */}
      <motion.section
        className="pt-32 pb-20 relative flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10 w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 break-words">
          Get in Touch
        </h1>
        <p className="text-gray-300 max-w-sm sm:max-w-md md:max-w-2xl mb-12 text-sm sm:text-base leading-relaxed break-words">
          Let’s collaborate and bring your story to life. Reach out to us for
          partnerships, inquiries, or project discussions. We’d love to hear
          from you.
        </p>

        {/* Contact Section Wrapper */}
        <div className="w-full bg-[#111827]/70 rounded-2xl shadow-xl backdrop-blur p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 sm:gap-10 md:gap-16">
          {/* Illustration */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/dwxufxm7s/image/upload/v1764846413/contact_result_qe2yzd.webp"
              alt="Contact Illustration"
              className="w-full max-w-[180px] sm:max-w-sm md:max-w-md object-contain"
            />
          </div>

          {/* Contact Form */}
          <form
            className="flex-1 w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2 sm:p-3 rounded-lg bg-[#1f2937] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#013998] ${
                    errors.name ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 sm:p-3 rounded-lg bg-[#1f2937] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#013998] ${
                    errors.email ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-2 sm:p-3 rounded-lg bg-[#1f2937] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#013998] ${
                  errors.message ? "ring-2 ring-red-500" : ""
                }`}
              />
              {errors.message && (
                <span className="text-red-500 text-xs sm:text-sm mt-1">
                  {errors.message}
                </span>
              )}
            </div>

            {successMessage && (
              <p className="text-green-500 text-sm sm:text-base mb-4">
                {successMessage}
              </p>
            )}

            <Button
              type="submit"
              className="mt-6 sm:mt-8 !bg-[#013998] hover:bg-[#0252c8] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full w-full sm:w-auto text-sm sm:text-base"
            >
              Send Message
            </Button>
          </form>
        </div>

        {/* Client Logos Carousel */}
        <section className="mt-12 sm:mt-16 relative z-10 w-full">
          <h2 className="text-center text-yellow-500 text-xl sm:text-2xl font-semibold mb-6">
            Our Clients
          </h2>
          <LogoCarousel />
        </section>
      </motion.section>

      <Footer />
    </div>
  );
}
