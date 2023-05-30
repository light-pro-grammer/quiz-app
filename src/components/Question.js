import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/quizSlice';

function Question({ question, choices, answer }) {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score);
  const currentQuestionIndex = useSelector((state) => state.currentQuestionIndex);
  const hasEnded = useSelector((state) => state.hasEnded);
  const questions = useSelector((state) => state.questions);

  const handleGuess = (choice) => {
    if (answer.includes(choice)) dispatch(actions.setScore(score + 1));
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      dispatch(actions.setCurrentQuestionIndex(nextQuestion));
    } else {
      dispatch(actions.setHasEnded(true));
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
