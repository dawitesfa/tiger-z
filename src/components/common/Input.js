import "./Input.css";

export const Input = ({ placeholder, className }) => {
  return <input placeholder={placeholder} className={`${className}`} />;
};

export const TextArea = ({ placeholder, className, rows }) => {
  return (
    <textarea
      placeholder={placeholder}
      rows={rows}
      className={`${className}`}
    ></textarea>
  );
};

export const FormButton = ({ type, className, children }) => {
  return (
    <button className={`${className}`} type={type}>
      {children}
    </button>
  );
};
