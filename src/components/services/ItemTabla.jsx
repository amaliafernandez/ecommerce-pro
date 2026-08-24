import { Link } from "react-router";


const ItemTabla = ({producto, fila}) => {

  return (
    <tr className="border-b border-card hover:bg-line/50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-text font-mono">
        {fila}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  text-text">
        {producto.nombreProducto}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  text-text">
        {producto.categoria}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm  text-text font-mono">
        ${producto.precio}
      </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm  text-text font-mono">
        {producto.stock} unid
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex gap-3">
          <Link
            className="text-warning hover:text-yellow-500 transition-colors flex items-center gap-1"
            to={`/admin/editar/${producto.id}`}
          >
            <i className="bi bi-pencil-square"></i> Editar
          </Link>

        </div>
      </td>
    </tr>
  );
};

export default ItemTabla;
