import React from 'react';
import './Quiz.css';
import { Link } from "react-router-dom";


export default function Quiz(props) {
  return (
    <div class="bodyquiz">
      <div class="quiz">
      
      <div className="Quiz-header">
        1 // What is the name of the Stark ancestral home?
      </div>
      

        <div className="Questions">
          <input type="checkbox" name="questionone" value="A test" /><span> Winterfell</span><br /> 
          {/*SWAP OUT ALL OF THE LABEL TAGS FOR SPAN TAGS*/}
          <input type="checkbox" name="questionone" value="B test" /><span> Westeros</span><br />
          <input type="checkbox" name="questionone" value="C test" /><span> Stark House</span><br />
          <input type="checkbox" name="questionone" value="D test" /><span> Kings Landing</span><br />
        </div>
       
        <div className="ButtonId">
        <button className="Button"><Link to={"/quiz2"}>Submit</Link></button>
        </div>
      </div>
    </div>
  )
}