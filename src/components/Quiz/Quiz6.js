import React from 'react';
import './Quiz.css';
import { Link } from "react-router-dom";


export default function Quiz(props) {
  return (
    <div id="quiz">
      <div className="Quiz-header">
       6 // During which battle was Rhaegar Targaryen struck down?
      </div>

        <div className="Questions">
          <input type="checkbox" name="questionone" value="A test" /><span> Battle of the Seven Arms</span><br /> 
          {/*SWAP OUT ALL OF THE LABEL TAGS FOR SPAN TAGS*/}
          <input type="checkbox" name="questionone" value="B test" /><label for="B test"> Battle of Blackwater</label><br />
          <input type="checkbox" name="questionone" value="C test" /><label for="C test"> Battle of the Trident</label><br />
          <input type="checkbox" name="questionone" value="D test" /><label for="D test"> Battle of Ashford</label><br />
        </div>

      <div className="ButtonId">
        <button className="Button"><Link to={"/quiz2"}>Submit</Link></button>

        </div>
      
     

    </div>
  )
}