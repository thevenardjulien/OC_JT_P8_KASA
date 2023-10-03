import { useState } from "react";

const Carousel = ({ currentLogement }) => {
  const [current, setCurrent] = useState(0);
  const pictures = currentLogement.pictures;
  const currentPicture = pictures[current];

  function handleLeftClick() {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(pictures.length - 1);
    }
  }
  function handleRightClick() {
    if (current < pictures.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  }

  return (
    <div className="carousel">
      <img
        className="carousel__img"
        src={currentPicture}
        alt={currentLogement.title}
      />
      <p className="carousel__current">
        {current + 1}/{pictures.length}
      </p>
      <i
        onClick={handleLeftClick}
        className="chevrons chevrons__left fa-solid fa-chevron-left"
      ></i>
      <i
        onClick={handleRightClick}
        className="chevrons chevrons__right fa-solid fa-chevron-right"
      ></i>
    </div>
  );
};

export default Carousel;
