import React from 'react';
import '/Quiz.css';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store.js";
import Quiz from "./Quiz";
import Quiz1 from "./Quiz1";
import Quiz2 from "./Quiz2";
import Quiz3 from "./Quiz3";
import Quiz4 from "./Quiz4";
import Quiz5 from "./Quiz5";
import ResultsPage from "./ResultsPage";


ReactDOM.render(
    <Provider store={store}>
      <Router>
      <Switch>
      <Route exact path="/Quiz" component={Quiz} /> 
              <Route path="/quiz1" component={Quiz1} />
              <Route path="/quiz2" component={Quiz2} />
              <Route path="/quiz3" component={Quiz3} />
              <Route path="/quiz4" component={Quiz4} />
              <Route path="/quiz5" component={Quiz5} />
              <Route path="/results-page" component={ResultsPage} />
 
        </Switch>
    </Router>
  </Provider>,
    document.getElementById('root')
  )
  
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
