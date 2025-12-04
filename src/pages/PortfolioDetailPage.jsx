// src/pages/PortfolioDetailPage.jsx
import { useState, useEffect } from "react";
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
  const images =
    Array.isArray(work.images) && work.images.length > 0
      ? work.images
      : [work.image];

  // States
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(Math.min(4, images.length));
  const [lightboxLoading, setLightboxLoading] = useState(true);

  // ✅ Image loading states for gallery
  const [imageLoading, setImageLoading] = useState(Array(images.length).fill(true));

  // ✅ Video loading state
  const [videoLoading, setVideoLoading] = useState(true);

  // When "Load More" is clicked, extend loading state for new images
  useEffect(() => {
    setImageLoading((prev) => {
      const newLoading = [...prev];
      while (newLoading.length < images.length) newLoading.push(true);
      return newLoading;
    });
  }, [images.length]);

  // Handlers
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
    <div className="min-h-screen w-full flex flex-col bg-[#040d1c] text-white">
      <Navbar />

      {/* Banner */}
      <img
        src={work.image}
        alt={work.title}
        className="w-full h-64 object-cover"
      />

      {/* Video + Description */}
      <div className="w-full py-10 px-4 md:px-20 flex flex-col md:flex-row gap-6">
        {/* Video */}
        <div className="w-full md:w-1/2 relative">
          {videoLoading && work.videoUrl && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800/70 rounded-lg z-10">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-yellow-500"></div>
            </div>
          )}

          {work.videoUrl ? (
            <iframe
              className="w-full h-80 md:h-96 rounded-lg shadow-lg"
              src={work.videoUrl}
              title={work.title}
              allowFullScreen
              onLoad={() => setVideoLoading(false)}
            />
          ) : (
            <div className="w-full h-80 md:h-96 flex items-center justify-center bg-gray-800 rounded-lg">
              <p className="text-gray-400">
                No video available for this project.
              </p>
            </div>
          )}
        </div>

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
            <div key={idx} className="relative w-full h-48">
              {/* Loader */}
              {imageLoading[idx] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-lg">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-yellow-500"></div>
                </div>
              )}

              <img
                src={img}
                loading="lazy"
                alt={`${work.title} ${idx + 1}`}
                className={`w-full h-48 object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 ${
                  imageLoading[idx] ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() =>
                  setImageLoading((prev) => {
                    const updated = [...prev];
                    updated[idx] = false;
                    return updated;
                  })
                }
                onClick={() => openLightbox(idx)}
              />
            </div>
          ))}
        </div>

        {/* Load More button */}
        {visibleCount < images.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="mt-8 !bg-[#013998] hover:bg-[#0252c8] text-white px-6 sm:px-8 py-3 rounded-full"
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

            {/* Loader for lightbox */}
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
              className={`max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg ${
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
