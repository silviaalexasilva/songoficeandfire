
import React, { useState } from "react";
import "./Card.css";
import "./CardList.css";


const Card = props => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const flip = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
        <div className="ContainerMap">
                <h1>Welcome to Westeros</h1>
       
      <div className="card">
        <div
          className={`card__inner ${isFlipped ? "card__inner--is-flipped" : ""}`}
          onClick={flip}
        >
          <div className="card__face card__face--front">
            <img className="card__image" src={props.photo} alt={props.alt} />
          </div>
          <div className="card__face card__face--back">
            <h2 className="card__face-heading">{props.house}</h2>
            <p className="card__face-house-words">{props.words}</p>
            <div className="card__face--divider" />
            <div className="card__face-house-information">
              <div className="card__face-content">
                <label className="card__face-label">Region: </label>
                <p className="card__face-message">{props.region}</p>
              </div>
              <div className="card__face-content">
                <label className="card__face-label">Seat: </label>
                <p className="card__face-message">{props.seat}</p>
              </div>
              <div className="card__face-content">
                <label className="card__face-label">Representation: </label>
                <p className="card__face-message">{props.representation}</p>
              </div>
              <div className="card__face-content">
                <label className="card__face-label">Religion: </label>
                <p className="card__face-message">{props.religion}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>  
    );
   
  };
  
  export default Card;


  