import "./assets/styles/css/main.css";
import Banner from "./components/Banner";
import BannerImg from "./assets/img/banner.png";
import Card from "./components/Card";
import { useState } from "react";
import logements from "./assets/json/logements.json";

function App() {
  const [add, setAdd] = useState(0);
  const [cardCount, setCardCount] = useState(6);

  function handleClick() {
    setAdd(add + 3);
    setCardCount(cardCount + 3);
  }

  return (
    <div className="main-container">
      <Banner src={BannerImg} text="Chez vous, partout et ailleurs" />
      <div className="card-container">
        <Card add={add} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {cardCount < logements.length && (
          <button onClick={handleClick}>Afficher plus</button>
        )}
      </div>
    </div>
  );
}

export default App;
