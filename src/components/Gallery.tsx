"use client";

import { useState } from "react";
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

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Galería de Trabajos
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            Conoce la calidad de nuestro trabajo a través de proyectos
            realizados.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.slice(0, visibleCount).map((src, index) => (
            <div
              key={src}
              className="break-inside-avoid cursor-pointer group overflow-hidden rounded-xl"
              onClick={() => setLightboxIndex(index)}
            >
              <Image
                src={src}
                alt={`Trabajo realizado ${index + 1}`}
                width={600}
                height={450}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                loading={index < 6 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {visibleCount < images.length && (
          <div className="text-center mt-12">
            <button
              onClick={showMore}
              className="rounded-lg border-2 border-amber-600 px-8 py-3 text-base font-semibold text-amber-600 hover:bg-amber-600 hover:text-white transition-colors"
            >
              Ver Más Trabajos ({images.length - visibleCount} restantes)
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
            aria-label="Cerrar"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {lightboxIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex - 1);
              }}
              className="absolute left-4 text-white/70 hover:text-white z-10"
              aria-label="Anterior"
            >
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {lightboxIndex < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex + 1);
              }}
              className="absolute right-4 text-white/70 hover:text-white z-10"
              aria-label="Siguiente"
            >
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`Trabajo ${lightboxIndex + 1}`}
              width={1200}
              height={900}
              className="max-h-[90vh] w-auto object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
