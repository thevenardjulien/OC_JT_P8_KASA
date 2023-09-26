import { useParams } from "react-router";
import { useEffect, useState } from "react";
import logements from "../assets/json/logements.json";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Rate from "../components/Rate";
import Host from "../components/Host";

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
  }, []);

  const tags = currentLogement.tags;
  const tagsList = tags.map((tag) => (
    <li className="tagsList__tag" key={tag}>
      {tag}
    </li>
  ));
  const equipments = currentLogement.equipments.map((equipment) => (
    <li key={equipment}>{equipment}</li>
  ));

  return (
    <div>
      {currentLogement !== null ? (
        <div className="carousel-container">
          <Carousel currentLogement={currentLogement} />
          <h2 className="carousel-container__title">{currentLogement.title}</h2>
          <p>{currentLogement.location}</p>
          <ul className="tagsList">{tagsList}</ul>
          <div className="rating-host">
            <Rate rating={currentLogement.rating} />
            <Host host={currentLogement.host} />
          </div>
        </div>
      ) : null}
      <Collapse title="Description" txt={currentLogement.description} />
      <Collapse title="Équipements" txt={equipments} />
    </div>
  );
};

export default Logement;
