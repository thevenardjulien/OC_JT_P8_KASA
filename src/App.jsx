import "./assets/styles/css/main.css";
import Banner from "./components/Banner";
import BannerImg from "./assets/img/banner.png";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Banner src={BannerImg} text="Chez vous, partout et ailleurs" />
      <div className="card-container">
        <Card />
      </div>
    </div>
  );
}

export default App;
