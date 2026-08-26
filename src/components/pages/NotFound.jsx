import { Link } from "react-router";
import { LuPlugZap } from "react-icons/lu";

function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-card border border-line">
        <LuPlugZap className="text-4xl text-accent" />
      </div>

      <p className="mt-8 text-7xl font-bold tracking-tight">404</p>
      <p className="mt-2 text-xl font-medium text-text">Página no encontrada</p>
      <p className="mt-3 text-sm text-muted max-w-md leading-relaxed">La página que buscás no existe o fue movida. Volvé al catálogo para seguir viendo productos.</p>

      <Link to="/" className="mt-8 inline-flex items-center gap-2 bg-accent text-bg px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
