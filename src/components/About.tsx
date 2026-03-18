export default function About() {
  const commitments = [
    { text: "Puntualidad y compromiso", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { text: "Materiales de primera calidad", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
    { text: "Atención personalizada", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
    { text: "Presupuestos sin compromiso", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
    { text: "Garantía en todos los trabajos", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    { text: "Limpieza al terminar", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
  ];

  return (
    <section id="sobre-mi" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 mb-6">
              <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">
                Sobre Mí
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Experiencia y Compromiso en Cada Proyecto
            </h2>
            <p className="text-lg text-slate-600 mb-5 leading-relaxed">
              Soy Edith, profesional en construcción y remodelación con años de
              experiencia transformando espacios. Me especializo en trabajos de
              tabla roca, acabados y remodelación integral.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Cada proyecto lo realizo con dedicación, atención al detalle y
              materiales de primera calidad. Mi compromiso es entregar
              resultados que superen las expectativas de mis clientes.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 p-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-amber-600 mb-1">
                  100+
                </div>
                <div className="text-sm font-medium text-slate-600">
                  Proyectos Realizados
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 p-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-amber-600 mb-1">
                  100%
                </div>
                <div className="text-sm font-medium text-slate-600">
                  Clientes Satisfechos
                </div>
              </div>
            </div>
          </div>

          {/* Commitments card */}
          <div className="relative">
            {/* Decorative accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-100 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-slate-100 rounded-2xl -z-10" />

            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 lg:p-10">
              <h3 className="text-lg font-bold text-slate-900 mb-6">
                Nuestro Compromiso
              </h3>
              <div className="space-y-4">
                {commitments.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex-shrink-0 rounded-xl bg-white p-2.5 text-amber-600 shadow-sm border border-slate-100 group-hover:border-amber-200 group-hover:shadow-md transition-all duration-200">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={item.icon}
                        />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
