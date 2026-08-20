function Button({ children, onClick, type = "button", variant = "primary", className = "" }) {
  const base = "px-4 py-2 rounded-lg font-medium transition-colors";
  const variants = {
    primary: "bg-accent text-bg hover:opacity-90",
    secondary: "bg-card border border-line text-text hover: border-accent",
    danger: "bg-danger text-white hover:opacity-90",
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
