import { useContext } from 'react';
import QuizContext from './QuizContext';

function Question({ question, choices, answer }) {
  const { score, setScore, currentQuestionIndex, setCurrentQuestionIndex, hasEnded, setHasEnded, questions } =
    useContext(QuizContext);

  const handleGuess = (choice) => {
    if (answer.includes(choice)) setScore(score + 1);
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setHasEnded(true);
    }
  };

  if (hasEnded) {
    return null;
  }

  return (
    <div className="question-container">
      <p>{question}</p>
      {choices.map((choice, index) => (
        <button className="guess-button" key={index} onClick={() => handleGuess(choice)}>
          {choice}
        </button>
      ))}
    </div>
  );
}

export default Question;
