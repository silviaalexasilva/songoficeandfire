import React from "react";
import Card from "./Card";
import "./CardList.css";
import HOUSE_LIST from "../houseList";

const ListCard = () => {
  return (
 
    <div className="card-list">
      {HOUSE_LIST.map((house, index) => (
        <Card
          key={index}
          house={house.house}
          photo={house.photo}
          alt={house.alt}
          region={house.region}
          seat={house.seat}
          words={house.words}
          representation={house.representation}
          religion={house.religion}
        />
      ))}
    </div>
 
  );
};

export default ListCard;
