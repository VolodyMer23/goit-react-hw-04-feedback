import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import { FeedbackWrapper } from './App.styled';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round((good / total) * 100);

  const onBtnClick = option => {
    console.log(option);
    if (option === 'good') setGood(good + 1);
    if (option === 'neutral') setNeutral(neutral + 1);
    if (option === 'bad') setBad(bad + 1);
  };

  return (
    <FeedbackWrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{good, neutral, bad}}
          onLeaveFeedback={onBtnClick}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </FeedbackWrapper>
  );
}

