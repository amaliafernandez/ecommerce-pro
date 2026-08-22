import { Link } from "react-router";
import { LuPlugZap } from "react-icons/lu";

function NotFound() {
  return (
    <div className="text-center py-20">
      <LuPlugZap className="mx-auto text-5x1 text-accent" />
      <p className="mt-4 text-6x1 font-medium tracking-wide">404</p>
      <p className="mt-2 text-lg  text-lg text-muted">Página no encontrada</p>
      <p className="mt-2 text-sm text-muted max-w-sm mx-auto leading-realaxed">La página que buscás no existe o fue movida. Volvé al catálogo para seguir viendo productos</p>
      <Link to="/" className="inline-block mt-6 bg-accent text-bg px-5 py-2.5 rounded-lg font-medium">
        {" "}
        Volver al inicio{" "}
      </Link>
    </div>
  );
}

export default NotFound;
