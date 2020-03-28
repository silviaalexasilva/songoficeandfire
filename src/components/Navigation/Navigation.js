import React from "react";
import "./Navigation.css";

const Navigation = props => (
<div>
    <ul className="nav nav-pills nav-justified nav-menu">
        <li>
            <div>
                <h2>A Card Memory Game // Click any image to begin!</h2>
            </div>
        </li>
        <li 
        className={props.message.indexOf('incorrectly') !== -1 ?
        "desc-incorrect" :
        props.message.indexOf('correctly') !== -1 ?
            "desc-correct" :
            "desc-normal"}
>
        <div>
            {props.message}
        </div>
    </li>
    <li>
    <div>
    <h2>Score: <span>{props.score}</span> | Top Score: {props.topScore}</h2>
    </div>
    </li>

    </ul>
</div>
);

export default Navigation;