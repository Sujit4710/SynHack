import que from '../Question/Stage1.json'
import Question from '../component/desque';
import React, { useState } from 'react';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { firestore, auth } from '../services/firebase';

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
        const handleQuizComplete = async () => {
            // Get the current user ID
            const userId = auth.currentUser.uid;

            // Store the score in Firestore along with the user ID
            try {
                const scoresCollection = collection(firestore, 'scores');
                const userScoreDocRef = doc(scoresCollection, userId);

                // Check if the user already has a score document
                const userScoreDocSnapshot = await userScoreDocRef.get();

                if (userScoreDocSnapshot.exists()) {
                    // Update the existing document
                    await setDoc(userScoreDocRef, { score: score }, { merge: true });
                } else {
                    // Create a new document for the user
                    await addDoc(userScoreDocRef, { score: score });
                }

                console.log('Score stored for user with ID: ', userId);
            } catch (error) {
                console.error('Error storing score:', error);
            }
        };

        if (currentQuestion >= data.length) {
            // Quiz completed, handle completion logic
            handleQuizComplete();
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
    } }