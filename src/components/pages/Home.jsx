import { useAppContext } from "../../context/AppContext";
import ProductCard from "../services/ProductCard";


const Home = () => {
  const { productos } = useAppContext();
  return (
    <section className="space-y-8 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-line pb-5 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-text tracking-tight">
            Catálogo de <span className="text-accent">Productos</span>
          </h1>
          <p className="text-text mt-1 text-sm">
            Explora nuestras productos de última generación.
          </p>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto}/>
          ))
        ) : (
          <>
            <div className="flex flex-col items-center justify-center py-20 bg-zinc-900/50 rounded-xl border border-dashed border-zinc-800">
              <i className="bi bi-search text-4xl text-zinc-700 mb-4"></i>
              <p className="text-zinc-500">
                No se encontraron servicios disponibles.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
