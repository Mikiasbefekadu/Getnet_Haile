// src/pages/PortfolioDetailPage.jsx
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import worksData from "../data/worksData";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioDetailPage() {
  const { id } = useParams();

  // Convert id to number safely
  const workId = parseInt(id);
  const work = worksData.find((w) => w.id === workId);

  // If work not found
  if (!work) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#040d1c]">
        <h2 className="text-2xl mb-4">Project not found</h2>
        <Link
          to="/portfolio"
          className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400"
        >
          Back to Portfolio
        </Link>
      </div>
    );
  }

  // Gallery images (fallback to main image if none)
  const images = Array.isArray(work.images) && work.images.length > 0 ? work.images : [work.image];

  // States
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(Math.min(4, images.length));

  // Handlers
  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  const handleLoadMore = () => setVisibleCount(images.length);

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#040d1c] text-white">
      <Navbar />

      {/* Banner */}
      <img src={work.image} alt={work.title} className="w-full h-64 object-cover" />

      {/* Video + Description */}
      <div className="w-full py-10 px-4 md:px-20 flex flex-col md:flex-row gap-6">
        {/* Video */}
        {work.videoUrl ? (
          <iframe
            className="w-full md:w-1/2 h-80 md:h-96 rounded-lg shadow-lg"
            src={work.videoUrl}
            title={work.title}
            allowFullScreen
          />
        ) : (
          <div className="w-full md:w-1/2 h-80 md:h-96 flex items-center justify-center bg-gray-800 rounded-lg">
            <p className="text-gray-400">No video available for this project.</p>
          </div>
        )}

        {/* Description */}
        <div className="md:w-1/2 text-white/90">
          <h1 className="text-3xl font-bold text-yellow-500">{work.title}</h1>
          <h2 className="text-gray-300 text-lg my-2">{work.service}</h2>
          <p className="mb-2">{work.description}</p>
          <p>{work.details}</p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="px-4 md:px-20 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.slice(0, visibleCount).map((img, idx) => (
            <img
              key={idx}
              src={img}
              loading="lazy"
              alt={`${work.title} ${idx + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
              onClick={() => openLightbox(idx)}
            />
          ))}
        </div>

        {/* Load More button */}
        {visibleCount < images.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>

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
            <span
              className="absolute top-5 right-5 text-white text-4xl cursor-pointer hover:text-yellow-500 z-50"
              onClick={() => setLightboxOpen(false)}
            >
              &times;
            </span>

            {/* Left arrow */}
            <span
              className="absolute left-5 text-white text-4xl cursor-pointer hover:text-yellow-500 z-50"
              onClick={prevImage}
            >
              &#10094;
            </span>

            {/* Right arrow */}
            <span
              className="absolute right-5 text-white text-4xl cursor-pointer hover:text-yellow-500 z-50"
              onClick={nextImage}
            >
              &#10095;
            </span>

            {/* Image */}
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt={`${work.title} ${currentImage + 1}`}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
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
