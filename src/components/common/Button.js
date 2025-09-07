import "./Button.css";

export const Button = ({ children, onClick, type, className }) => {
  return (
    <button
      type={type}
      className={`link-button ${className}`}
      // href="link"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
