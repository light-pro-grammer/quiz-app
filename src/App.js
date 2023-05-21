import './App.css';
import QuizProvider from './components/QuizProvider';
import Quiz from './components/Quiz';
import Score from './components/Score';

function App() {
  return (
    <QuizProvider>
      <Quiz />
      <Score />
    </QuizProvider>
  );
}

export default App;
