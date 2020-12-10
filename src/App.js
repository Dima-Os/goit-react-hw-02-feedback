import { Component } from 'react';

export default class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  onLeaveFeedback = e => {
    const feedbackType = e.currentTarget.innerText;
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };
  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        {Object.keys(this.state).map(el => {
          return (
            <button key={el} type="button" onClick={this.onLeaveFeedback}>
              {el}
            </button>
          );
        })}
        <h3>Statistics</h3>
        {Object.keys(this.state).map(el => {
          return (
            <p key={el}>
              <span>{el}: </span>
              <span>{this.state[el]} </span>
            </p>
          );
        })}
        <p>
          <span>Total: </span>
          <span>{this.countTotalFeedback()}</span>
        </p>
        <p>
          <span>Positive feedbacks: </span>
          <span>{this.countPositiveFeedbackPercentage()} %</span>
        </p>
      </>
    );
  }
}
