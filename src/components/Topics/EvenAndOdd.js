import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    };
  }

  updateArrays(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  displayArrayUpdate() {
    let unsortedArray = this.state.userInput.split(',');

    let updatedEvenArray = [];
    let updatedOddArray = [];

    for (let i = 0; i < unsortedArray.length; i++) {
      if (unsortedArray[i] % 2 === 0) {
        updatedEvenArray.push(+unsortedArray[i]);
      } else if (unsortedArray[i] % 2 === 1) {
        updatedOddArray.push(+unsortedArray[i]);
      }
    }

    this.setState({
      evenArray: updatedEvenArray,
      oddArray: updatedOddArray
    });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>

        <input
          className="inputLine"
          onChange={(event) => this.updateArrays(event)}
        />

        <button
          className="confirmationButton"
          onClick={() => this.displayArrayUpdate()}
        >
          Click Me!
        </button>

        <div className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray)}
        </div>
        <div className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray)}
        </div>
      </div>
    );
  }
}
