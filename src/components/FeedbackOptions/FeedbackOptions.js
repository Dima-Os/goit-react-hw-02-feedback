import s from './FeedbackOptions.module.scss';

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

export default FeedbackOptions;
