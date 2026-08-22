import { Navigate, Outlet } from "react-router";
import { useAppContext } from "../../context/AppContext";

function ProtectorRutas() {
  const { usuarioLogueado } = useAppContext();

  if (!usuarioLogueado) {
    return <Navigate to="login" replace />;
  }
  return <Outlet />;
}

export default ProtectorRutas;
