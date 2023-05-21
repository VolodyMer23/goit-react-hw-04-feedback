import { BtnWrapper, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const optionsList = Object.keys(options);
  const buttonsMarkup = optionsList.map(option => {
    return (
      <Button
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </Button>
    );
  });
  return <BtnWrapper>{buttonsMarkup}</BtnWrapper>;
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
