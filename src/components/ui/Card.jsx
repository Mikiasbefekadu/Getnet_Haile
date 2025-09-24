export function Card({ children, className = "" }) {
    return (
      <div className={`shadow-lg rounded-2xl bg-white ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children, className = "" }) {
    return (
      <div className={`p-6 ${className}`}>{children}</div>
    );
  }
  