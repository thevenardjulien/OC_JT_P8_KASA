import { useState } from "react";

const Rate = ({ rating }) => {
  const [rate, setRate] = useState(rating);
  const star = <i class="fa-solid fa-star"></i>;
  const emptyStar = <i class="fa-regular fa-star"></i>;
  const stars = [];

  for (let i = 0; i < rate; i++) {
    stars.push(star);
  }

  for (let i = rate; i < 5; i++) {
    stars.push(emptyStar);
  }

  return <div>{stars}</div>;
};

export default Rate;
