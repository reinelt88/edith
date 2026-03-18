export default function Footer() {
  return (
    <footer className="bg-stone-950 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} Edith - Tabla Roca y
            Remodelación. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <a
              href="#inicio"
              className="text-sm text-stone-500 hover:text-amber-500 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-sm text-stone-500 hover:text-amber-500 transition-colors"
            >
              Servicios
            </a>
            <a
              href="#contacto"
              className="text-sm text-stone-500 hover:text-amber-500 transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
