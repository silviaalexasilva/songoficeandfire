import React from 'react'
import './Quiz.css';
import { Link } from "react-router-dom";

export default function Quiz(props) {
  return (
    <div id="quiz">

      <div className="Quiz-header">
         5 // Who did Olly claim was still alive in order to lure the Lord Commander into a trap to have him killed?
      </div>

        <div className="Questions">
          <input type="radio" name="questionone" value="A test" /><label for="A test"> Coldhands</label><br />
          <input type="radio" name="questionone" value="B test" /><label for="B test"> Bran warged into Summer</label><br />
          <input type="radio" name="questionone" value="C test" /><label for="C test"> Bejen Stark</label><br />
          <input type="radio" name="questionone" value="D test" /><label for="D test"> Lady Stonehart</label><br />
        </div>

        <div className="ButtonId">
        <button className="Button"><Link to={"/quiz7"}>Submit</Link></button>

      </div>

    </div>
  )
}