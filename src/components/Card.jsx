import { useState } from "react";
import logements from "../assets/json/logements.json";

const Card = () => {
  const [numberOfCards, setNumberOfCards] = useState(3);
  return logements.slice(0, numberOfCards).map((logement, index) => {
    return (
      <div className="card" key={index}>
        <img className="card__img" src={logement.cover} alt={logement.title} />
        <h2 className="card__title">{logement.title}</h2>
        <p className="card__arrow"> ^ </p>
      </div>
    );
  });
};

export default Card;
