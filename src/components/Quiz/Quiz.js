import React from 'react'
import './Quiz.css';
import { Link } from "react-router-dom";

import './Quiz.css';

export default function Quiz(props) {
    return (
      <div className="bodyquiz">

        <div className="quiz">
          <h2>Valar Dohaeris or Valar Morghulis<br />
          In Game of Thrones, either you Win or you Die!</h2>
          <h3>This is a simple quiz game with 20 questions about A Song of Ice and fire.<br /> Choose your answers very carefully, because when you play the Game of Thrones, you  Win or you Die!</h3>
          <h3>Let's Begin</h3>
       
        <div className="ButtonId">
        <button lassName="Button">
          <Link to={"/quiz1"}>Start</Link>
        </button>
        </div>  
      </div>
      </div>
    );
  }



//create react app another app
//delete src folder immediately
//replace with good src folder
//copy all code that makes sense to copy over index, app, store, css
//dont use state
//dont use state
//dont forget you're using browserrouter



//classname for pointer-events: none
//inside link, a situational class
//based on this.state.disabled
