import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { AppContext } from "./context/AppContext";
import ProtectorRutas from "./components/routes/ProtectorRutas";
import Home from "./components/pages/Home";
import ProductDetail from "./components/pages/ProductDetail";
import Admin from "./components/pages/Admin";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import NotFound from "./components/pages/NotFound";
import Layout from "./components/shared/Layout";
import Nosotros from "./components/nosotros/Nosotros";
import ProductForm from "./components/pages/ProductForm";
import AdminUsuarios from "./components/pages/admin/Admin/Admin_Usuarios";

function App() {
  const usuarioSession =
    JSON.parse(sessionStorage.getItem("usuarioKey")) || false;
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioSession);

  const productosLocal = JSON.parse(localStorage.getItem("productosKey")) || [];
  const [productos, setProductos] = useState(productosLocal);

  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado]);

  useEffect(() => {
    localStorage.setItem("productosKey", JSON.stringify(productos));
  }, [productos]);

  return (
    <AppContext.Provider
      value={{ usuarioLogueado, setUsuarioLogueado, productos, setProductos }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/admin" element={<ProtectorRutas />}>
              <Route index element={<Admin />} />

              <Route
                  path="crear"
                  element={<ProductForm titulo="Crear Producto" />}
                ></Route>
                <Route
                  path="editar/:id"
                  element={<ProductForm titulo="Editar Producto" />}
                ></Route>

              <Route
                  path="usuarios"
                  element={<AdminUsuarios titulo="Lista de Usuarios" />}
              ></Route>
              <Route
                  path="usuario/:id"
                  element={<AdminUsuarios titulo="Visualizar Producto" />}
              ></Route>
              <Route
                  path="crear_usuario"
                  element={<AdminUsuarios titulo="Crear Usuario" />}
              ></Route>

            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
