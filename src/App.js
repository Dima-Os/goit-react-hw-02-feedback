import { Component } from 'react';

import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';
import Container from './components/Container';

export default class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  onLeaveFeedback = ({ currentTarget }) => {
    const feedbackType = currentTarget.innerText.toLowerCase();
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };
  render() {
    const positiveFetbacks = this.countPositiveFeedbackPercentage();
    const totalFeedback = this.countTotalFeedback();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {totalFeedback !== 0 ? (
          <Section title="Statistics">
            <Statistics
              options={this.state}
              total={totalFeedback}
              positivePercentage={positiveFetbacks}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Container>
    );
  }
}
