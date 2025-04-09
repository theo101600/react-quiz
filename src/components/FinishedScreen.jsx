function FinishedScreen({ dispatch, points, maxPossiblePoints, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      {" "}
      <p className="result">
        You Scored <strong>{points}</strong> / {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="btn btn-ui"
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
