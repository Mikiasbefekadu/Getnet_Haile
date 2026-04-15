// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Button } from "../components/ui/Button";
// import { Card, CardContent } from "../components/ui/Card";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
// import { useNavigate } from "react-router-dom";
// import worksData from "../data/worksData";
// const bgVideo = "https://res.cloudinary.com/dwxufxm7s/video/upload/v1764846838/202587-918431513_sluxcc.mp4";

// export default function HomePage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     // Remove error when user types
//     setErrors({ ...errors, [name]: "" });
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

//     // Returns true if no errors
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Validate the form
//     if (!validate()) return;
  
//     try {
//       // Send the form data to Formspree
//       const response = await fetch("https://formspree.io/f/mbdqdllj", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
  
//       if (response.ok) {
//         // Show success message
//         alert("Message sent successfully!");
//         // Clear the form
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         alert("Oops! Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       console.error("Form submit error:", error);
//       alert("Oops! Something went wrong. Please try again.");
//     }
//   };
  
//   const navigate = useNavigate();

//   return (
//     <div className="w-full flex flex-col items-center justify-center">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative w-screen h-[90vh] sm:h-screen overflow-hidden">
//         {/* Background Video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src={bgVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6">
//           <motion.h1
//             className="!text-xl sm:!text-1xl md:!text-5xl font-bold mb-4 leading-tight"
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Gabi Film Production
//           </motion.h1>
//           <motion.p
//             className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Bringing Stories to Life through Film & Photography
//           </motion.p>
//           <Button
//             variant="ghost"
//             className="!bg-transparent border border-[rgb(23,97,126)] text-white font-semibold px-6 py-3 rounded-full 
//              hover:bg-[rgb(23,97,126)] hover:text-[rgb(23,97,126)] transition-colors duration-300"
//             onClick={() => navigate("/portfolio")}
//           >
//             View Portfolio
//           </Button>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#111827] w-full text-center">
//         <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-white">
//           Our Services
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
//           {[
//             "Corporate Video Production",
//             "Commercials & Ads",
//             "Event Coverage & Live Streaming",
//           ].map((service, i) => (
//             <Card
//               key={i}
//               className="!bg-transparent border border-gray-700 shadow-lg rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
//             >
//               <CardContent className="!bg-transparent p-6">
//                 <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white hover:text-yellow-400 transition-colors">
//                   {service}
//                 </h3>
//                 <p className="text-gray-300 text-sm sm:text-base">
//                   Professional {service.toLowerCase()} tailored to your needs.
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-center">
//           {["Documentaries & Narrative Films", "Creative Services"].map(
//             (service, i) => (
//               <Card
//                 key={i}
//                 className="!bg-transparent border border-gray-700 shadow-lg rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
//               >
//                 <CardContent className="!bg-transparent p-6">
//                   <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white hover:text-yellow-400 transition-colors">
//                     {service}
//                   </h3>
//                   <p className="text-gray-300 text-sm sm:text-base">
//                     Professional {service.toLowerCase()} tailored to your
//                     needs.
//                   </p>
//                 </CardContent>
//               </Card>
//             )
//           )}
//         </div>
//       </section>
// {/* Featured Projects Section */}
// <section
//   id="featured-projects"
//   className="py-12 sm:py-16 px-4 sm:px-6 w-full text-center bg-[#040d1c]"
// >
//   <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-10">
//     Featured Projects
//   </h2>

//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
//     {worksData.slice(0, 3).map((project) => (
//       <motion.div
//         key={project.id}
//         className="bg-white/10 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
//         whileHover={{ y: -5 }}
//         onClick={() => navigate(`/portfolio/${project.id}`)}
//       >
//         <div className="relative w-full h-40 sm:h-48">
//           {/* Skeleton while loading */}
//           <div className="absolute inset-0 bg-gray-700 animate-pulse" />

//           <img
//             src={project.image || "/fallback.jpg"}
//             alt={project.title || "Project"}
//             className="w-full h-full object-cover relative z-10"
//             onLoad={(e) => (e.target.previousSibling.style.display = "none")}
//           />
//         </div>

//         <div className="p-4 sm:p-6">
//           <h3 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-2">
//             {project.title}
//           </h3>
//           <p className="text-gray-300 text-sm sm:text-base">
//             {project.description}
//           </p>
//         </div>
//       </motion.div>
//     ))}
//   </div>

//   <button
//     onClick={() => navigate("/portfolio")}
//     className="mt-8 !bg-[#013998] hover:bg-[#0252c8] text-white px-6 sm:px-8 py-3 rounded-full"
//   >
//     Know More
//   </button>
// </section>

//      {/* Contact Form Section */}
// <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#111827] w-full text-center flex justify-center">
//   <div className="w-full max-w-4xl">
//     <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
//       Get in Touch
//     </h2>
//     <form onSubmit={handleSubmit} className="w-full bg-[#111827]/70 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         {/* Name Field */}
//         <div className="relative w-full">
//           <input
//             type="text"
//             name="name"
//             placeholder={errors.name || "Your Name"}
//             value={formData.name}
//             onChange={handleChange}
//             className={`w-full p-3 rounded-lg bg-[#1f2937] text-white focus:outline-none focus:ring-2 focus:ring-[#013998] ${
//               errors.name ? "ring-2 ring-red-500 placeholder-red-500" : ""
//             }`}
//           />
//         </div>

//         {/* Email Field */}
//         <div className="relative w-full">
//           <input
//             type="email"
//             name="email"
//             placeholder={errors.email || "Your Email"}
//             value={formData.email}
//             onChange={handleChange}
//             className={`w-full p-3 rounded-lg bg-[#1f2937] text-white focus:outline-none focus:ring-2 focus:ring-[#013998] ${
//               errors.email ? "ring-2 ring-red-500 placeholder-red-500" : ""
//             }`}
//           />
//         </div>
//       </div>

//       {/* Message Field */}
//       <div className="relative w-full mb-6">
//         <textarea
//           name="message"
//           placeholder={errors.message || "Your Message"}
//           rows="5"
//           value={formData.message}
//           onChange={handleChange}
//           className={`w-full p-3 rounded-lg bg-[#1f2937] text-white focus:outline-none focus:ring-2 focus:ring-[#013998] ${
//             errors.message ? "ring-2 ring-red-500 placeholder-red-500" : ""
//           }`}
//         />
//       </div>

//       <Button
//         type="submit"
//         className="mt-8 !bg-[#013998] hover:bg-[#0252c8] text-white px-6 sm:px-8 py-3 rounded-full w-full sm:w-auto"
//       >
//         Send Message
//       </Button>
//     </form>
//   </div>
// </section>


//       <Footer />
//     </div>
//   );
// }
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useNavigate } from "react-router-dom";
import worksData from "../data/worksData";
import { Play, Film, Camera, Mic, FileText, Sparkles } from "lucide-react";

const bgVideo = "https://res.cloudinary.com/dwxufxm7s/video/upload/v1764846838/202587-918431513_sluxcc.mp4";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
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
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  const navigate = useNavigate();

  const services = [
    { name: "Corporate Video Production", icon: Film },
    { name: "Commercials & Ads", icon: Play },
    { name: "Event Coverage & Live Streaming", icon: Camera },
    { name: "Documentaries & Narrative Films", icon: FileText },
    { name: "Creative Services", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#040d1c] text-white relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] sm:min-h-screen overflow-hidden">
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content - Changed from flex center to absolute positioning with padding */}
        <div className="absolute inset-0 z-10 flex flex-col items-center text-center px-4 sm:px-6 pt-42 sm:pt-40">
          <motion.h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Gabi Film Production
          </motion.h1>
          <motion.p
            className="text-sm sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Bringing Stories to Life through Film & Photography
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Button
              variant="ghost"
              className="!bg-transparent border-2 border-yellow-500 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full 
               hover:bg-yellow-500 hover:text-[#040d1c] transition-all duration-300 text-sm sm:text-base"
              onClick={() => navigate("/portfolio")}
            >
              View Portfolio
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#111827] w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0a1a2f]/80 border border-yellow-500/30 mb-3 sm:mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
            <span className="text-yellow-500 text-xs sm:text-sm font-medium tracking-wide uppercase">
              What We Do
            </span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white">
            Our <span className="text-yellow-500">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <Card className="!bg-[#0a1a2f]/60 backdrop-blur-sm border border-white/5 hover:border-yellow-500/50 rounded-xl sm:rounded-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] h-full">
                <CardContent className="!bg-transparent p-4 sm:p-6 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-yellow-500/20 transition-all duration-300">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Professional {service.name.toLowerCase()} tailored to your needs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        id="featured-projects"
        className="py-12 sm:py-16 px-4 sm:px-6 w-full text-center bg-[#040d1c] relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0a1a2f]/80 border border-yellow-500/30 mb-3 sm:mb-4">
            <Film className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
            <span className="text-yellow-500 text-xs sm:text-sm font-medium tracking-wide uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white">
            Featured <span className="text-yellow-500">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {worksData.slice(0, 3).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onClick={() => navigate(`/portfolio/${project.id}`)}
            >
              <div className="bg-[#0a1a2f]/60 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-white/5 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)]">
                <div className="relative w-full h-36 sm:h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gray-700 animate-pulse" />
                  <img
                    src={project.image || "/fallback.jpg"}
                    alt={project.title || "Project"}
                    className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-700"
                    onLoad={(e) => (e.target.previousSibling.style.display = "none")}
                  />
                </div>

                <div className="p-4 sm:p-6 text-left">
                  <h3 className="text-base sm:text-lg font-semibold text-yellow-500 mb-1 sm:mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10"
        >
          <button
            onClick={() => navigate("/portfolio")}
            className="!bg-[#013998] hover:bg-[#0252c8] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#013998]/30"
          >
            Know More
          </button>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#111827] w-full text-center flex justify-center relative z-10">
        <div className="w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0a1a2f]/80 border border-yellow-500/30 mb-3 sm:mb-4">
              <Mic className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
              <span className="text-yellow-500 text-xs sm:text-sm font-medium tracking-wide uppercase">
                Contact
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white">
              Get in <span className="text-yellow-500">Touch</span>
            </h2>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full bg-[#0a1a2f]/60 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-white/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="relative w-full">
                <input
                  type="text"
                  name="name"
                  placeholder={errors.name || "Your Name"}
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg bg-[#1f2937] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#013998] border border-transparent ${
                    errors.name ? "ring-2 ring-red-500 placeholder-red-500" : ""
                  }`}
                />
              </div>

              <div className="relative w-full">
                <input
                  type="email"
                  name="email"
                  placeholder={errors.email || "Your Email"}
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg bg-[#1f2937] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#013998] border border-transparent ${
                    errors.email ? "ring-2 ring-red-500 placeholder-red-500" : ""
                  }`}
                />
              </div>
            </div>

            <div className="relative w-full mb-4 sm:mb-6">
              <textarea
                name="message"
                placeholder={errors.message || "Your Message"}
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-[#1f2937] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#013998] border border-transparent resize-none ${
                  errors.message ? "ring-2 ring-red-500 placeholder-red-500" : ""
                }`}
              />
            </div>

            <Button
              type="submit"
              className="!bg-[#013998] hover:bg-[#0252c8] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full w-full sm:w-auto text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#013998]/30"
            >
              Send Message
            </Button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
}