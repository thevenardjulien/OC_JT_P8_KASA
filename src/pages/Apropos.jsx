import Banner from "../components/Banner";
import BannerImg from "../assets/img/bannerabout.png";
import Collapse from "../components/Collapse";
import apropos from "../assets/json/aproposcontent.json";

const aboutCollapses = apropos.map((content, index) => {
  return (
    <div key={index}>
      <Collapse title={content.title} txt={content.txt} />
    </div>
  );
});

const Apropos = () => {
  return (
    <div className="main-container">
      <Banner src={BannerImg} />
      <div className="apropos-collapse">{aboutCollapses}</div>
    </div>
  );
};

export default Apropos;
