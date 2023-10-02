import { useState } from "react";

const Rate = ({ rating }) => {
  const [rate, setRate] = useState(rating);
  const star = <i className="fa-solid fa-star star"></i>;
  const emptyStar = <i className="fa-solid fa-star greystar"></i>;
  const stars = [];

  for (let i = 0; i < rate; i++) {
    stars.push(<span key={i}>{star}</span>);
  }

  for (let i = rate; i < 5; i++) {
    stars.push(<span key={i}>{emptyStar}</span>);
  }

  return <div className="stars">{stars}</div>;
};

export default Rate;
