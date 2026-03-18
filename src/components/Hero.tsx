export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-stone-900 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.05) 35px, rgba(255,255,255,0.05) 70px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="mb-6 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5">
          <span className="text-sm font-medium text-amber-400">
            Calidad y experiencia en cada proyecto
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Tabla Roca,{" "}
          <span className="text-amber-500">Remodelación</span> y Acabados
        </h1>

        <p className="text-lg sm:text-xl text-stone-300 mb-10 max-w-2xl mx-auto">
          Transformamos espacios con profesionalismo. Fachadas, divisiones,
          closets, molduras, pintura y más. Tu proyecto en las mejores manos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="rounded-lg bg-amber-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/25"
          >
            Solicitar Cotización
          </a>
          <a
            href="#galeria"
            className="rounded-lg border border-stone-600 px-8 py-3.5 text-base font-semibold text-stone-300 hover:border-amber-500 hover:text-amber-400 transition-colors"
          >
            Ver Trabajos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-stone-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
