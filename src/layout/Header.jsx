import logo from "../assets/img/LOGO.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <NavLink to="/">
          <img className="navbar__logo" src={logo} alt="Logo Kasa" />
        </NavLink>
        <nav className="link-wrapper">
          <NavLink className="navbar__link" to="/">
            Accueil
          </NavLink>
          <NavLink className="navbar__link" to="/a-propos">
            A Propos
          </NavLink>
        </nav>
      </nav>
    </div>
  );
};

export default Header;
