import React from "react";

function Card(props) {
  let { handleClick, ...cardState } = props;

  return (
    <div>
      <img
        src={props.href}
        alt={props.name}
        id={props.id}
        data-clicked={props.clicked}
        onClick={() => props.handleClick(cardState)}
      />
    </div>
  );
}

export default Card;
