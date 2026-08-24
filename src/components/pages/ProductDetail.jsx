function ProductDetail() {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100 flex flex-col justify-between">
      {/* Encabezado */}
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800">Producto</h2>
      </div>

      {/* Cuerpo */}
      <div className="px-6 py-4 flex flex-col gap-3">
        {/* Imagen del producto */}
        <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="https://unsplash.com"
            alt="Imagen de ejemplo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Categoría */}
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full self-start">
          Tecnología
        </span>

        {/* Descripción */}
        <p className="text-sm text-gray-600 leading-relaxed">
          Este es un reloj inteligente de alta calidad con múltiples funciones
          para el deporte y la salud.
        </p>

        {/* Precio */}
        <div className="text-2xl font-black text-gray-900 mt-1">$149.99</div>
      </div>

      {/* Pie */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-end gap-3">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Aceptar
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
