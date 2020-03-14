import React from 'react'
import './Quiz.css';
import { Link } from "react-router-dom";

export default function Quiz(props) {
  return (
    <div id="quiz">

      <div className="Quiz-header">
         7 // Which Greyjoy has returned from a saling expedition with a dragon horn?
      </div>

        <div className="Questions">
          <input type="radio" name="questionone" value="A test" /><label for="A test"> Aeron Greyjoy</label><br />
          <input type="radio" name="questionone" value="B test" /><label for="B test"> Euron Greyjoy</label><br />
          <input type="radio" name="questionone" value="C test" /><label for="C test"> Balon Greyjoy</label><br />
          <input type="radio" name="questionone" value="D test" /><label for="D test"> Victarion Greyjoy</label><br />
        </div>

        <div className="ButtonId">
        <button className="Button"><Link to={"/quiz8"}>Submit</Link></button>

      </div>

    </div>
  )
}