import { Navigation } from "./Navigation";
import "./Header.css";
import { useState } from "react";
import { Menu } from "lucide-react";

export const Header = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [open, setOpen] = useState(false);

  const changeBackGroundColor = () => {
    if (window.scrollY > 130) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
  };

  const OnOpenMobileMenu = () => {
    setOpen((prev) => !prev);
  };

  window.addEventListener("scroll", changeBackGroundColor);
  return (
    <header id="home" className={`section ${activeNav ? "active-navbar" : ""}`}>
      <div className="header__nav-container">
        <a className="header__logo" href="#hero">
          <div>
            <h1 className="header__logo-text--main">
              Tiger <span>Zambezi</span>
            </h1>
            <p className="header__logo-text--sub">Investments Limited</p>
          </div>
        </a>
        <Navigation
          className={open && "mobileNav"}
          onToggleMobileMenu={open && OnOpenMobileMenu}
        />
        <Menu
          color={activeNav || open ? "black" : "white"}
          className="header__menu"
          onClick={OnOpenMobileMenu}
        />
      </div>
    </header>
  );
};
