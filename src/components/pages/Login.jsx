function Login() {
  return (
    <section className="flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-card border border-line rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-center">Iniciar sesión</h1>
        <p className="text-sm text-muted text-center mt-2 mb-6">Accedé al panel de administración de PROtech</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-muted mb-1">Email</label>
            <input
              type="email"
              placeholder="correo@dominio.com"
              className="w-full px-4 py-2.5 bg-bg border border-line rounded-lg text-text focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-muted mb-1">Contraseña</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 bg-bg border border-line rounded-lg text-text focus:outline-none focus:border-accent transition-colors" />
          </div>

          <button type="submit" className="w-full bg-accent text-bg py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Ingresar
          </button>
        </form>

        <p className="text-sm text-muted text-center mt-6">
          ¿No tenés cuenta? <span className="text-accent cursor-pointer hover:underline">Registrate</span>
        </p>
      </div>
    </section>
  );
}

export default Login;
