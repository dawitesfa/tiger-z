import { NavItem } from "./NavItem";
import { navs } from "../../data/Data";
import { useScrollTo } from "../../hooks/useScrollTo";
import "./Navigation.css";
// import "./NavItem.css";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const Navigation = ({ className, onToggleMobileMenu }) => {
  const scrollTo = useScrollTo();
  const [activeNav, setActiveNav] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleOnMouseEnter = () => {
    setHovering(true);
  };
  const handleOnMouseLeave = () => {
    setHovering(false);
  };

  const ChangeColor = () => {
    setActiveNav(window.scrollY > 130);
  };
  window.addEventListener("scroll", ChangeColor);
  return (
    <nav className={`header__navigation ${className}`}>
      {navs.map((nav, i) => (
        <NavItem
          onToggleMobileMenu={onToggleMobileMenu}
          className={`${nav.children && "expandable"} ${
            activeNav && "active-navBar"
          }`}
          icn={
            nav.children ? (
              hovering ? (
                <ChevronUp size={12} />
              ) : (
                <ChevronDown size={12} />
              )
            ) : (
              ""
            )
          }
          key={nav.href}
          label={nav.label}
          onClick={() => {
            scrollTo(i === 0 ? "#hero" : nav.href);
          }}
          onMouseEnter={nav.children && handleOnMouseEnter}
          onMouseLeave={nav.children && handleOnMouseLeave}
        >
          {nav.children && (
            <ul className="header__navigation-subs">
              {nav.children.map((e) => (
                <NavItem
                  key={e.href}
                  label={e.label}
                  onClick={() => {
                    scrollTo(`${e.href}`);
                  }}
                />
              ))}
            </ul>
          )}
        </NavItem>
      ))}
    </nav>
  );
};
