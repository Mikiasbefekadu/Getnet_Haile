// import { motion } from "framer-motion";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";

// export default function TestimonialPage() {
//   const testimonials = [
//     {
//       name: "Client Company Name",
//       role: "Name of the person, and role",
//       quote:
//         "Working with Getnet Haile Film Production was an incredible experience. Their creativity and professionalism brought our vision to life beautifully.",
//       image: "assets/LogoCarousel/office-removebg-preview.png",
      
//     },
//     {
//       name: "Client Company Name",
//       role: "Name of the person, and role",
//       quote:
//         "Their attention to detail and storytelling ability are unmatched. Every project we collaborated on exceeded expectations.",
//       image: "assets/LogoCarousel/rescue-removebg-preview.png",
//     },
//     {
//       name: "Client Company Name",
//       role: "Name of the person, and role",
//       quote:
//         "They don’t just shoot videos—they create stories that connect emotionally. Truly one of the best production teams out there.",
//       image: "assets/LogoCarousel/office-removebg-preview.png",
//     },
//     {
//       name: "Client Company Name",
//       role: "Name of the person, and role",
//       quote:
//         "From concept to delivery, their team showed passion and commitment. The results speak for themselves — top-notch quality every time.",
//       image: "assets/LogoCarousel/black-removebg-preview.png",
//     },
//     {
//         name: "Client Company Name",
//         role: "Name of the person, and role",
//         quote:
//           "From concept to delivery, their team showed passion and commitment. The results speak for themselves — top-notch quality every time.",
//         image: "assets/LogoCarousel/mayor-removebg-preview.png",
//       },
//       {
//         name: "Client Company Name",
//         role: "Name of the person, and role",
//         quote:
//           "From concept to delivery, their team showed passion and commitment. The results speak for themselves — top-notch quality every time.",
//         image: "assets/LogoCarousel/AMN-removebg-preview.png",
//       },
//       {
//         name: "Client Company Name",
//         role: "Name of the person, and role",
//         quote:
//           "From concept to delivery, their team showed passion and commitment. The results speak for themselves — top-notch quality every time.",
//         image: "assets/LogoCarousel/walta-removebg-preview.png",
//       },
      
//     //Additional clients
//   ];

//   return (
//     <div className="min-h-screen w-full flex flex-col bg-[#040d1c] text-white relative overflow-hidden">
//       {/* Navbar */}
//       <Navbar />

//       {/* Background Glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-[#013998] opacity-70 blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[#013998] opacity-40 blur-2xl"></div>
//       </div>

//       {/* Header */}
//       <motion.div
//         className="w-full pt-24 sm:pt-32 pb-12 text-center px-6 relative z-10"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-[clamp(1.8rem,5vw,2.8rem)] font-bold text-yellow-500 mb-4">
//           What Our Clients Say
//         </h1>
//         <p className="text-gray-300 max-w-3xl mx-auto text-[clamp(0.9rem,1.5vw,1.1rem)] leading-relaxed">
//           Real experiences from our valued clients and partners who’ve trusted
//           us with their stories.
//         </p>
//       </motion.div>

//       {/* Testimonials Section */}
//       <section className="relative z-10 w-full px-4 sm:px-10 lg:px-16 py-16">
//         <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               className="bg-[#0a1a2f]/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-yellow-600/10 transition-all duration-300 w-full"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover={{
//                 scale: 1.05,
//                 y: -10,
//                 boxShadow: "0 12px 25px rgba(255, 215, 0, 0.15)",
//               }}
//               transition={{ type: "spring", stiffness: 200, damping: 15 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex items-center gap-4 mb-5">
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="w-14 h-14 rounded-full object-cover border-2 border-yellow-500"
//                 />
//                 <div>
//                   <h3 className="font-semibold text-[clamp(1rem,1.5vw,1.2rem)]">
//                     {t.name}
//                   </h3>
//                   <p className="text-gray-400 text-[clamp(0.8rem,1.3vw,1rem)]">
//                     {t.role}
//                   </p>
//                 </div>
//               </div>

//               <p className="text-gray-300 italic leading-relaxed text-[clamp(0.9rem,1.3vw,1.05rem)]">
//                 “{t.quote}”
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }
