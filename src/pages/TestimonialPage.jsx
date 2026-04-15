import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Quote, Star } from "lucide-react";

export default function TestimonialPage() {
  const testimonials = [
    {
      name: "Ethiopian Air Traffic Controllers Association",
      role: "Tesfamichael Teshome, President",
      quote:
        "Your work demonstrated exceptional technical skill, attention to detail and strong commitment to quality. The production successfully captured the significance of the event and contributed meaningfully to the impact and visibility of our Air Traffic Controller's Day celebration.",
      image: "assets/LogoCarousel/airtraffic.jpg",
      event: "Air Traffic Controller's Day",
    },
    {
      name: "International Rescue Committee",
      role: "Hermela Alemneh, Communication Manager",
      quote:
        "Gabi Film Production played a key role in producing high-quality visual content for our organization. Their attention to detail, artistic vision, and ability to understand and execute our objectives were evident throughout every stage. The final outputs not only met but exceeded our expectations.",
      image: "assets/LogoCarousel/rescue-removebg-preview.png",
      event: "Campaign Production",
    },
    {
      name: "Ethiopian Civil Aviation Authority",
      role: "Yohannes Abera Belete, Director General",
      quote:
        "In sincere gratitude for your exceptional work in producing the documentary, Gurdians of the skies. Your remarkable documentary on the air traffic control profession and your superb coverage of the October 20 ATC day event have profoundly honored our controllers and elevated public understanding of this critical field. We are deeply grateful for your skill and partnership.",
      image: "assets/LogoCarousel/Authority_harbors_large_ambitions_for_aerospace_manufacturing.jpg",
      event: "Documentary",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#040d1c] text-white relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#013998] opacity-20 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#013998] opacity-15 blur-[100px]"></div>
      </div>

      {/* Header */}
      <motion.div
        className="w-full pt-28 pb-16 text-center px-6 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a1a2f]/80 border border-yellow-500/30 mb-6"
        >
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-yellow-500 text-sm font-medium tracking-wide uppercase">
            Client Testimonials
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          What Our <span className="text-yellow-500">Clients</span> Say
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          Trusted by leading organizations for exceptional video production
        </p>
      </motion.div>

      {/* Testimonials - Side by Side Layout */}
      <section className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pb-24 flex-1">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-[#0a1a2f]/60 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-yellow-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/5 relative overflow-hidden">
                
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                    <Quote className="w-6 h-6 text-yellow-500" />
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                  "{t.quote}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="relative">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-yellow-500/50 group-hover:border-yellow-500 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center border-2 border-[#0a1a2f]">
                      <svg className="w-3 h-3 text-[#040d1c]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-lg group-hover:text-yellow-400 transition-colors duration-300">
                      {t.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {t.role}
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <span className="px-3 py-1 rounded-full bg-[#013998]/30 text-yellow-500 text-xs font-medium border border-yellow-500/20">
                      {t.event}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Indicator */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-[#0a1a2f]/60 border border-white/10">
            <div className="flex -space-x-3">
              <img src={testimonials[0].image} alt="" className="w-10 h-10 rounded-full border-2 border-[#040d1c] object-cover opacity-80" />
              <img src={testimonials[1].image} alt="" className="w-10 h-10 rounded-full border-2 border-[#040d1c] object-cover opacity-80" />
            </div>
            <span className="text-gray-400 text-sm">
              Trusted by <span className="text-white font-semibold">10+ organizations</span>
            </span>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}