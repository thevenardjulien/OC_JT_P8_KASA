import Banner from "../components/Banner";
import BannerImg from "../assets/img/bannerabout.png";
import Collapse from "../components/Collapse";
import AproposContent from "../assets/json/aproposcontent.json";

const aboutCollapses = AproposContent.map((content, index) => {
  return (
    <div key={index}>
      <Collapse title={content.title} txt={content.txt} />
    </div>
  );
});

const Apropos = () => {
  return (
    <div>
      <Banner src={BannerImg} />
      {aboutCollapses}
    </div>
  );
};

export default Apropos;
