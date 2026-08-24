import { Link, NavLink } from "react-router";
import { FiZap } from "react-icons/fi";
import { LuUser, LuLogOut } from "react-icons/lu";
import { useAppContext } from "../../context/AppContext";

function Navbar() {
  const { usuarioLogueado, setUsuarioLogueado } = useAppContext();

  const categorias = ["Notebooks", "Monitores", "Periféricos", "Audio", "Almacenamiento"];

  return (
    <nav className="bg-bar border-b border-line sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center gap-6 px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold shrink-0">
          <FiZap className="text-accent text-3xl" />
          <span>
            PRO<span className="text-accent">tech</span>
          </span>
        </Link>

        {/* Categorías */}
        <div className="hidden md:flex items-center gap-1 flex-1">
          {categorias.map((cat) => (
            <Link key={cat} to="/" className="text-sm text-muted px-3 py-2 rounded-lg hover:text-text hover:bg-card transition-colors">
              {cat}
            </Link>
          ))}
        </div>

        {/* Acceso + sesión */}
        <div className="flex items-center gap-4 ml-auto md:ml-0">
          {usuarioLogueado ? (
            <>
              <NavLink to="/admin" className="flex flex-col items-center text-xs text-muted hover:text-accent transition-colors">
                <LuUser className="text-xl" />
                Admin
              </NavLink>
              <button onClick={() => setUsuarioLogueado(false)} className="flex flex-col items-center text-xs text-muted hover:text-danger transition-colors">
                <LuLogOut className="text-xl" />
                Salir
              </button>
            </>
          ) : (
            <Link to="/login" className="flex flex-col items-center text-xs text-muted hover:text-accent transition-colors">
              <LuUser className="text-xl" />
              Ingresar
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
