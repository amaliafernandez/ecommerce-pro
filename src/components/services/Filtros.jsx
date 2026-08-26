import { useState, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import ProductCard from "./ProductCard";

const Filtros = () => {
  const { productos, setProductos } = useAppContext();
  const [busqueda, setBusqueda] = useState("");

  const productosFiltrados = productos.filter((item) => {
    // Cambia 'nombre' por la propiedad de tu objeto que quieras buscar
    return (
      item.nombreProducto.toLowerCase().includes(busqueda.toLowerCase()) ||
      item.categoria.toLowerCase().includes(busqueda.toLowerCase())
    );
  });

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-line pb-5 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-text tracking-tight">
            Búsqueda de <span className="text-accent">Productos</span>
          </h1>
        </div>
        <div>
          <input
            type="text"
            id="nombre"
            placeholder="Buscar... "
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="peer w-full px-4 pt-2 pb-2 text-white bg-slate-900 border border-slate-700 rounded-lg outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((itemProducto) => (
            <ProductCard key={itemProducto.id} producto={itemProducto} />
          ))
        ) : (
          <>
            <div className="flex flex-col items-center justify-center py-20 bg-zinc-900/50 rounded-xl border border-dashed border-zinc-800">
              <i className="bi bi-search text-4xl text-zinc-700 mb-4"></i>
              <p className="text-zinc-500">
                No hay coincidencias.
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Filtros;
