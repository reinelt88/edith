export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-amber-600/8 blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-3xl animate-pulse-soft" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-sm font-medium text-amber-300">
              Calidad y experiencia en cada proyecto
            </span>
          </div>
        </div>

        <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
          Tabla Roca,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            Remodelación
          </span>
          <br />
          y Acabados
        </h1>

        <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transformamos espacios con profesionalismo. Fachadas, divisiones,
          closets, molduras, pintura y más. Tu proyecto en las mejores manos.
        </p>

        <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="group rounded-xl bg-amber-600 px-8 py-4 text-base font-semibold text-white hover:bg-amber-500 transition-all duration-200 shadow-lg shadow-amber-600/25 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 cursor-pointer"
          >
            Solicitar Cotización
            <span className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="#galeria"
            className="rounded-xl border border-slate-600 px-8 py-4 text-base font-semibold text-slate-300 hover:border-amber-500/50 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer"
          >
            Ver Trabajos
          </a>
        </div>

        {/* Trust indicators */}
        <div className="animate-fade-in-up-delay-3 mt-20 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {[
            { value: "100+", label: "Proyectos" },
            { value: "8+", label: "Años de Experiencia" },
            { value: "100%", label: "Clientes Satisfechos" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
