import { useParams } from "react-router";
import { useEffect, useState } from "react";
import logements from "../assets/json/logements.json";
import Carousel from "../components/Carousel";
import Rate from "../components/Rate";

const Logement = () => {
  const params = useParams();
  const id = params.title;
  const [currentLogement, setCurrentLogement] = useState(
    logements.find((logement) => logement.id === id)
  );

  useEffect(() => {
    const logement = logements.find((logement) => logement.id === id);
    if (logement) {
      setCurrentLogement(logement);
    }
    console.log(currentLogement);
  }, []);

  const tags = currentLogement.tags;
  const tagsList = tags.map((tag) => (
    <li className="tagsList__tag" key={tag}>
      {tag}
    </li>
  ));

  return (
    <div>
      {currentLogement !== null ? (
        <div className="carousel-container">
          <Carousel currentLogement={currentLogement} />
          <h2 className="carousel-container__title">{currentLogement.title}</h2>
          <p>{currentLogement.location}</p>
          <ul className="tagsList">{tagsList}</ul>
          <Rate rating={currentLogement.rating} />
        </div>
      ) : null}
    </div>
  );
};

export default Logement;
