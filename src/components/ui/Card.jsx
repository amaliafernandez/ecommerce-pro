function Card({ children, className = "" }) {
  return <div className={`bg-card border border-line rounded-xl overflow-hidden ${className}`}>{children}</div>;
}

export default Card;
