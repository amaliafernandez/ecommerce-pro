import { useParams } from "react-router";
import { useAppContext } from "../../context/AppContext";
import { useState, useEffect } from "react";

function ProductDetail({producto}) {
  // const { productos } = useAppContext();
  // const { id } = useParams();
  // const { setProducto} = useState()
  // console.log(id);

  // const buscarProducto = (idProducto) => {
  //   return productos.find((item) => item.id === idProducto);
  // };

  // useEffect(()=>{
  //   const productoBuscado = buscarProducto(id)
  //   setProducto(productoBuscado)
  // }, [])

  return (
    <div className="h-120 w-full flex items-center justify-between box-content self-auto border-4 p-2 rounded-xl overflow-hidden shadow-lg bg-bar border-line flex-col">
      {/* Encabezado */}
      <div className="w-full px-6 py-1 bg-card border-b border-line">
        <h2 className="text-xl font-bold">
          <span className="text-accent">
            Producto
          </span>
        </h2>
      </div>

      {/* Cuerpo */}
      <div className="w-full flex flex-row px-6 py-2 gap-3">
        {/* Imagen del producto */}
        <div className="h-90 w-250 bg-card rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/38006272/pexels-photo-38006272.jpeg"
            alt="Imagen de ejemplo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col px-6 py-2 gap-3 justify-around">
          {/* Categoría */}
          <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-card px-2.5 py-1 rounded-full self-end">
            categoria
          </span>

          {/* Descripción */}
          <p className="text-sm text-text leading-relaxed">Descripcion</p>

          {/* Precio */}
          <div className="text-2xl font-black text-success mt-1 self-center">
            $ precio
          </div>
        </div>
      </div>

      {/* Pie */}
      <div className="w-full px-6 py-2 bg-card border-t border-line flex items-center justify-end gap-3">
        <button
          type="button"
          className="px-4 py-2 text-sm text-text bg-accent border border-line hover:bg-violet-500 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20 active:scale-95 flex items-center gap-2"
        >
          Aceptar
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm text-text bg-accent border border-line hover:bg-violet-500 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20 active:scale-95 flex items-center gap-2"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
