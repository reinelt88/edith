export default function About() {
  return (
    <section id="sobre-mi" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
              Experiencia y Compromiso en Cada Proyecto
            </h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Soy Edith, profesional en construcción y remodelación con años de
              experiencia transformando espacios. Me especializo en trabajos de
              tabla roca, acabados y remodelación integral.
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Cada proyecto lo realizo con dedicación, atención al detalle y
              materiales de primera calidad. Mi compromiso es entregar
              resultados que superen las expectativas de mis clientes.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 rounded-xl bg-amber-50">
                <div className="text-3xl font-bold text-amber-600 mb-1">
                  100+
                </div>
                <div className="text-sm text-stone-500">
                  Proyectos Realizados
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-amber-50">
                <div className="text-3xl font-bold text-amber-600 mb-1">
                  100%
                </div>
                <div className="text-sm text-stone-500">
                  Clientes Satisfechos
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-amber-100 to-stone-100 p-8 lg:p-12">
              <div className="space-y-4">
                {[
                  "Puntualidad y compromiso",
                  "Materiales de primera calidad",
                  "Atención personalizada",
                  "Presupuestos sin compromiso",
                  "Garantía en todos los trabajos",
                  "Limpieza al terminar",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex-shrink-0 rounded-full bg-amber-500 p-1">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-stone-700 font-medium">{item}</span>
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
