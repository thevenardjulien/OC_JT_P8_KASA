import logo from "../assets/img/LOGO.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <img className="navbar__logo" src={logo} alt="Logo Kasa" />
        <NavLink className="navbar__link" to="/">
          Accueil
        </NavLink>
        <NavLink className="navbar__link" to="/a-propos">
          A Propos
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
