import React, { Component } from 'react';
import './GotCard/GotCard.css';
import Navigation from "./Navigation"; // This connects the Nav.js file in the Components folder to the App.js file
// This connects the Title.js file in the Components folder to the App.js file
import Container from "./Container"
import GotCard from "./GotCard"; // This connects the FriendCard.js file in the Components folder to the App.js file
import friends from "../friends.json"
import { Grid, Row, Col } from 'react-flexbox-grid';

var containerStyle = {
"background-color": "green",
"background-size": "cover",
};

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class Start extends Component {
  state = {
    message:"Click any image to begin!",
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Glaven!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  render() {
    return (
        <div id="app">
      <Grid fluid>
        <Navigation
          message={this.state.message}
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />


        <Container style={containerStyle}>

          <Row className="rowl">

            {this.state.friends.map(friend => (
              <Col size="md-6 sm-5">
                <GotCard
                  key={friend.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={friend.id}
                  image={friend.image}
                  />
              </Col>
            ))}
          </Row>

        </Container>

      </Grid>
      </div>
    );
  }
}


export default Start;



