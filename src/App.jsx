import "./assets/styles/css/main.css";
import Banner from "./components/Banner";
import BannerImg from "./assets/img/banner.png";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Banner src={BannerImg} text="Chez vous, partout et ailleurs" />
      <Card />
    </div>
  );
}

export default App;
