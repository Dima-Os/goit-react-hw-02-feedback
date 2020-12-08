import { Component } from 'react';
import shortid from 'shortid';

export default class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        {Object.keys(this.state).map(el => {
          return (
            <button
              key={shortid.generate()}
              type="button"
              onClick={this.onLeaveFeedback}
            >
              {el}
            </button>
          );
        })}
        <h2>Statistics</h2>
        {Object.keys(this.state).map(el => {
          return (
            <p key={shortid.generate()}>
              <span>{el}: </span>
              <span>{this.state[el]}</span>
            </p>
          );
        })}
      </>
    );
  }
}
