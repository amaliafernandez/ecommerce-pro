import { Link } from "react-router";
import { useAppContext } from "../../context/AppContext";
import ItemTabla from "../services/ItemTabla";

const Admin = () => {
  const { productos } = useAppContext();

  return (
    <section className="animate-fadeIn space-y-6">
      {/* Header de la sección */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-card p-6 rounded-2xl border border-line">
        <div>
          <h1 className="text-2xl font-bold text-text">
            Panel de Administración
          </h1>
          <p className="text-muted text-sm">
            Gestiona el catálogo de productos disponibles.
          </p>
        </div>
        <Link
          to={"/admin/crear"}
          className="bg-accent hover:bg-violet-500 text-text px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20 active:scale-95 flex items-center gap-2"
        >
          Crear Producto
        </Link>
      </div>

      {/* Contenedor de la Tabla con Scroll Horizontal para móviles */}
      <div className="overflow-x-auto rounded-2xl border border-line bg-card">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-900/60 border-b border-line">
              <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted font-bold">
                #
              </th>
              <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted font-bold">
                Producto
              </th>
              <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted  font-bold">
                Categoria
              </th>
              <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted  font-bold">
                Precio
              </th>
              <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted  font-bold">
                Stock
              </th>
              <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted  font-bold text-center">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            {/* condicion ? si se cumple hago esto : si no se cumple la condicion */}
            {productos.length > 0 ? (
              productos.map((producto, indice) => (
                <ItemTabla
                  key={producto.id}
                  producto={producto}
                  fila={indice + 1}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-12 text-center text-zinc-500 italic"
                >
                  No hay productos registrados para administrar.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Admin;
