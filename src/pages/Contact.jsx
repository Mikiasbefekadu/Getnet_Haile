    // import { useState } from "react";
    // import { motion } from "framer-motion";
    // import Navbar from "../components/layout/Navbar";
    // import Footer from "../components/layout/Footer";
    // import { Button } from "../components/ui/Button";
    // import LogoCarousel from "../components/ui/LogoCarousel";

    // export default function ContactPage() {
    //   const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     message: "",
    //   });

    //   const [errors, setErrors] = useState({});
    //   const [successMessage, setSuccessMessage] = useState("");

    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    //     setErrors({ ...errors, [name]: "" });
    //     setSuccessMessage("");
    //   };

    //   const validate = () => {
    //     const newErrors = {};
    //     if (!formData.name.trim()) newErrors.name = "Name is required";
    //     if (!formData.email.trim()) {
    //       newErrors.email = "Email is required";
    //     } else if (
    //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    //     ) {
    //       newErrors.email = "Invalid email address";
    //     }
    //     if (!formData.message.trim()) newErrors.message = "Message is required";

    //     setErrors(newErrors);

    //     return Object.keys(newErrors).length === 0;
    //   };

    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!validate()) return;

    //     try {
    //       const response = await fetch("https://formspree.io/f/mbdqdllj", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //           Accept: "application/json",
    //         },
    //         body: JSON.stringify(formData),
    //       });

    //       if (response.ok) {
    //         setSuccessMessage("Message sent successfully!");
    //         setFormData({ name: "", email: "", message: "" });
    //       } else {
    //         alert("Oops! Something went wrong. Please try again.");
    //       }
    //     } catch (error) {
    //       console.error("Form submit error:", error);
    //       alert("Oops! Something went wrong. Please try again.");
    //     }
    //   };

    //   return (
    //     <div className="min-h-screen w-full flex flex-col bg-[#040d1c] text-white relative overflow-hidden">
    //       <Navbar />

    //       {/* Background Half-Moon Effect */}
    //       <div className="absolute inset-0">
    //         <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#013998] opacity-70 blur-3xl"></div>
    //         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#013998] opacity-40 blur-2xl"></div>
    //       </div>

    //       {/* Contact Section */}
    //       <motion.section
    //         className="pt-32 pb-20 relative flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10 w-full"
    //         initial={{ opacity: 0, y: 30 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 1 }}
    //       >
    //         <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 break-words">
    //           Get in Touch
    //         </h1>
    //         <p className="text-gray-300 max-w-sm sm:max-w-md md:max-w-2xl mb-12 text-sm sm:text-base leading-relaxed break-words">
    //           Let’s collaborate and bring your story to life. Reach out to us for
    //           partnerships, inquiries, or project discussions. We’d love to hear
    //           from you.
    //         </p>

    //         {/* Contact Section Wrapper */}
    //         <div className="w-full bg-[#111827]/70 rounded-2xl shadow-xl backdrop-blur p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 sm:gap-10 md:gap-16">
    //           {/* Illustration */}
    //           <div className="flex-1 flex items-center justify-center">
    //             <img
    //               src="https://res.cloudinary.com/dwxufxm7s/image/upload/v1764846413/contact_result_qe2yzd.webp"
    //               alt="Contact Illustration"
    //               className="w-full max-w-[180px] sm:max-w-sm md:max-w-md object-contain"
    //             />
    //           </div>

    //           {/* Contact Form */}
    //           <form
    //             className="flex-1 w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto"
    //             onSubmit={handleSubmit}
    //             noValidate
    //           >
    //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
    //               <div className="flex flex-col">
    //                 <input
    //                   type="text"
    //                   name="name"
    //                   placeholder="Your Name"
    //                   value={formData.name}
    //                   onChange={handleChange}
    //                   className={`w-full p-2 sm:p-3 rounded-lg bg-[#1f2937] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#013998] ${
    //                     errors.name ? "ring-2 ring-red-500" : ""
    //                   }`}
    //                 />
    //                 {errors.name && (
    //                   <span className="text-red-500 text-xs sm:text-sm mt-1">
    //                     {errors.name}
    //                   </span>
    //                 )}
    //               </div>
    //               <div className="flex flex-col">
    //                 <input
    //                   type="email"
    //                   name="email"
    //                   placeholder="Your Email"
    //                   value={formData.email}
    //                   onChange={handleChange}
    //                   className={`w-full p-2 sm:p-3 rounded-lg bg-[#1f2937] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#013998] ${
    //                     errors.email ? "ring-2 ring-red-500" : ""
    //                   }`}
    //                 />
    //                 {errors.email && (
    //                   <span className="text-red-500 text-xs sm:text-sm mt-1">
    //                     {errors.email}
    //                   </span>
    //                 )}
    //               </div>
    //             </div>

    //             <div className="flex flex-col mb-6">
    //               <textarea
    //                 name="message"
    //                 placeholder="Your Message"
    //                 rows="4"
    //                 value={formData.message}
    //                 onChange={handleChange}
    //                 className={`w-full p-2 sm:p-3 rounded-lg bg-[#1f2937] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#013998] ${
    //                   errors.message ? "ring-2 ring-red-500" : ""
    //                 }`}
    //               />
    //               {errors.message && (
    //                 <span className="text-red-500 text-xs sm:text-sm mt-1">
    //                   {errors.message}
    //                 </span>
    //               )}
    //             </div>

    //             {successMessage && (
    //               <p className="text-green-500 text-sm sm:text-base mb-4">
    //                 {successMessage}
    //               </p>
    //             )}

    //             <Button
    //               type="submit"
    //               className="mt-6 sm:mt-8 !bg-[#013998] hover:bg-[#0252c8] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full w-full sm:w-auto text-sm sm:text-base"
    //             >
    //               Send Message
    //             </Button>
    //           </form>
    //         </div>

    //         {/* Client Logos Carousel */}
    //         <section className="mt-12 sm:mt-16 relative z-10 w-full">
    //           <h2 className="text-center text-yellow-500 text-xl sm:text-2xl font-semibold mb-6">
    //             Our Clients
    //           </h2>
    //           <LogoCarousel />
    //         </section>
    //       </motion.section>

    //       <Footer />
    //     </div>
    //   );
    // }

    import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Button } from "../components/ui/Button";
import LogoCarousel from "../components/ui/LogoCarousel";
import { Mail, User, MessageSquare, Send } from "lucide-react";

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
      const response = await fetch("https://formspree.io/f/mbdqdllj", {
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

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] rounded-full bg-[#013998] opacity-20 blur-[80px] sm:blur-[120px]"></div>
        <div className="absolute bottom-1/3 left-0 w-[200px] sm:w-[400px] md:w-[500px] h-[200px] sm:h-[400px] md:h-[500px] rounded-full bg-[#013998] opacity-15 blur-[60px] sm:blur-[100px]"></div>
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
          <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
          <span className="text-yellow-500 text-xs sm:text-sm font-medium tracking-wide uppercase">
            Contact Us
          </span>
        </motion.div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
          Get in <span className="text-yellow-500">Touch</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0">
          Let's collaborate and bring your story to life. Reach out to us for partnerships, inquiries, or project discussions.
        </p>
      </motion.div>

      {/* Contact Section */}
      <section className="relative z-10 w-full px-4 sm:px-6 lg:px-16 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0a1a2f]/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/5 p-4 sm:p-6 lg:p-12"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16">
              {/* Illustration */}
              <div className="flex-1 flex items-center justify-center w-full">
                <img
                  src="https://res.cloudinary.com/dwxufxm7s/image/upload/v1764846413/contact_result_qe2yzd.webp"
                  alt="Contact Illustration"
                  className="w-full max-w-[200px] sm:max-w-[280px] lg:max-w-md object-contain"
                />
              </div>

              {/* Contact Form */}
              <form
                className="flex-1 w-full max-w-lg"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="flex flex-col">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 sm:pl-12 pr-3 py-2.5 sm:py-3 rounded-lg bg-[#1f2937] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-500/50 border border-transparent placeholder-gray-500 ${
                          errors.name ? "ring-2 ring-red-500" : ""
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 sm:pl-12 pr-3 py-2.5 sm:py-3 rounded-lg bg-[#1f2937] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-500/50 border border-transparent placeholder-gray-500 ${
                          errors.email ? "ring-2 ring-red-500" : ""
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col mb-4 sm:mb-6">
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 sm:top-3.5 w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full pl-10 sm:pl-12 pr-3 py-2.5 sm:py-3 rounded-lg bg-[#1f2937] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-500/50 border border-transparent placeholder-gray-500 resize-none ${
                        errors.message ? "ring-2 ring-red-500" : ""
                      }`}
                    />
                  </div>
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </span>
                  )}
                </div>

                {successMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-500 text-sm sm:text-base mb-4"
                  >
                    {successMessage}
                  </motion.p>
                )}

                <Button
                  type="submit"
                  className="!bg-[#013998] hover:bg-[#0252c8] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full w-full sm:w-auto text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#013998]/30 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <section className="py-12 sm:py-16 relative z-10 px-4 sm:px-6 lg:px-16 bg-[#111827]/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Our <span className="text-yellow-500">Clients</span>
          </h2>
        </motion.div>
        <LogoCarousel />
      </section>

      <Footer />
    </div>
  );
}
