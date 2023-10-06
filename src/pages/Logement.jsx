import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Rate from "../components/Rate";
import Host from "../components/Host";

const Logement = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.title;
  const [logementActif, setLogementActif] = useState(undefined);

  useEffect(() => {
    try {
      fetch("/json/logements.json", {
        headers: {
          "Content-type": "Application/json",
          Accept: "Application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const dataLogement = data.find((logement) => logement.id === id);
          if (dataLogement === undefined) {
            navigate("*");
          } else {
            setLogementActif(dataLogement);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

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
            <div className="info-rating-host">
              <div>
                <h2 className="carousel-info-container__title">{title}</h2>
                <p className="carousel-info-container__location">{location}</p>
                <ul className="tagsList">{tagsList}</ul>
              </div>
              <div className="rating-host">
                <Rate rating={rating} />
                <Host host={host} />
              </div>
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
