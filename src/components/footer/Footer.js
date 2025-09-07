import { navs } from "../../data/Data";
import { useScrollTo } from "../../hooks/useScrollTo";
import { ContactDetail } from "../common/Address";
import { NavItem } from "../header/NavItem";
import "./Footer.css";
export const Footer = ({ children }) => {
  const scrollTo = useScrollTo();
  return (
    <footer className="section black">
      <div className="section__content" id="footer">
        <div className="footer__contents">
          <div>
            <h3>Tiger Zambezi</h3>
            <p className="footer__decription">
              Tiger Zambezi Investments Limited — building sustainable value
              chains across exploration, processing, logistics and agri‑trade.
            </p>
          </div>
          <div className="footer__navs">
            <h3>Company</h3>
            <ul className="footer__links">
              {[...navs].slice(1, 5).map((e) => (
                <NavItem
                  key={e.href}
                  className="footer__link"
                  href={e.href}
                  label={e.label}
                  onClick={() => {
                    scrollTo(e.href);
                  }}
                />
              ))}
            </ul>
          </div>
          <div className="footer__legal">
            <h3>Legal</h3>
            <ul className="footer__links">
              <NavItem
                href="#home"
                label="Privacy Policy"
                className="footer__link"
              />
              <NavItem
                href="#home"
                label="Terms & Conditions"
                className="footer__link"
              />
            </ul>
          </div>
          <div className="footer__legal">
            <h3>Contact</h3>
            <ContactDetail newClass="footer__contact" />
          </div>
        </div>
        <p className="footer__copyright">{`© 2025 Tiger Zambezi Investments Limited. All rights reserved.`}</p>
      </div>
    </footer>
  );
};
