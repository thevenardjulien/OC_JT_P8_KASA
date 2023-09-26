import { useParams } from "react-router";
import { useEffect, useState } from "react";
import logements from "../assets/json/logements.json";
import Carousel from "../components/Carousel";

const Logement = () => {
  const params = useParams();
  const id = params.title;
  const [currentLogement, setCurrentLogement] = useState(null);

  useEffect(() => {
    const logement = logements.find((logement) => logement.id === id);
    if (logement) {
      setCurrentLogement(logement);
    }
  }, []);

  return (
    <div>
      {currentLogement !== null ? (
        <div className="carousel-container">
          <Carousel currentLogement={currentLogement} />
          <h2 className="carousel-container__title">{currentLogement.title}</h2>
          <p>{currentLogement.location}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Logement;
