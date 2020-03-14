import React from 'react'
import './Quiz.css';
import { Link } from "react-router-dom";

export default function Quiz(props) {
  return (
    <div id="quiz">

      <div className="Quiz-header">
      4 // How high is the Wall?
      </div>

        <div className="Questions">
          <input type="checkbox" name="questionone" value="A test" /><label for="A test"> 900 feet</label><br />
          <input type="checkbox" name="questionone" value="B test" /><label for="B test"> 1100 feet</label><br />
          <input type="checkbox" name="questionone" value="C test" /><label for="C test"> 700 feet</label><br />
          <input type="checkbox" name="questionone" value="D test" /><label for="D test"> 500 feet</label><br />
        </div>

        <div className="ButtonId">
        <button className="Button"><Link to={"/quiz5"}>Submit</Link></button>

      </div>

    </div>
  )
}