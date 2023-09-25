import banner from "../assets/img/banner.png";

const Banner = () => {
  return (
    <div className="banner">
      <img className="banner__img" src={banner} alt="Kasa Banner" />
      <p className="banner__text">
        Chez vous,
        <br /> partout et ailleurs
      </p>
    </div>
  );
};

export default Banner;
