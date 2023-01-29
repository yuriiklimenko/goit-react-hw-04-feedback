import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

function ClassStatistics() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onButtonClick = e => {
    setFeedback({ ...feedback, [e.target.name]: feedback[e.target.name] + 1 });
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedback.good * 100) / countTotalFeedback());
  };

  return (
    <div>
      <h1>Please leave feedback</h1>
      <Section title="">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={onButtonClick}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
export default ClassStatistics;
