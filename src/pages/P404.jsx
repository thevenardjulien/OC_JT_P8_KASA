import { Link } from "react-router-dom";

const P404 = () => {
  return (
    <div className="main-container container-p404">
      <h1 className="container-p404__title">404</h1>
      <p className="container-p404__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="container-p404__link" to="/">
        <p>Retourner sur la page d’accueil</p>
      </Link>
    </div>
  );
};

export default P404;
