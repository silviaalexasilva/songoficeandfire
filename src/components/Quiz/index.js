import React from 'react';
import '/Quiz.css';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Quiz1 from "./Quiz1";
import Quiz2 from "./Quiz2";
import Quiz3 from "./Quiz3";
import Quiz4 from "./Quiz4";
import Quiz5 from "./Quiz5";
import Quiz6 from "./Quiz6";
import Quiz7 from "./Quiz7";
import Quiz8 from "./Quiz8";
import Quiz9 from "./Quiz9";
import Quiz10 from "./Quiz10";
import ResultsPage from "./ResultsPage";


ReactDOM.render(
    <Provider store={store}>
      <Router>
          <Switch>
              <Route exact path="/" component={App} /> 
              <Route path="/quiz1" component={Quiz1} />
              <Route path="/quiz2" component={Quiz2} />
              <Route path="/quiz3" component={Quiz3} />
              <Route path="/quiz4" component={Quiz4} />
              <Route path="/quiz5" component={Quiz5} />
              <Route path="/quiz6" component={Quiz6} />
              <Route path="/quiz7" component={Quiz7} />
              <Route path="/quiz8" component={Quiz8} />
              <Route path="/quiz9" component={Quiz9} />
              <Route path="/quiz10" component={Quiz10} />
              <Route path="/results-page" component={ResultsPage} />
  
          </Switch>
      </Router>
    </Provider>,
    document.getElementById('root')
  )
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();