import React, { Component, Fragment } from 'react';
import './App.css';

import './styles/index.scss';
import { Provider } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Books from './components/Books';
import Characters from './components/Characters';
import Map from './components/Map';
import Quiz from './components/Quiz/Quiz';
import GotCards from './components/GotCards';


class App extends Component {
  render() {
    let routes = (
      <Route
        render={ (props) => (
              <Fragment>
                <Navbar />
                <Provider
                  store={store}
                >
                  <Switch><Route
                      exact
                      path="/"
                      render={ props => <Landing />}
                    />
                    <Route
                      exact
                      path="/Books"
                      render={ props => <Books />}
                    />
                    <Route
                      exact
                      path="/Characters"
                      render={ props => <Characters />}
                    />
                    <Route
                      exact
                      path="/Map"
                      render={ props => <Map />}
                    />
                    <Route
                      exact
                      path="/Quiz"
                      render={ props => <Quiz />}
                    />
                      <Route
                      exact
                      path="/GotCards"
                      render={ props => <GotCards />}
                    />
                  </Switch>
                </Provider>
              <div className="Footer">A Song of Ice and Fire</div>
              </Fragment>
            )}
          />
      )

      return routes;
  }
}

export default withRouter(App);