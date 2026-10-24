import { useState } from 'react';
import Result from './quizResult';
import QuestionCard from './questioncard.jsx';
import './App.css';

const questions = [
  {
    question: 'Which language is used to structure a web page?',
    options: ['CSS', 'HTML', 'JavaScript', 'Python'],
    answer: 1,
  },
  {
    question: 'Which language is used to style a web page?',
    options: ['HTML', 'Java', 'CSS', 'C'],
    answer: 2,
  },
  {
    question: 'Which keyword declares a variable in JavaScript?',
    options: ['let', 'style', 'page', 'design'],
    answer: 0,
  },
  {
    question: 'Which method displays a message in the browser console?',
    options: ['printPage()', 'console.log()', 'showText()', 'writeCSS()'],
    answer: 1,
  },
  {
    question: 'What does CSS stand for?',
    options: [
      'Computer Style Sheets',
      'Creative System Software',
      'Cascading Style Sheets',
      'Colorful Style System',
    ],
    answer: 2,
  },
  {
    question: 'Which symbol is used for a single-line comment in JavaScript?',
    options: ['<!-- -->', '**', '//', '##'],
    answer: 2,
  },
  {
    question: 'Which HTML tag creates a hyperlink?',
    options: ['<link>', '<a>', '<p>', '<h1>'],
    answer: 1,
  },
  {
    question: 'Which React hook is used to manage component state?',
    options: ['useStyle', 'usePage', 'useState', 'useLink'],
    answer: 2,
  },
  {
    question: 'Which CSS property changes text color?',
    options: ['font-style', 'background', 'text-size', 'color'],
    answer: 3,
  },
  {
    question: 'Which JavaScript operator checks strict equality?',
    options: ['=', '==', '===', '!='],
    answer: 2,
  },
];




function App() {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = answers[currentIndex];

  function selectAnswer(optionIndex) {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentIndex]: optionIndex,
    }));
  }

  function nextQuestion() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinished(true);
    }
  }

  function restartQuiz() {
    setStarted(false);
    setCurrentIndex(0);
    setAnswers({});
    setFinished(false);
  }

  const score = questions.filter(
    (question, index) => answers[index] === question.answer
  ).length;

  return (
    <div className="app">
      <div className="quiz-card">
        {!started ? (
          <>
            <h1>Interactive Quiz</h1>
            <p>Test your knowledge with our interactive quiz.</p>
            <p>10 Questions | Multiple Choice</p>
            <button onClick={() => setStarted(true)}>
              Start Quiz
            </button>
          </>
       ) : finished ? (
  <Result
    questions={questions}
    answers={answers}
    score={score}
    onRestart={restartQuiz}
  />
) : (
          <>
            <QuestionCard
              question={currentQuestion}
              questionNumber={currentIndex + 1}
              totalQuestions={questions.length}
              selectedAnswer={selectedAnswer}
              onSelectAnswer={selectAnswer}
            />

            <button
              className="next-button"
              onClick={nextQuestion}
              disabled={selectedAnswer === undefined}
            >
              {currentIndex === questions.length - 1
                ? 'Finish Quiz'
                : 'Next Question'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;


