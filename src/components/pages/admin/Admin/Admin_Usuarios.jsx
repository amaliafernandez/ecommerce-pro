import {LuLock, LuSearch, LuSettings, LuTrash2, LuUser} from "react-icons/lu";

const usuarios = [
    {
        id: 1,
        iniciales: "AF",
        nombre: "Amalia Fernández",
        email: "amalia@mail.com",
        rol: "Admin",
    },
    {
        id: 2,
        iniciales: "AR",
        nombre: "Andrea Reyes",
        email: "andrea@mail.com",
        rol: "Invitado",
    },
    {
        id: 3,
        iniciales: "SD",
        nombre: "Stefan Dios",
        email: "stefan@mail.com",
        rol: "Admin",
    },
    {
        id: 4,
        iniciales: "JP",
        nombre: "Juan Pérez",
        email: "juanp@mail.com",
        rol: "Invitado",
    },
];

function Rol({rol}) {
    const esAdmin = rol === "Admin";
    return (
        <span className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium border ${
                esAdmin ? "bg-indigo-950/60 border-indigo-500/40 text-indigo-300" : "bg-white/5 border-white/10 text-slate-300"}`}>
            {rol}
        </span>
    );
}

function Button({label, active}) {
    return (
        <button
            type="button"
            className={`rounded-xl px-6 py-3 text-base font-medium border transition-colors ${active ? "border-indigo-500 text-indigo-400 bg-white/[0.03]" : "border-white/10 text-slate-300 bg-white/[0.02] hover:bg-white/[0.05]"}`}>
            {label}
        </button>
    );
}

function AdminUsuarios() {
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
                    <Button label="Inventario" active={false}/>
                    <Button label="Usuarios" active={true}/>
                </nav>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <h2 className="text-xl font-semibold">Usuarios registrados</h2>
                        <span
                            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1 text-sm text-slate-400">
                          {usuarios.length} en total
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
                        {usuarios.map((usuario) => {
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
                                                title={esAdmin ? "Los usuarios Admin no se pueden eliminar" : "Eliminar usuario"}
                                                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${esAdmin ? "text-slate-600 cursor-not-allowed" : "text-red-400 hover:bg-red-500/10"}`}>
                                                {esAdmin ? (<LuLock className="h-4 w-4" strokeWidth={1.8}/>) : (<LuTrash2 className="h-4 w-4" strokeWidth={1.8}/>)}
                                            </button>
                                        </div>
                                    </li>);
                        })}
                    </ul>
                </div>
            </div>
        </div>);
}


export default AdminUsuarios;