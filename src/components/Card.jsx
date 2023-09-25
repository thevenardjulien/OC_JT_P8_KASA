import thumb from "../assets/img/Thumb.png";

const Card = () => {
  return (
    <div className="card">
      <img className="card__img" src={thumb} alt="card img" />
      <p className="card__title">Titre de la location</p>
    </div>
  );
};

export default Card;
