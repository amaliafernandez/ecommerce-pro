import { Link } from "react-router";

const ProductCard = ({producto}) => {
  return (
    <article className="group bg-card rounded-xl overflow-hidden border border-line hover:border-violet-500/50 transition-all duration-300 shadow-lg hover:shadow-violet-500/10 flex flex-col h-full">
      {/* Contenedor de Imagen */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={producto.imagen}
          alt="imagen de prueba"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-card backdrop-blur-sm text-success/80 text-xs font-bold px-2 py-1 rounded border border-zinc-700 uppercase tracking-wider">
            {producto.categoria}
          </span>
        </div>
      </div>

      {/* Cuerpo de la Card */}
      <div className="p-5 flex flex-col grow">
        <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-blue-400 transition-colors">
          {producto.nombreProducto}
        </h3>

        <div className="pt-4 border-t border-zinc-800 mt-auto">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-xs text-zinc-500 uppercase font-semibold">
                Precio
              </p>
              <p className="text-lg font-mono text-zinc-200">${producto.precio}</p>
            </div>

            <Link
              to={`/product/${producto.id}`}
              className="bg-accent hover:bg-violet-500 text-text px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-md shadow-blue-900/20 active:scale-95"
            >Ver detalle
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
