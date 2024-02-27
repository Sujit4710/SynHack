import React from 'react';
import styles from '../styles/Desque.module.css'

const Question = ({ question, options, handleAnswer }) => {
  console.log("hi", options);
  return (
    <div className="question-container">
      <h3>{question}</h3>
      <ul className="options-list">
        {options.map((option, index) => (
          <li key={index} onClick={() => handleAnswer(option)} className="option-item">
            <div > {option} 
            </div>
          
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
