import React from "react";
import "./card.css";

export const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="monsters"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h4>{props.monster.name}</h4>
      <h5>{props.monster.username}</h5>
      <p>{props.monster.email}</p>
    </div>
  );
};
