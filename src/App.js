import { Component } from 'react';
import { generate } from 'shortid';

export default class App extends Component {
  constructor() {
    super();
    this.getKey();
  }
  state = { good: 0, neutral: 0, bad: 0 };
  keys = {
    btnKeysArr: [],
    descriptionKeysArr: [],
  };
  onLeaveFeedback = e => {
    const feedbackType = e.currentTarget.innerText;
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  getKey = () => {
    for (let i = 1; i <= Object.keys(this.state).length; i += 1) {
      this.keys.btnKeysArr.push(generate());
      this.keys.descriptionKeysArr.push(generate());
    }
    console.log(this.keys.btnKeysArr, this.keys.descriptionKeysArr);
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        {Object.keys(this.state).map((el, idx) => {
          return (
            <button
              key={this.keys.btnKeysArr[idx]}
              type="button"
              onClick={this.onLeaveFeedback}
            >
              {el}
            </button>
          );
        })}
        <h2>Statistics</h2>
        {Object.keys(this.state).map((el, idx) => {
          return (
            <p key={this.keys.descriptionKeysArr[idx]}>
              <span>{el}: </span>
              <span>{this.state[el]}</span>
            </p>
          );
        })}
      </>
    );
  }
}
