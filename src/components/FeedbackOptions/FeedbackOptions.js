import s from './FeedbackOptions.module.scss';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.buttonsWrapper}>
      {Object.keys(options).map(el => {
        return (
          <button
            className={s.button}
            key={el}
            type="button"
            onClick={onLeaveFeedback}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
