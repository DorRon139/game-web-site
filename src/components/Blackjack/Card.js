import React from "react";

const Card = (props) => {
  return (
    <div>
      <img
        className="blackjack--card"
        height={"110px"}
        src={props.imgURL}
        alt={`${props.value} ${props.sign}`}
      />
    </div>
  );
};

export default Card;
