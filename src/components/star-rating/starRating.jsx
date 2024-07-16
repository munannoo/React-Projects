import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "../styles.css";

function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(starID) {
    setRating(starID);
  }

  function handleMouseHover(starID) {
    setHover(starID);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="starComponent">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseHover(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
export default StarRating;
