import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useAppContext } from "../../context/AppContext";
import { useEffect, useState } from "react";
import { FiEye, FiEyeOff, FiZap } from "react-icons/fi";

// Carga inicial de Usuarios
const usuariosIniciales = [
  {
    id: crypto.randomUUID(),
    iniciales: "AF",
    nombre: "Amalia Fernández",
    email: "amalia@mail.com",
    password: "admin123",
    rol: "Admin",
  },
  {
    id: crypto.randomUUID(),
    iniciales: "AR",
    nombre: "Andrea Reyes",
    email: "andrea@mail.com",
    rol: "Invitado",
  },
  {
    id: crypto.randomUUID(),
    iniciales: "SD",
    nombre: "Stefan Dios",
    email: "stefan@mail.com",
    password: "admin123",
    rol: "Admin",
  },
  {
    id: crypto.randomUUID(),
    iniciales: "JP",
    nombre: "Juan Pérez",
    email: "juanp@mail.com",
    rol: "Invitado",
  },
  {
    id: crypto.randomUUID(),
    iniciales: "UP",
    nombre: "Usuario Protech",
    email: "usuario@protech.com",
    password: "Usuario12345",
    rol: "Admin",
  },
];

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();
  const { setUsuarioLogueado } = useAppContext();
  const [mostrarPassword, setMostrarPassword] = useState(false);

  // Cargo el LocalStorage:
  useEffect(() => {
    const stored = localStorage.getItem("usuarios");
    if (!stored) {
      localStorage.setItem("usuarios", JSON.stringify(usuariosIniciales));
    }
  }, []);

  const onSubmit = (data) => {
    // Aca chequeo contra la lista de usuarios que esta en el storage del browser y chequeo el rol

    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    const usuario = usuarios.find((u) => u.email === data.email && u.rol === "Admin");

    if (usuario !== undefined && data.password === usuario.password) {
      setUsuarioLogueado({ nombre: "Administrador", rol: "admin" });
      Swal.fire({
        title: "¡Bienvenido!",
        text: "Ingresaste como administrador.",
        icon: "success",
        background: "#191c22",
        color: "#e8eaed",
        confirmButtonColor: "#7c6cff",
      });
      navegacion("/admin");
    } else {
      Swal.fire({
        title: "Error",
        text: "Las credenciales no son correctas.",
        icon: "error",
        background: "#191c22",
        color: "#e8eaed",
        confirmButtonColor: "#d55b5b",
      });
    }
  };

  return (
    <section className="flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-card border border-line rounded-2xl p-8">
        <h1 className="flex items-center justify-center gap-2 text-2xl font-bold">
          <FiZap className="text-accent" /> Iniciar sesión
        </h1>
        <p className="text-sm text-muted text-center mt-2 mb-6">Accedé al panel de administración de PROtech</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm text-muted mb-1">Email</label>
            <input
              type="email"
              placeholder="correo@dominio.com"
              className={`w-full px-4 py-2.5 bg-bg border rounded-lg text-text focus:outline-none focus:border-accent transition-colors ${errors.email ? "border-danger" : "border-line"}`}
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email no válido",
                },
              })}
            />
            {errors.email && <span className="text-danger text-xs mt-1 block">{errors.email.message}</span>}
          </div>

          <div>
            <label className="block text-sm text-muted mb-1">Contraseña</label>
            <div className="relative">
              <input
                type={mostrarPassword ? "text" : "password"}
                placeholder="••••••••"
                className={`w-full px-4 py-2.5 pr-11 bg-bg border rounded-lg text-text focus:outline-none focus:border-accent transition-colors ${errors.password ? "border-danger" : "border-line"}`}
                {...register("password", {
                  required: "La contraseña es obligatoria",
                })}
              />
              <button type="button" onClick={() => setMostrarPassword(!mostrarPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-text">
                {mostrarPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password && <span className="text-danger text-xs mt-1 block">{errors.password.message}</span>}
          </div>

          <button type="submit" className="w-full bg-accent text-bg py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Ingresar
          </button>
        </form>

        <p className="text-sm text-muted text-center mt-6">
          ¿No tenés cuenta?{" "}
          <Link to="/register" className="text-accent hover:underline">
            Registrate
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
