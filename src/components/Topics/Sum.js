import React, { Component } from 'react';

export default class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
  }

  updateUserInput1(event) {
    this.setState({
      number1: event.target.value
    });
  }
  updateUserInput2(event) {
    this.setState({
      number2: event.target.value
    });
  }

  displayUserInput() {
    let num1 = +this.state.number1;
    let num2 = +this.state.number2;

    let sumResult = num1 + num2;

    this.setState({
      sum: sumResult
    });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>

        <input
          className="inputLine"
          onChange={(event) => this.updateUserInput1(event)}
        />
        <input
          className="inputLine"
          onChange={(event) => this.updateUserInput2(event)}
        />

        <button
          className="confirmationButton"
          onClick={() => this.displayUserInput()}
        >
          Click Me!
        </button>

        <div className="resultsBox">Sum: {this.state.sum}</div>
      </div>
    );
  }
}
