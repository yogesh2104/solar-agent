"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image Slider */}
      <div className="relative aspect-video rounded-3xl overflow-hidden group border border-border/50">
        <motion.div
          key={activeImage}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <Image
            src={images[activeImage]}
            alt={`Project image ${activeImage + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Overlays & Controls */}
        <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black/60 to-transparent flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full bg-white/20 backdrop-blur-md border-white/20 text-white hover:bg-white/40"
              onClick={prevImage}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full bg-white/20 backdrop-blur-md border-white/20 text-white hover:bg-white/40"
              onClick={nextImage}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full bg-white/20 backdrop-blur-md border-white/20 text-white hover:bg-white/40"
            onClick={() => setIsLightboxOpen(true)}
          >
            <Maximize2 className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(i)}
            className={`relative flex-shrink-0 w-24 aspect-video rounded-xl overflow-hidden border-2 transition-all ${
              activeImage === i 
                ? "border-primary scale-105 shadow-md" 
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${i + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
          >
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-6 right-6 text-white hover:bg-white/10"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X className="w-8 h-8" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 hidden md:flex"
              onClick={prevImage}
            >
              <ChevronLeft className="w-10 h-10" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 hidden md:flex"
              onClick={nextImage}
            >
              <ChevronRight className="w-10 h-10" />
            </Button>

            <div className="relative w-full max-w-6xl aspect-video">
              <Image
                src={images[activeImage]}
                alt="Fullscreen project view"
                fill
                className="object-contain"
              />
            </div>
            
            <div className="absolute bottom-8 text-white/60 text-sm">
              {activeImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
