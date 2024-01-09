import React, { useState } from 'react'
import { useParams,Link } from 'react-router-dom'

const Playquiz = ({quiz}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer == quiz.question[currentQuestion].ans) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.question.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quiz.question.length}
          <Link to="/quizpost"><h2 >back</h2></Link>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{quiz.question.length}
            </div>
            <div className="question-text">
              {quiz.question[currentQuestion].q1}
            </div>
          </div>
          <div className="answer-section">
            {quiz.question[currentQuestion].op.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );

}

export default Playquiz