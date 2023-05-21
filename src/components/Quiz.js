import { useContext } from 'react';
import QuizContext from './QuizContext';
import Question from './Question';

function Quiz() {
  const { currentQuestionIndex, questions } = useContext(QuizContext);
  const currentQuestion = questions[currentQuestionIndex];

  return currentQuestion ? <Question {...currentQuestion} /> : null;
}

export default Quiz;
