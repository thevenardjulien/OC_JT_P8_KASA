import { useState } from "react";
import { Link } from "react-router-dom";
import logements from "../assets/json/logements.json";

const Card = ({ add }) => {
  const [numberOfCards, setNumberOfCards] = useState(6);

  return logements.slice(0, numberOfCards + add).map((logement) => {
    const { id, cover, title } = logement;
    let path = "/logement/" + id;
    return (
      <Link to={path} key={id}>
        <div className="card">
          <img className="card__img" src={cover} alt={title} />
          <h2 className="card__title">{title}</h2>
        </div>
      </Link>
    );
  });
};

export default Card;
