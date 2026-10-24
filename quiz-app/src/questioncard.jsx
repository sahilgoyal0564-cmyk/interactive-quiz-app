
function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
}) {
  return (
    <div>
      <p className="progress">
        Question {questionNumber} of {totalQuestions}
      </p>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${(questionNumber / totalQuestions) * 100}%`,
          }}
        />
      </div>

      <h2>{question.question}</h2>

      <div className="options">
        {question.options.map((option, index) => {
          let optionClass = 'option';

          if (selectedAnswer !== undefined) {
            if (index === question.answer) {
              optionClass += ' correct';
            } else if (index === selectedAnswer) {
              optionClass += ' wrong';
            }
          }

          return (
            <button
              key={option}
              className={optionClass}
              onClick={() => onSelectAnswer(index)}
              disabled={selectedAnswer !== undefined}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selectedAnswer !== undefined && (
        <p
          className={
            selectedAnswer === question.answer
              ? 'correct-text'
              : 'wrong-text'
          }
        >
          {selectedAnswer === question.answer
            ? 'Correct answer! Well done.'
            : `Incorrect. Correct answer: ${question.options[question.answer]}`}
        </p>
      )}
    </div>
  );
}

export default QuestionCard;
