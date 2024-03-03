import React, { useState } from 'react';
import './App.css';

function App() {
  const [showFinalResults, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      text: "Who is known as the father of Indian Space Program? ",
      options: [
        { id: 0, text: "Prof U R Rao", isCorrect: false },
        { id: 1, text: "Dr. Vikram Ambalal Sarabhai", isCorrect: true },
        { id: 2, text: "Dr. APJ. Abdul Kalam", isCorrect: false },
        { id: 3, text: "Dr. K. Sivan", isCorrect: false },
      ],
    },
    {
      text: "Dr.Krishnaswamy Kasturirangan served as the Chairman of ISRO during which years:?",
      options: [
        { id: 0, text: "2009-2015", isCorrect: false },
        { id: 1, text: "1972-1984", isCorrect: false },
        { id: 2, text: "1994-2003", isCorrect: true },
        { id: 3, text: "1963-1971", isCorrect: false },
      ],
    },
    {
      text: "When was India's first satellite, Aryabhata Launched?",
      options: [
        { id: 0, text: "1975", isCorrect: true },
        { id: 1, text: "1969", isCorrect: false },
        { id: 2, text: "1980", isCorrect: false },
        { id: 3, text: "1985", isCorrect: false },
      ],
    },
    {
      text: "What was ISRO previously known as?",
      options: [
        { id: 0, text: " Indian National Committee for Space Research (INCOSPAR)", isCorrect: true },
        { id: 1, text: " Barath  Committee for Space Research (BCOSPAR)", isCorrect: false },
        { id: 2, text: " Indian National Committee of Research (INCOR)", isCorrect: false },
        { id: 3, text: " Indian National Committee for Space Organization (INCOSPAO)", isCorrect: false },
      ],
    },
    {
      text: "Where was the Chandrayaan-3 launched to?",
      options: [
        { id: 0, text: "North pole of Moon", isCorrect: false },
        { id: 1, text: "Equator of Mars", isCorrect: true },
        { id: 2, text: "Orbit of Sun", isCorrect: false },
        { id: 3, text: "South pole of moon", isCorrect: true },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResult(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResult(false);
  };

  return (
    <div className="App">
      <h1>Quiz</h1>
      <h2>Current Score: {score}</h2>
      {showFinalResults ? (
        <div className='result'>
          <h1>Final Result</h1>
          <h2>{score} out of {questions.length} correct - ({(score / questions.length) * 100}%) </h2>
          <button onClick={() => restartGame()}>Try again</button>
        </div>
      ) : (
        <div className='question'>
          <h2>Question {currentQuestion + 1} of {questions.length}</h2>
          <h3 className='qn'>{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
