import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import logements from "../assets/json/logements.json";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Rate from "../components/Rate";
import Host from "../components/Host";

const Logement = () => {
  const params = useParams();
  const id = params.title;
  const navigate = useNavigate();
  const logementActif = logements.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logementActif) {
      navigate("*");
    }
  }, [logementActif, navigate]);

  if (logementActif) {
    const { tags, equipments, title, location, rating, host, description } =
      logementActif;

    const tagsList = tags.map((tag) => (
      <li className="tagsList__tag" key={tag}>
        {tag}
      </li>
    ));

    const equipmentsList = equipments.map((equipment) => (
      <li key={equipment}>{equipment}</li>
    ));

    return (
      <div className="main-container">
        {logementActif !== null ? (
          <div className="carousel-info-container">
            <Carousel currentLogement={logementActif} />
            <h2 className="carousel-info-container__title">{title}</h2>
            <p className="carousel-info-container__location">{location}</p>
            <ul className="tagsList">{tagsList}</ul>
            <div className="rating-host">
              <Rate rating={rating} />
              <Host host={host} />
            </div>
          </div>
        ) : null}
        <div className="logement-collapse">
          <Collapse title="Description" txt={description} />
          <Collapse title="Équipements" txt={equipmentsList} />
        </div>
      </div>
    );
  }
};

export default Logement;
