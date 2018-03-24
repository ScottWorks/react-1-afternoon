import React, { Component } from 'react';

export default class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      myImaginaryGarage: [
        {
          make: 'Ford',
          model: 'F-150 Raptor',
          drivetrain: '4x4'
        },
        {
          make: 'BMW',
          model: 'M3',
          turbocharged: true,
          year: '2018'
        },
        {
          make: 'Porsche',
          model: 'GT3 RS',
          drivetrain: 'mid-engine rear',
          year: '2017'
        }
      ],
      userInput: '',
      filteredArray: []
    };
  }

  updateUserInput(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  displayUserUpdate() {
    let keyWord = this.state.userInput;
    let searchResults = this.state.myImaginaryGarage.filter(
      (elem, idx, arr) => {
        for (let key in elem) {
          if (key === keyWord) {
            return elem;
          }
        }
      }
    );

    console.log(searchResults);

    this.setState({
      filteredArray: searchResults
    });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Objects</h4>
        <div className="puzzleText">Original: </div>
        <input
          className="inputLine"
          onChange={(event) => this.updateUserInput(event)}
        />

        <button
          className="confirmationButton"
          onClick={() => this.displayUserUpdate()}
        >
          Click Me!
        </button>

        <div className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray)}
        </div>
      </div>
    );
  }
}
