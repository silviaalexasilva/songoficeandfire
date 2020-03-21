import React from 'react'
import './Quiz.css';
import { Link } from "react-router-dom";

export default function Quiz(props) {
  return (
    <div class="bodyquiz">
      <div class="quiz">
    
      <div className="Quiz-header">
      2 // How was Renly Baratheon killed?
      </div>

        <div className="Questions">
          <input type="radio" name="questionone" value="A test" /><label for="A test"> A test</label><br />
          <input type="radio" name="questionone" value="B test" /><label for="B test"> Stabbed by a shadow</label><br />
          <input type="radio" name="questionone" value="C test" /><label for="C test"> C test</label><br />
          <input type="radio" name="questionone" value="D test" /><label for="D test"> D test</label><br />
        </div>
  
        <div className="ButtonId">
        <button className="Button"><Link to={"/quiz3"}>Submit</Link></button>

        {<div>{props.children}</div>}
      </div>
      </div>
    </div>
  )
}