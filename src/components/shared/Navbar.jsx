import { Link, NavLink } from "react-router";
import { useAppContext } from "../../context/AppContext";

function Navbar() {
  const { usuarioLogueado, setUsuarioLogueado } = useAppContext();

  const linkStyles = ({ isActive }) => `text-sm transition-colors ${isActive ? "text-accent font-medium" : "text-muted hover:text-text"}`;

  return (
    <nav className="bg-bar border-b border-line sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center gap-6 px-4 py-3">
        <Link to="/" className="text-lg font-medium">
          PRO<span className="text-accent">tech</span>
        </Link>

        <div className="flex-1" />

        <NavLink to="/" className={linkStyles}>
          Catálogo
        </NavLink>
        <NavLink to="/about" className={linkStyles}>
          Nosotros
        </NavLink>

        {usuarioLogueado ? (
          <>
            <NavLink to="/admin" className={linkStyles}>
              Admin
            </NavLink>
            <button onClick={() => setUsuarioLogueado(false)} className="text-sm text-danger hover:opacity-80">
              Salir
            </button>
          </>
        ) : (
          <Link to="/login" className="text-sm bg-accent text-bg px-3 py-1.5 rounded-lg font-medium">
            Ingresar
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
