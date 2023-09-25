const Banner = ({ src, text }) => {
  return (
    <div className="banner">
      <img className={"banner__img"} src={src} alt="Banner" />
      <p className="banner__text">{text}</p>
    </div>
  );
};

export default Banner;
