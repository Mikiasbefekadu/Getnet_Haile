// // src/pages/PortfolioDetailPage.jsx
// import { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
// import worksData from "../data/worksData";
// import { motion, AnimatePresence } from "framer-motion";

// export default function PortfolioDetailPage() {
//   const { id } = useParams();

//   // Convert id to number safely
//   const workId = parseInt(id);
//   const work = worksData.find((w) => w.id === workId);

//   // If work not found
//   if (!work) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#040d1c]">
//         <h2 className="text-2xl mb-4">Project not found</h2>
//         <Link
//           to="/portfolio"
//           className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400"
//         >
//           Back to Portfolio
//         </Link>
//       </div>
//     );
//   }

//   // Gallery images (fallback to main image if none)
//   const images =
//     Array.isArray(work.images) && work.images.length > 0
//       ? work.images
//       : [work.image];

//   // States
//   const [currentImage, setCurrentImage] = useState(0);
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [visibleCount, setVisibleCount] = useState(Math.min(4, images.length));
//   const [lightboxLoading, setLightboxLoading] = useState(true);

//   // ✅ Image loading states for gallery
//   const [imageLoading, setImageLoading] = useState(Array(images.length).fill(true));

//   // ✅ Video loading state
//   const [videoLoading, setVideoLoading] = useState(true);

//   // When "Load More" is clicked, extend loading state for new images
//   useEffect(() => {
//     setImageLoading((prev) => {
//       const newLoading = [...prev];
//       while (newLoading.length < images.length) newLoading.push(true);
//       return newLoading;
//     });
//   }, [images.length]);

//   // Handlers
//   const openLightbox = (index) => {
//     setCurrentImage(index);
//     setLightboxLoading(true);
//     setLightboxOpen(true);
//   };

//   const nextImage = () => {
//     setLightboxLoading(true);
//     setCurrentImage((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setLightboxLoading(true);
//     setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
//   };

//   const handleLoadMore = () => setVisibleCount(images.length);

//   return (
//     <div className="min-h-screen w-full flex flex-col bg-[#040d1c] text-white">
//       <Navbar />

//       {/* Banner */}
//       <img
//         src={work.image}
//         alt={work.title}
//         className="w-full h-64 object-cover"
//       />

//       {/* Video + Description */}
//       <div className="w-full py-10 px-4 md:px-20 flex flex-col md:flex-row gap-6">
//         {/* Video */}
//         <div className="w-full md:w-1/2 relative">
//           {videoLoading && work.videoUrl && (
//             <div className="absolute inset-0 flex items-center justify-center bg-gray-800/70 rounded-lg z-10">
//               <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-yellow-500"></div>
//             </div>
//           )}

//           {work.videoUrl ? (
//             <iframe
//               className="w-full h-80 md:h-96 rounded-lg shadow-lg"
//               src={work.videoUrl}
//               title={work.title}
//               allowFullScreen
//               onLoad={() => setVideoLoading(false)}
//             />
//           ) : (
//             <div className="w-full h-80 md:h-96 flex items-center justify-center bg-gray-800 rounded-lg">
//               <p className="text-gray-400">
//                 No video available for this project.
//               </p>
//             </div>
//           )}
//         </div>

//         {/* Description */}
//         <div className="md:w-1/2 text-white/90">
//           <h1 className="text-3xl font-bold text-yellow-500">{work.title}</h1>
//           <h2 className="text-gray-300 text-lg my-2">{work.service}</h2>
//           <p className="mb-2">{work.description}</p>
//           <p>{work.details}</p>
//         </div>
//       </div>

//       {/* Image Gallery */}
//       <div className="px-4 md:px-20 mb-10">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {images.slice(0, visibleCount).map((img, idx) => (
//             <div key={idx} className="relative w-full h-48">
//               {/* Loader */}
//               {imageLoading[idx] && (
//                 <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-lg">
//                   <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-yellow-500"></div>
//                 </div>
//               )}

//               <img
//                 src={img}
//                 loading="lazy"
//                 alt={`${work.title} ${idx + 1}`}
//                 className={`w-full h-48 object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 ${
//                   imageLoading[idx] ? "opacity-0" : "opacity-100"
//                 }`}
//                 onLoad={() =>
//                   setImageLoading((prev) => {
//                     const updated = [...prev];
//                     updated[idx] = false;
//                     return updated;
//                   })
//                 }
//                 onClick={() => openLightbox(idx)}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Load More button */}
//         {visibleCount < images.length && (
//           <div className="flex justify-center mt-6">
//             <button
//               onClick={handleLoadMore}
//               className="mt-8 !bg-[#013998] hover:bg-[#0252c8] text-white px-6 sm:px-8 py-3 rounded-full"
//   >
//               Load More
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {lightboxOpen && (
//           <motion.div
//             className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             {/* Close */}
//             <span
//               className="absolute top-5 right-5 text-white text-4xl cursor-pointer hover:text-yellow-500 z-50"
//               onClick={() => setLightboxOpen(false)}
//             >
//               &times;
//             </span>

//             {/* Left arrow */}
//             <span
//               className="absolute left-5 text-white text-4xl cursor-pointer hover:text-yellow-500 z-50"
//               onClick={prevImage}
//             >
//               &#10094;
//             </span>

//             {/* Right arrow */}
//             <span
//               className="absolute right-5 text-white text-4xl cursor-pointer hover:text-yellow-500 z-50"
//               onClick={nextImage}
//             >
//               &#10095;
//             </span>

//             {/* Loader for lightbox */}
//             {lightboxLoading && (
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-yellow-500"></div>
//               </div>
//             )}

//             {/* Image */}
//             <motion.img
//               key={currentImage}
//               src={images[currentImage]}
//               alt={`${work.title} ${currentImage + 1}`}
//               className={`max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg ${
//                 lightboxLoading ? "opacity-0" : "opacity-100"
//               }`}
//               onLoad={() => setLightboxLoading(false)}
//               initial={{ x: 300, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: -300, opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <Footer />
//     </div>
//   );
// }

// src/pages/PortfolioDetailPage.jsx
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import worksData from "../data/worksData";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Folder, Play, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

export default function PortfolioDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const workId = parseInt(id);
  const work = worksData.find((w) => w.id === workId);

  if (!work) {
    return (
      <div className="min-h-screen w-full flex flex-col bg-[#040d1c] text-white relative overflow-hidden">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0a1a2f]/60 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/5"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Project not found</h2>
            <button
              onClick={() => navigate("/portfolio")}
              className="px-6 py-3 bg-yellow-500 text-[#040d1c] rounded-full font-semibold hover:bg-yellow-400 transition-colors"
            >
              Back to Portfolio
            </button>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  const images =
    Array.isArray(work.images) && work.images.length > 0
      ? work.images
      : [work.image];

  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(Math.min(4, images.length));
  const [lightboxLoading, setLightboxLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(Array(images.length).fill(true));
  const [videoLoading, setVideoLoading] = useState(true);

  useEffect(() => {
    setImageLoading((prev) => {
      const newLoading = [...prev];
      while (newLoading.length < images.length) newLoading.push(true);
      return newLoading;
    });
  }, [images.length]);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxLoading(true);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setLightboxLoading(true);
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setLightboxLoading(true);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleLoadMore = () => setVisibleCount(images.length);

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#040d1c] text-white relative overflow-hidden">
      <Navbar />

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] rounded-full bg-[#013998] opacity-20 blur-[80px] sm:blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[200px] sm:w-[400px] md:w-[500px] h-[200px] sm:h-[400px] md:h-[500px] rounded-full bg-[#013998] opacity-15 blur-[60px] sm:blur-[100px]"></div>
      </div>

      {/* Back Button */}
      <motion.div
        className="w-full pt-28 sm:pt-32 px-4 sm:px-6 lg:px-16 relative z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={() => navigate("/portfolio")}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors text-sm sm:text-base mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          Back to Portfolio
        </button>
      </motion.div>

      {/* Header */}
      <motion.div
        className="w-full pb-8 sm:pb-12 text-center px-4 sm:px-6 relative z-10"
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
          <Folder className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
          <span className="text-yellow-500 text-xs sm:text-sm font-medium tracking-wide uppercase">
            {work.service}
          </span>
        </motion.div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
          {work.title}
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0">
          {work.description}
        </p>
      </motion.div>

      {/* Video + Details Section */}
      <section className="relative z-10 w-full px-4 sm:px-6 lg:px-16 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0a1a2f]/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/5 p-4 sm:p-6 lg:p-8"
          >
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
              {/* Video */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-[#111827]">
                  {videoLoading && work.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 border-t-2 border-yellow-500"></div>
                    </div>
                  )}

                  {work.videoUrl ? (
                    <iframe
                      className="w-full h-full"
                      src={work.videoUrl}
                      title={work.title}
                      allowFullScreen
                      onLoad={() => setVideoLoading(false)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <Play className="w-12 h-12 sm:w-16 sm:h-16 text-gray-600 mb-2" />
                      <p className="text-gray-500 text-sm sm:text-base">
                        No video available for this project.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-3 sm:mb-4">
                  Project Details
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  {work.details || work.description}
                </p>
                
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-500 text-xs sm:text-sm border border-yellow-500/20">
                    {work.service}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="relative z-10 w-full px-4 sm:px-6 lg:px-16 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0a1a2f]/80 border border-yellow-500/30 mb-3 sm:mb-4">
              <ImageIcon className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
              <span className="text-yellow-500 text-xs sm:text-sm font-medium tracking-wide uppercase">
                Gallery
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Project <span className="text-yellow-500">Gallery</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {images.slice(0, visibleCount).map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <div className="relative w-full h-40 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden bg-[#0a1a2f]/60 border border-white/5 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)]">
                  {imageLoading[idx] && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-yellow-500"></div>
                    </div>
                  )}

                  <img
                    src={img}
                    loading="lazy"
                    alt={`${work.title} ${idx + 1}`}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                      imageLoading[idx] ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={() =>
                      setImageLoading((prev) => {
                        const updated = [...prev];
                        updated[idx] = false;
                        return updated;
                      })
                    }
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More button */}
          {visibleCount < images.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center mt-8 sm:mt-10"
            >
              <button
                onClick={handleLoadMore}
                className="!bg-[#013998] hover:bg-[#0252c8] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#013998]/30"
              >
                Load More
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-yellow-500 transition-colors z-50 p-2"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Left arrow */}
            <button
              className="absolute left-4 sm:left-6 text-white hover:text-yellow-500 transition-colors z-50 p-2"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            {/* Right arrow */}
            <button
              className="absolute right-4 sm:right-6 text-white hover:text-yellow-500 transition-colors z-50 p-2"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            {/* Loader */}
            {lightboxLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-yellow-500"></div>
              </div>
            )}

            {/* Image */}
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt={`${work.title} ${currentImage + 1}`}
              className={`max-w-[90vw] max-h-[85vh] object-contain rounded-lg sm:rounded-2xl ${
                lightboxLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setLightboxLoading(false)}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}