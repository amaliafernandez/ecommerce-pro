import {LuLock, LuSearch, LuSettings, LuTrash2, LuUser} from "react-icons/lu";
import {useState} from "react";
import Swal from "sweetalert2";
import {NavLink} from "react-router";

function Rol({rol}) {
    const esAdmin = rol === "Admin";
    return (
        <span className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium border ${
            esAdmin ? "bg-indigo-950/60 border-indigo-500/40 text-indigo-300" : "bg-white/5 border-white/10 text-slate-300"}`}>
            {rol}
        </span>
    );
}

function Button({label, to}) {
    return (
        <NavLink
            to={to}
            className={({isActive}) =>
                `rounded-xl px-6 py-3 text-base font-medium border transition-colors ${
                    isActive
                        ? "border-indigo-500 text-indigo-400 bg-white/[0.03]"
                        : "border-white/10 text-slate-300 bg-white/[0.02] hover:bg-white/[0.05]"
                }`
            }>
            {label}
        </NavLink>
    );
}

function AdminUsuarios() {
    // Inicializo el LocalStorage
    const [usuarios, setUsuarios] = useState(() => {
        const stored = localStorage.getItem("usuarios");
        return stored ? JSON.parse(stored) : [];
    });

    // Busqueda
    const [busqueda, setBusqueda] = useState("");

    const usuariosFiltrados = usuarios.filter((usuario) =>
        usuario.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        usuario.email.toLowerCase().includes(busqueda.toLowerCase())
    );

    const handleEliminar = (id) => {
        const usuario = usuarios.find((u) => u.id === id);
        if (usuario?.rol === "Admin") return; // seguridad extra

        Swal.fire({
            title: "¿Eliminar usuario?",
            text: `Esta acción no se puede deshacer.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
            background: "#191c22",
            color: "#e8eaed",
            confirmButtonColor: "#d55b5b",
            cancelButtonColor: "#3a3d45",
        }).then((resultado) => {
            if (resultado.isConfirmed) {
                const nuevosUsuarios = usuarios.filter((u) => u.id !== id);
                setUsuarios(nuevosUsuarios);
                localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));

                Swal.fire({
                    title: "Eliminado",
                    text: "El usuario fue eliminado correctamente.",
                    icon: "success",
                    background: "#191c22",
                    color: "#e8eaed",
                    confirmButtonColor: "#7c6cff",
                });
            }
        });
    };

    return (
        <div className="min-h-screen bg-[#0a0b0f] text-slate-100 font-sans antialiased">
            <div className="mx-auto max-w-6xl px-6 py-8">
                <header className="flex items-center justify-between border-b border-white/10 pb-6">
                    <div className="flex items-center gap-3">
                        <LuSettings className="h-7 w-7 text-indigo-400" strokeWidth={1.8}/>
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Panel de Administración
                        </h2>
                    </div>

                    <button
                        type="button"
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-slate-200 hover:bg-white/[0.06] transition-colors">
                        <LuUser className="h-4 w-4" strokeWidth={1.8}/>
                        Admin
                    </button>
                </header>
                <nav className="mt-8 flex gap-4">
                    <Button label="Inventario" to="/admin"/>
                    <Button label="Usuarios" to="/admin/usuarios"/>
                </nav>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <h2 className="text-xl font-semibold">Usuarios registrados</h2>
                        <span
                            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1 text-sm text-slate-400">
                          {usuariosFiltrados.length} en total
                        </span>
                    </div>

                    <div className="relative">
                        <LuSearch
                            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                            strokeWidth={1.8}
                        />
                        <input
                            type="text"
                            placeholder="Buscar usuario..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                            className="w-72 rounded-full border border-white/10 bg-white/[0.03] py-2.5 pl-11 pr-4 text-sm text-slate-200 placeholder:text-slate-500 outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20"
                        />
                    </div>
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015]">
                    <div
                        className="grid grid-cols-[2fr_2fr_1fr_0.5fr] gap-4 border-b border-white/10 px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                        <span>Nombre</span>
                        <span>Email</span>
                        <span>Rol</span>
                        <span className="text-right">Acción</span>
                    </div>
                    <ul>
                        {usuariosFiltrados.map((usuario) => {
                            const esAdmin = usuario.rol === "Admin";
                            return (<li
                                key={usuario.id}
                                className="grid grid-cols-[2fr_2fr_1fr_0.5fr] items-center gap-4 border-b border-white/5 px-6 py-4 last:border-b-0 hover:bg-white/[0.02] transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                            <span
                                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-sm font-semibold text-indigo-300">
                                              {usuario.iniciales}
                                            </span>
                                    <span className="font-medium text-slate-100">
                                              {usuario.nombre}
                                            </span>
                                </div>

                                <span className="text-slate-400">{usuario.email}</span>

                                <Rol rol={usuario.rol}/>

                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        disabled={esAdmin}
                                        onClick={() => handleEliminar(usuario.id)}
                                        title={esAdmin ? "Los usuarios Admin no se pueden eliminar" : "Eliminar usuario"}
                                        className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${esAdmin ? "text-slate-600 cursor-not-allowed" : "text-red-400 hover:bg-red-500/10"}`}>
                                        {esAdmin ? (<LuLock className="h-4 w-4" strokeWidth={1.8}/>) : (
                                            <LuTrash2 className="h-4 w-4" strokeWidth={1.8}/>)}
                                    </button>
                                </div>
                            </li>);
                        })}
                    </ul>
                </div>
                <div className="mt-6 flex justify-center">
                    <NavLink
                        to="/"
                        className="rounded-xl border border-indigo-500 bg-white/[0.03] px-6 py-3 text-base font-medium text-indigo-400 transition-colors hover:bg-white/[0.06]">
                         Inicio
                    </NavLink>
                </div>
            </div>
        </div>);
}


export default AdminUsuarios;