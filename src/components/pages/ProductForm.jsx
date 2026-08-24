import { useForm } from "react-hook-form";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

const ProductForm = ({ titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { id } = useParams();
  const navegacion = useNavigate();

  const { productos, setProductos } = useAppContext();

  useEffect(() => {
    if (titulo.includes("Editar")) {
      const productoBuscado = buscarProducto(id);
      //dibuja en el formulario cada valor
      setValue("nombreProducto", productoBuscado.nombreProducto);
      setValue("precio", productoBuscado.precio);
      setValue("imagen", productoBuscado.imagen);
      setValue("categoria", productoBuscado.categoria);
      setValue("descripcion", productoBuscado.descripcion);
      setValue("stock", productoBuscado.stock);
    }
  }, []);

  const onSubmit = (data, e) => {
    console.log(data);
    if (titulo.includes("Crear")) {
      crearProducto(data);
      Swal.fire({
        title: "Producto creado",
        text: `El Producto '${data.nombreProducto}' fue creado correctamente`,
        icon: "success",
        background: "#18181b",
        color: "#f4f4f5",
        confirmButtonColor: "#3b82f6",
      });
      e.target.reset();
    } else {
      editarProducto(id, data);
      Swal.fire({
        title: "Producto editado",
        text: `El Producto '${data.nombreProducto}' fue editado correctamente`,
        icon: "success",
        background: "#18181b",
        color: "#f4f4f5",
        confirmButtonColor: "#3b82f6",
      });
      navegacion("/admin");
    }
  };

  const crearProducto = (dataProducto) => {
    const productoNuevo = {
      ...dataProducto,
      id: crypto.randomUUID(),
    };
    setProductos([...productos, productoNuevo]);
  };

  const editarProducto = (idProducto, productoEditar) => {
    const productosEditados = productos.map((itemProducto) => {
      if (itemProducto.id === idProducto) {
        return { ...itemProducto, ...productoEditar };
      }
      return itemProducto;
    });
    setProductos(productosEditados);
  };

  const buscarProducto = (idProducto) => {
    return productos.find((item) => item.id === idProducto);
  };

  const inputClass = (hasError) => `
    w-full px-4 py-2.5 bg-card border rounded-lg text-text 
    focus:outline-none focus:ring-2 focus:ring-accent transition-all
    ${hasError ? "border-danger" : "border-line"}
  `;

  return (
    <section className="max-w-4xl mx-auto animate-fadeIn">
      <div className="bg-card p-8 rounded-2xl border border-line shadow-xl">
        <h1 className="text-3xl font-bold text-accent mb-8 border-b border-line pb-4">
          {titulo}
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit((data, e) => onSubmit(data, e))}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre del Producto */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-muted mb-2">
                Nombre del Producto*
              </label>
              <input
                type="text"
                placeholder="Ej: Teclado Gamer"
                className={inputClass(!!errors.nombreProducto)}
                {...register("nombreProducto", {
                  required: "El nombre del producto es obligatorio",
                  minLength: { value: 5, message: "Mínimo 5 caracteres" },
                  maxLength: { value: 100, message: "Máximo 100 caracteres" },
                })}
              />
              <p className="text-danger text-xs mt-1 italic">
                {errors.nombreProducto?.message}
              </p>
            </div>

            {/* Categoría */}
            <div>
              <label className="block text-sm font-medium text-muted mb-2">
                Categoría*
              </label>
              <select
                className={inputClass(!!errors.categoria)}
                {...register("categoria", {
                  required: "Seleccione una categoría",
                })}
              >
                <option value="" className="bg-bar">
                  Seleccione una opción
                </option>
                <option value="Notebooks" className="bg-bar">
                  Notebooks
                </option>
                <option value="Monitores" className="bg-bar">
                  Monitores
                </option>
                <option value="Periféricos" className="bg-bar">
                  Periféricos
                </option>
                <option value="Audio" className="bg-bar">
                  Audio
                </option>
                <option value="Almacenamiento" className="bg-bar">
                  Almacenamiento
                </option>
              </select>
              <p className="text-danger text-xs mt-1 italic">
                {errors.categoria?.message}
              </p>
            </div>

            {/* URL Imagen */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-muted mb-2">
                URL de Imagen*
              </label>
              <input
                type="text"
                placeholder="https://ejemplo.com/imagen.jpg"
                className={inputClass(!!errors.imagen)}
                {...register("imagen", {
                  required: "La URL es obligatoria",
                  pattern: {
                    value: /\.(jpg|jpeg|png|webp|avif|svg)$/,
                    message:
                      "Debe ser una URL de imagen válida (jpg, png, webp, etc.)",
                  },
                })}
              />
              <p className="text-danger text-xs mt-1 italic">
                {errors.imagen?.message}
              </p>
            </div>

            {/* Descripción */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-muted mb-2">
                Descripción*
              </label>
              <textarea
                rows={4}
                placeholder="Describa el producto"
                className={inputClass(!!errors.descripcion)}
                {...register("descripcion", {
                  required: "La descripción es obligatoria",
                  minLength: { value: 10, message: "Mínimo 10 caracteres" },
                  maxLength: { value: 500, message: "Máximo 500 caracteres" },
                })}
              />
              <p className="text-danger text-xs mt-1 italic">
                {errors.descripcion?.message}
              </p>
            </div>

            {/* Precio */}
            <div>
              <label className="block text-sm font-medium text-muted mb-2">
                Precio*
              </label>
              <input
                type="number"
                placeholder="Ej: $50000"
                className={inputClass(!!errors.precio)}
                {...register("precio", {
                  required: "El precio es obligatorio",
                  min: { value: 100, message: "Mínimo $100" },
                  valueAsNumber: true,
                })}
              />
              <p className="text-danger text-xs mt-1 italic">
                {errors.precio?.message}
              </p>
            </div>

            {/* Stock */}
            <div>
              <label className="block text-sm font-medium text-muted mb-2">
                Stock*
              </label>
              <input
                type="number"
                placeholder="Ej: 100"
                className={inputClass(!!errors.stock)}
                {...register("stock", {
                  required: "La cantidad de unidades en stock es obligatoria",
                  min: { value: 1, message: "Mínimo 1 producto" },
                  valueAsNumber: true,
                })}
              />
              <p className="text-danger text-xs mt-1 italic">
                {errors.stock?.message}
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-accent hover:bg-violet-500 text-white font-bold rounded-lg transition-all active:scale-95 shadow-lg shadow-blue-900/20"
            >
              Guardar Producto
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProductForm;
