import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Quiz.css';


class ResultsPage extends Component {
  render() {
    return (
      <div className="Result-title">
        Output: {this.props.userName}

        test
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userName: state.userName,
    question1: state.question1
  }
}

export default connect(mapStateToProps)(ResultsPage);


// 