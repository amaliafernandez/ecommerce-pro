import { Link } from "react-router";
import { FaInstagram, FaFacebookF, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FiZap } from "react-icons/fi";
import { FaCcVisa, FaCcMastercard, FaRegCreditCard, FaMoneyBillWave } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-bar border-t border-line mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Marca + redes */}
        <div>
          <p className="flex items-center gap-2 text-lg font-medium">
            <FiZap className="text-accent" />
            <span>
              PRO<span className="text-accent">tech</span>
            </span>
          </p>
          <p className="mt-3 text-sm text-muted max-w-xs leading-relaxed">TECNOLOGÍA PROFESIONAL AL MEJOR PRECIO. ENVÍOS A TODO EL PAÍS.</p>
          <div className="flex gap-3 mt-4">
            {[FaInstagram, FaFacebookF, FaXTwitter, FaWhatsapp].map((Icono, i) => (
              <span key={i} className="flex h-8 w-8 items-center justify-center rounded-lg bg-card border border-line text-muted">
                <Icono className="text-base" />
              </span>
            ))}
          </div>
        </div>

        {/* Categorías */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-4">CATEGORÍAS</p>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-muted hover:text-text">
              NOTEBOOKS
            </Link>
            <Link to="/" className="text-sm text-muted hover:text-text">
              MONITORES
            </Link>
            <Link to="/" className="text-sm text-muted hover:text-text">
              PERIFÉRICOS
            </Link>
            <Link to="/" className="text-sm text-muted hover:text-text">
              AUDIO
            </Link>
          </div>
        </div>

        {/* Ayuda */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-4">AYUDA</p>
          <div className="flex flex-col gap-2">
            <Link to="/nosotros" className="text-sm text-muted hover:text-text">
              QUIÉNES SOMOS
            </Link>
            <Link to="/NotFound" className="text-sm text-muted hover:text-text">
              CONTACTO
            </Link>
            <Link to="/NotFound" className="text-sm text-muted hover:text-text">
              DEFENSA AL CONSUMIDOR
            </Link>
            <Link to="/NotFound" className="text-sm text-muted hover:text-text">
              ENVÍOS
            </Link>
          </div>
        </div>

        {/* Medios de pago */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-4">MEDIOS DE PAGO</p>
          <p className="text-sm text-muted mb-3 leading-relaxed">ACEPTAMOS LAS PRINCIPALES TARJETAS Y MEDIOS DE PAGO.</p>
          <div className="flex gap-3 text-3xl text-muted">
            <FaCcVisa />
            <FaCcMastercard />
            <FaRegCreditCard />
            <FaMoneyBillWave />
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-line">
        <p className="max-w-6xl mx-auto px-6 py-4 text-xs text-muted text-center">© 2026 PROtech. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
