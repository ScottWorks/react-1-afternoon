import React, { Component } from 'react';

export default class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unfilteredArr: [
        'Porsche',
        'Ferrari',
        'Toyota',
        'Ford',
        'Nissan',
        'BMW',
        'Acura',
        'Tesla',
        'Dodge'
      ],
      filteredArr: [],
      userInput: ''
    };
  }

  updateUserInput(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  displayUserInput() {
    let keyWord = this.state.userInput.split(',');
    let resultArr = this.state.unfilteredArr.filter((elem) => {
      let matches = false;
      let i = 0;

      while (i < keyWord.length) {
        if (elem === keyWord[i].trim()) {
          matches = true;
        }
        i++;
      }

      if (matches === false) {
        return elem;
      }
    });

    this.setState({
      filteredArr: resultArr
    });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <div className="puzzleText">
          Un-Filtered Array: {JSON.stringify(this.state.unfilteredArr)}
        </div>
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

        <div className="resultsBox filterStringRB">
          Filtered Array: {JSON.stringify(this.state.filteredArr)}
        </div>
      </div>
    );
  }
}
