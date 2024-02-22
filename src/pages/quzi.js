import que from '../Question/Stage1.json'
import Question from '../component/desque';
import React, { useState } from 'react';

export default function Quizz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswer = (selectedOption) => {
        const correctOption = que[currentQuestion].correct_answer;

        if (selectedOption === correctOption) {
            setScore(score + 1);
        }

        // Move to the next question
        setCurrentQuestion(currentQuestion + 1);
    };

    if (currentQuestion >= que.length) {
        return (
            <div>
                <h2>Quiz completed!</h2>
                <p>Your score: {score}</p>
            </div>
        );
    }

    return (
        
        <Question
        question={que[currentQuestion].question}
        options={que[currentQuestion].options}
        correctOption={que[currentQuestion].correct_answer}
        handleAnswer={handleAnswer}
  />
    
    );
}