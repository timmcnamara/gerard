import React from "react";
import Card from "./Card";

function Content(props) {
  return (
    <section>
      {props.cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          href={card.href}
          name={card.name}
          clicked={card.clicked}
          handleClick={props.handleClick}
        />
      ))}
    </section>
  );
}

export default Content;
