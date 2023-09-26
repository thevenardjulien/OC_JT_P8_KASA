import { useState } from "react";
import { Link } from "react-router-dom";
import logements from "../assets/json/logements.json";

const Card = () => {
  const [numberOfCards, setNumberOfCards] = useState(5);

  return logements.slice(0, numberOfCards).map((logement) => {
    let path = "/logement/" + logement.id;
    return (
      <Link to={path} key={logement.id}>
        <div className="card">
          <img
            className="card__img"
            src={logement.cover}
            alt={logement.title}
          />
          <h2 className="card__title">{logement.title}</h2>
        </div>
      </Link>
    );
  });
};

export default Card;
