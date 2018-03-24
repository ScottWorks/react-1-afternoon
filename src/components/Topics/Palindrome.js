import React, { Component } from 'react';

export default class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      palindrome: '',
      userInput: ''
    };
  }

  updateUserInput(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  displayUserInput() {
    let originalKeyword = this.state.userInput;
    let reversedKeyWord = this.state.userInput
      .split('')
      .reverse()
      .join('');

    if (originalKeyword === reversedKeyWord) {
      this.setState({
        palindrome: 'true'
      });
    } else {
      this.setState({
        palindrome: 'false'
      });
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>

        <input
          className="inputLine"
          onChange={(event) => this.updateUserInput(event)}
        />

        <button
          className="confirmationButton"
          onClick={() => this.displayUserInput()}
        >
          Click Me!
        </button>
        <div className="resultsBox">isPalindrome: {this.state.palindrome}</div>
      </div>
    );
  }
}
