import { Provider } from 'react-redux';
import store from './redux/store';
import Quiz from './components/Quiz';
import Score from './components/Score';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Quiz />
      <Score />
    </Provider>
  );
}

export default App;
