"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=800&auto=format&fit=crop",
    alt: "Classic lash extensions result",
    category: "classic",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1516914589923-f105f1535f88?q=80&w=800&auto=format&fit=crop",
    alt: "Volume lash extensions",
    category: "volume",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1560577707-c9aec67af1b1?q=80&w=800&auto=format&fit=crop",
    alt: "Natural lash enhancement",
    category: "classic",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=800&auto=format&fit=crop",
    alt: "Mega volume lashes",
    category: "mega",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?q=80&w=800&auto=format&fit=crop",
    alt: "Lash lift result",
    category: "lift",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=800&auto=format&fit=crop",
    alt: "Beautiful lash extensions",
    category: "volume",
  },
];

export function Gallery() {
  const t = useTranslations("gallery");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-28 relative overflow-hidden bg-soft-pink/20">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-champagne-gold/10 blur-3xl -translate-x-1/2" />
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-blush-pink/20 blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-rose-gold/10 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="overline mb-4 block">{t("overline")}</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
            <span className="text-gradient">{t("title")}</span>
          </h2>
          <p className="text-taupe text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Masonry-style Gallery Grid */}
        <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openLightbox(index)}
                className="cursor-pointer relative overflow-hidden rounded-2xl group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={index % 3 === 0 ? 500 : 300}
                  className="object-cover w-full transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-full bg-champagne-gold/80 backdrop-blur-sm">
                    {image.category}
                  </span>
                </div>

                {/* Decorative border on hover */}
                <div className="absolute inset-0 border-2 border-champagne-gold/0 group-hover:border-champagne-gold/30 rounded-2xl transition-colors duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-md p-4"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] w-full h-full"
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain rounded-2xl"
                sizes="100vw"
              />
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-champagne-gold">{selectedImage + 1}</span>
              <span className="mx-2">/</span>
              <span>{galleryImages.length}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
