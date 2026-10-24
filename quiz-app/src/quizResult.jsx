
function Result({ questions, answers, score, onRestart }) {
  const percentage = Math.round((score / questions.length) * 100);

  let message = 'Keep practising. You will improve!';
  if (percentage >= 80) {
    message = 'Excellent work! You know your stuff.';
  } else if (percentage >= 50) {
    message = 'Good effort! Keep learning.';
  }

  return (
    <div className="result">
      <h1>Quiz Completed!</h1>

      <div className="score-circle">
        <strong>{percentage}%</strong>
        <span>Your Score</span>
      </div>

      <h2>{score} / {questions.length} Correct</h2>
      <p>{message}</p>

      <h3>Answer Review</h3>

      <div className="review-list">
        {questions.map((question, index) => {
          const selected = answers[index];
          const isCorrect = selected === question.answer;

          return (
            <div className="review-item" key={index}>
              <p>
                <strong>Q{index + 1}.</strong> {question.question}
              </p>

              <p>
                Your answer:{' '}
                {selected === undefined
                  ? 'Not answered'
                  : question.options[selected]}
              </p>

              <p>
                Correct answer: {question.options[question.answer]}
              </p>

              <span className={isCorrect ? 'review-correct' : 'review-wrong'}>
                {isCorrect ? 'Correct' : 'Incorrect'}
              </span>
            </div>
          );
        })}
      </div>

      <button onClick={onRestart}>Try Again</button>
    </div>
  );
}

export default Result;
