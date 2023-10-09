import "./assets/styles/css/main.css";
import Banner from "./components/Banner";
import BannerImg from "./assets/img/banner.png";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import { host } from "./config";

function App() {
  const [logements, setLogements] = useState(undefined);

  useEffect(() => {
    try {
      fetch(`${host}/json/logements.json`, {
        headers: {
          "Content-type": "Application/json",
          Accept: "Application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setLogements(data);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const [add, setAdd] = useState(0);
  const [cardCount, setCardCount] = useState(6);

  function handleClick() {
    setAdd(add + 3);
    setCardCount(cardCount + 3);
  }

  if (logements !== undefined) {
    return (
      <div className="main-container">
        <Banner src={BannerImg} text="Chez vous, partout et ailleurs" />
        <div className="card-container">
          <Card add={add} logements={logements} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {cardCount < logements.length && (
            <button onClick={handleClick}>Afficher plus</button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
