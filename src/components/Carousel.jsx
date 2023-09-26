import { useState } from "react";

const Carousel = ({ currentLogement }) => {
  // console.log(currentLogement);

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

  console.log(currentLogement);

  return (
    <div className="carousel">
      <img
        className="carousel__img"
        src={currentPicture}
        alt={currentLogement.title}
      />
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
