import "./Navigation.css";

export const NavItem = ({
  label,
  className,
  onClick,
  children,
  icn,
  onMouseEnter,
  onMouseLeave,
  onToggleMobileMenu,
}) => {
  return (
    <li
      className={`header__nav-item ${className}`}
      onClick={() => {
        onClick();
        onToggleMobileMenu && onToggleMobileMenu();
      }}
      onMouseEnter={() => {
        onMouseEnter && onMouseEnter();
      }}
      onMouseLeave={() => {
        onMouseLeave && onMouseLeave();
      }}
    >
      {
        <p>
          <span>{label}</span> &nbsp;<span>{icn}</span>
        </p>
      }
      {children}
    </li>
  );
};
