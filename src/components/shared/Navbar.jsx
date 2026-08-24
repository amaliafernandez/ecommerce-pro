import { Link, NavLink } from "react-router";
import { FiZap } from "react-icons/fi";
import { useAppContext } from "../../context/AppContext";

function Navbar() {
  const { usuarioLogueado, setUsuarioLogueado } = useAppContext();

  const categorias = ["Notebooks", "Monitores", "Periféricos", "Audio", "Almacenamiento"];

  const linkStyles = ({ isActive }) => `text-sm transition-colors ${isActive ? "text-accent font-medium" : "text-muted hover:text-text"}`;

  return (
    <nav className="bg-bar border-b border-line sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center gap-6 px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1.5 text-lg font-medium shrink-0">
          <FiZap className="text-accent" />
          PRO<span className="text-accent">tech</span>
        </Link>

        {/* Categorías */}
        <div className="hidden md:flex items-center gap-5 flex-1">
          {categorias.map((cat) => (
            <Link key={cat} to="/" className="text-sm text-muted hover:text-text transition-colors">
              {cat}
            </Link>
          ))}
        </div>

        {/* Accesos + sesión */}
        <div className="flex items-center gap-5 ml-auto md:ml-0">
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
      </div>
    </nav>
  );
}

export default Navbar;
