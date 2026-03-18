"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, images.length));
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  }, []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null && prev < images.length - 1 ? prev + 1 : prev
    );
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 mb-6">
            <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">
              Portafolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            Galería de Trabajos
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Conoce la calidad de nuestro trabajo a través de proyectos
            realizados.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 space-y-4 sm:space-y-5">
          {images.slice(0, visibleCount).map((src, index) => (
            <div
              key={src}
              className="break-inside-avoid group overflow-hidden rounded-2xl cursor-pointer relative"
              onClick={() => setLightboxIndex(index)}
            >
              <Image
                src={src}
                alt={`Trabajo realizado ${index + 1}`}
                width={600}
                height={450}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading={index < 6 ? "eager" : "lazy"}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                  Ver imagen
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < images.length && (
          <div className="text-center mt-14">
            <button
              onClick={showMore}
              className="rounded-xl border-2 border-amber-600 px-8 py-3.5 text-base font-semibold text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-amber-600/25"
            >
              Ver Más Trabajos ({images.length - visibleCount} restantes)
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Counter */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10 cursor-pointer"
            aria-label="Cerrar"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation buttons */}
          {lightboxIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white/50 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-10 cursor-pointer"
              aria-label="Anterior"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {lightboxIndex < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white/50 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-10 cursor-pointer"
              aria-label="Siguiente"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-h-[85vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`Trabajo ${lightboxIndex + 1}`}
              width={1200}
              height={900}
              className="max-h-[85vh] w-auto object-contain rounded-xl"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
