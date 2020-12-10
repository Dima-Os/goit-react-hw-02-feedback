const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <>
      {Object.keys(options).map(el => {
        return (
          <p key={el}>
            <span>{el}: </span>
            <span>{options[el]} </span>
          </p>
        );
      })}
      <p>
        <span>Total: </span>
        <span>{total}</span>
      </p>
      <p>
        <span>Positive feedbacks: </span>
        <span>{positivePercentage} %</span>
      </p>
    </>
  );
};
export default Statistics;
