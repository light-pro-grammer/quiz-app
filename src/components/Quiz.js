import { useSelector } from 'react-redux';
import Question from './Question';

function Quiz() {
  const currentQuestionIndex = useSelector((state) => state.currentQuestionIndex);
  const questions = useSelector((state) => state.questions);
  const currentQuestion = questions[currentQuestionIndex];

  return currentQuestion ? <Question {...currentQuestion} /> : null;
}

export default Quiz;
