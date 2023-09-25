import logements from "../assets/json/logements.json";

const Card = () => {
  return logements.map((logement, index) => {
    return (
      <div className="card" key={index}>
        <img className="card__img" src={logement.cover} alt={logement.title} />
        <p className="card__title">{logement.title}</p>
      </div>
    );
  });
};

export default Card;
