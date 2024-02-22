import React, { useState, useEffect } from 'react';
import que from '../Question/Stage1.json';
import Question from '../component/desque';
import '../styles/Qizz.css';
import fiftyFifty from '../assets/fifty_fifty.png';
import flipQuestion from '../assets/flip_the_question.png';
import askExpert from '../assets/ask_the_expert.png';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { firestore, auth } from '../services/firebase';

export default function Quizz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [stopQuiz, setStopQuiz] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  const handleAnswer = (selectedOption) => {
    const correctOption = que[currentQuestion].correct_answer;

    if (selectedOption === correctOption) {
      setScore(score + 10);
    }

    setAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setAnswerSubmitted(false);
  };

  useEffect(() => {
    if (currentQuestion >= que.length) {
      setStopQuiz(true);
    }
  }, [currentQuestion]);

  const handleQuizComplete = async () => {
    // Store the score in Firestore
    try {
      const docRef = await addDoc(collection(firestore, 'scores'), {
        score: score,
      });
      console.log('Score stored with ID: ', docRef.id);
    } catch (error) {
      console.error('Error storing score:', error);
    }
  };

if (currentQuestion >= que.length) {

  handleQuizComplete();
  return (
    <div>
      <h2>Quiz completed!</h2>
      <p>Your score: {score}</p>
    </div>
  );

  }
return (
  <div className='main-page'>
    <div className="quiz-container">
      {stopQuiz ? (
        <div className="quiz-completed">
          <h2>Quiz completed!</h2>
          <p>Your score: {score}</p>
        </div>
      ) : (
        <div>
          <Question
            question={que[currentQuestion].question}
            options={que[currentQuestion].options}
            correctOption={que[currentQuestion].correct_answer}
            handleAnswer={handleAnswer}
          />
          {answerSubmitted && (
            <div className="answer-feedback">
              <p>Description: {que[currentQuestion].description}</p>
              <button onClick={handleNextQuestion}>Next Question</button>
            </div>
          )}
        </div>
      )}
    </div>
    <div className="lifelines">
      <div className="lifeline">
        <img src={fiftyFifty} alt="Fifty Fifty" />
      </div>
      <div className="lifeline">
        <img src={flipQuestion} alt="Flip Question" />
      </div>
      <div className="lifeline">
        <img src={askExpert} alt="Ask the Expert" />
      </div>
    </div>
  </div>
);
          }
