import { useAppContext } from "../../context/AppContext";
import { Link } from "react-router";
import ProductCard from "../services/ProductCard";
import Carousel from "../shared/Carousel";

const SAMPLE_SLIDES = [
  {
    image: "https://images.pexels.com/photos/249535/pexels-photo-249535.jpeg",
    title: "Notebook HP",
    description: "Notebook HP - Core I7 - SSD 512",
  },
  { 
    image: "https://images.pexels.com/photos/13162091/pexels-photo-13162091.jpeg",
    title: "Computadora de escritorio Bangho",
    description: "Core i5 - SSD - 16GB RAM",
  },
  {
    image: "https://images.pexels.com/photos/210926/pexels-photo-210926.jpeg",
    title: "Auriculares JBL",
    description: "Excelencia en sonido",
  },
];

const Home = () => {
  const { productos } = useAppContext();
  return (
    <section className="flex flex-col space-y-2 animate-fadeIn">
      <div className="bg-bg flex items-start justify-center p-1">
        <Carousel slides={SAMPLE_SLIDES} />
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-line p-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-text tracking-tight">
            Catálogo de <span className="text-accent">Productos</span>
          </h1>
          <p className="text-text mt-1 text-sm">
            Explora nuestras productos de última generación.
          </p>
        </div>
        <div>
          <Link
              to={"/filtro"}
              className="bg-accent hover:bg-violet-500 text-text px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-md shadow-blue-900/20 active:scale-95"
            >Buscar
            </Link>
        </div>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 gap-6">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
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
