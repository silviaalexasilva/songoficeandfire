import React from 'react'
import './Quiz.css';
import { Link } from "react-router-dom";

export default function Quiz(props) {
  return (
    <div class="bodyquiz">
    <div class="quiz">

      <div className="Quiz-header">
       3 // Who was to be married at the "Red Wedding"?
      </div>

        <div className="Questions">
          <input type="checkbox" name="questionone" value="A test" /><label for="A test"> Robb Stark</label><br />
          <input type="checkbox" name="questionone" value="B test" /><label for="B test"> Walder Frey</label><br />
          <input type="checkbox" name="questionone" value="C test" /><label for="C test"> Edmure Tully</label><br />
          <input type="checkbox" name="questionone" value="D test" /><label for="D test"> Edmyn Tully</label><br />
        </div>

        <div className="ButtonId">
        <button className="Button"><Link to={"/quiz4"}>Submit</Link></button>
      </div>

        {<div>{props.children}</div>}
    </div>
    </div>
  )
}