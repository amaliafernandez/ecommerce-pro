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
import Nosotros from "./components/Nosotros/Nosotros";

function App() {
  const usuarioSession = JSON.parse(sessionStorage.getItem("usuarioKey")) || false;
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
    <AppContext.Provider value={{ usuarioLogueado, setUsuarioLogueado, productos, setProductos }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Ruta /about: la agrega Amalia con su About.jsx */}
          <Route path="/admin" element={<ProtectorRutas />}>
            <Route index element={<Admin />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App
