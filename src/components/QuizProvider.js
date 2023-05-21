import { useState } from 'react';
import QuizContext from './QuizContext';

function QuizProvider({ children }) {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);

  const questions = [
    {
      question: 'What is React?',
      choices: [
        'A JavaScript library for building user interfaces',
        'A CSS framework',
        'A programming language',
        'A database',
      ],
      answer: ['A JavaScript library for building user interfaces'],
    },
    {
      question: 'Who developed React?',
      choices: ['Google', 'Microsoft', 'Facebook', 'Amazon'],
      answer: ['Facebook'],
    },
    {
      question: 'What is a React component?',
      choices: [
        'A JavaScript function or class that optionally accepts inputs and returns a React element',
        'A CSS selector',
        'A type of data structure',
        'A server-side service',
      ],
      answer: ['A JavaScript function or class that optionally accepts inputs and returns a React element'],
    },
    {
      question: 'What is JSX?',
      choices: [
        'A JavaScript syntax extension that looks similar to XML',
        'A CSS preprocessor',
        'A JavaScript library',
        'A type of database query',
      ],
      answer: ['A JavaScript syntax extension that looks similar to XML'],
    },
    {
      question: 'In which lifecycle event do you make AJAX requests and why?',
      choices: [
        'componentWillMount because it triggers before DOM rendering',
        'componentDidMount because it triggers after DOM rendering',
        'componentDidUpdate because it triggers after props or state changes',
        'componentWillUnmount because it triggers before the component is unmounted and destroyed',
      ],
      answer: ['componentDidMount because it triggers after DOM rendering'],
    },
    {
      question: 'What is a key prop in React?',
      choices: ['A unique identifier', 'The name of a component', 'A type of event', 'A method in React.Component'],
      answer: ['A unique identifier'],
    },
    {
      question: 'What is Redux used for in React?',
      choices: [
        'To share component logic',
        'To define component layout',
        'To manage application state',
        'To style components',
      ],
      answer: ['To manage application state'],
    },
    {
      question: "What is the purpose of React's context API?",
      choices: [
        'To make AJAX requests',
        'To share global data across components',
        'To manage local state of the component',
        'To add third-party plugins',
      ],
      answer: ['To share global data across components'],
    },
    {
      question: 'What is a higher order component (HOC)?',
      choices: [
        'A component that accepts a component as an argument and returns a new component',
        'A parent component in the DOM tree',
        'The highest component in the component hierarchy',
        'A component that modifies the props of a child component',
      ],
      answer: ['A component that accepts a component as an argument and returns a new component'],
    },
    {
      question: 'What is the virtual DOM in React?',
      choices: [
        'A simplified copy of the actual DOM',
        'The part of the DOM that React components are rendered to',
        'A server-side representation of the DOM',
        'A method for updating the actual DOM',
      ],
      answer: ['A simplified copy of the actual DOM'],
    },
  ];

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setHasEnded(false);
  };

  const value = {
    score,
    setScore,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    hasEnded,
    setHasEnded,
    questions,
    restartQuiz,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export default QuizProvider;
