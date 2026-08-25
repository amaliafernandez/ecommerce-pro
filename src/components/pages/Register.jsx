import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router";
import Swal from "sweetalert2";
import { FiEye, FiEyeOff, FiCheckCircle, FiAlertCircle, FiZap } from "react-icons/fi";

function generarIniciales(nombre) {
  return nombre
      .trim()
      .split(" ")
      .filter(Boolean) // por si hay espacios dobles
      .map((palabra) => palabra[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
}

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [verPassword, setVerPassword] = useState(false);
  const navegacion = useNavigate();

  const emailValue = watch("email");
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue || "");

  const onSubmit = (data) => {
    // Traemos los usuarios ya registrados (o un array vacío si no hay)
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificamos que el email no esté ya registrado
    const existe = usuarios.some((u) => u.email === data.email);
    if (existe) {
      Swal.fire({
        title: "Email en uso",
        text: "Ya existe una cuenta con ese email.",
        icon: "error",
        background: "#191c22",
        color: "#e8eaed",
        confirmButtonColor: "#d55b5b",
      });
      return;
    }

    // Creamos el nuevo usuario con la estructura acordada
    const nuevoUsuario = {
      id: crypto.randomUUID(),
      iniciales: generarIniciales(data.nombre),
      nombre: data.nombre,
      email: data.email,
      password: data.password,
      rol: data.esAdmin ? "Admin" : "Invitado",
    };

    // Lo agregamos y guardamos en localStorage
    localStorage.setItem("usuarios", JSON.stringify([...usuarios, nuevoUsuario]));

    Swal.fire({
      title: "¡Cuenta creada!",
      text: "Ya podés iniciar sesión.",
      icon: "success",
      background: "#191c22",
      color: "#e8eaed",
      confirmButtonColor: "#7c6cff",
    });

    navegacion("/login");
  };

  const inputBase = "w-full px-4 py-2.5 bg-bg border rounded-lg text-text focus:outline-none focus:border-accent transition-colors";

  return (
    <section className="flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-card border border-line rounded-2xl p-8">
        <h1 className="flex items-center justify-center gap-2 text-2xl font-bold">
          <FiZap className="text-accent" /> Crear cuenta
        </h1>
        <p className="text-sm text-muted text-center mt-2 mb-6">Registrate para ser parte de PROtech</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Nombre */}
          <div>
            <label className="block text-sm text-muted mb-1">Nombre</label>
            <input
              type="text"
              placeholder="Tu nombre"
              className={`${inputBase} ${errors.nombre ? "border-danger" : "border-line"}`}
              {...register("nombre", {
                required: "El nombre es obligatorio",
                minLength: { value: 2, message: "Mínimo 2 caracteres" },
              })}
            />
            {errors.nombre && (
              <span className="flex items-center gap-1 text-danger text-xs mt-1">
                <FiAlertCircle /> {errors.nombre.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-muted mb-1">Email</label>
            <input
              type="email"
              placeholder="correo@dominio.com"
              className={`${inputBase} ${errors.email ? "border-danger" : "border-line"}`}
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email no válido",
                },
              })}
            />
            {errors.email ? (
              <span className="flex items-center gap-1 text-danger text-xs mt-1">
                <FiAlertCircle /> {errors.email.message}
              </span>
            ) : (
              emailValido && (
                <span className="flex items-center gap-1 text-success text-xs mt-1">
                  <FiCheckCircle /> Email válido
                </span>
              )
            )}
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-sm text-muted mb-1">Contraseña</label>
            <div className="relative">
              <input
                type={verPassword ? "text" : "password"}
                placeholder="••••••••"
                className={`${inputBase} pr-11 ${errors.password ? "border-danger" : "border-line"}`}
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: { value: 8, message: "Mínimo 8 caracteres" },
                })}
              />
              <button type="button" onClick={() => setVerPassword(!verPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-text">
                {verPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password && (
              <span className="flex items-center gap-1 text-danger text-xs mt-1">
                <FiAlertCircle /> {errors.password.message}
              </span>
            )}
          </div>
          {/* Rol */}
          <div className="flex items-center gap-2">
            <input
                type="checkbox"
                id="esAdmin"
                className="h-4 w-4 rounded border-line accent-accent"
                {...register("esAdmin")}
            />
            <label htmlFor="esAdmin" className="text-sm text-muted cursor-pointer">
              Crear cuenta como Administrador
            </label>
          </div>

          <button type="submit" className="w-full bg-accent text-bg py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Registrarme
          </button>
        </form>

        <p className="text-sm text-muted text-center mt-6">
          ¿Ya tenés cuenta?{" "}
          <Link to="/login" className="text-accent hover:underline">
            Ingresar
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
