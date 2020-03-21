import React from "react";
import "./GotCard.css";

const GotCard = props => (
  <div 
    className="Gotcard"
    value={props.id} 
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default GotCard;