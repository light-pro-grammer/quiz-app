import { useContext } from 'react';
import QuizContext from './QuizContext';

function Score() {
  const { score, hasEnded, restartQuiz, questions } = useContext(QuizContext);

  return hasEnded ? (
    <div className="score-container">
      <h2>
        Your score is: {score}/{questions.length}
      </h2>
      <button className="restart-button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  ) : null;
}

export default Score;
