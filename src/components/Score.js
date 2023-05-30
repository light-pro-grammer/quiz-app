import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/quizSlice';

function Score() {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score);
  const hasEnded = useSelector((state) => state.hasEnded);

  return hasEnded ? (
    <div className="score-container">
      <h2>Your score is: {score}</h2>
      <button className="restart-button" onClick={() => dispatch(actions.restartQuiz())}>
        Restart Quiz
      </button>
    </div>
  ) : null;
}

export default Score;
