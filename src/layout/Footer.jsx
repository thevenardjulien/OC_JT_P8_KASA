import logo from "../assets/img/LOGO_white.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <nav></nav>
      <Link to="/">
        <img className="footer__logo" src={logo} alt="Kasa Logo Blanc" />
      </Link>
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
