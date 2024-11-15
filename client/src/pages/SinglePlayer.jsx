import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { doc, updateDoc, increment, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import '../styles/SinglePlayer.css';
import BackgroundImage from '../assets/background.jpg';
import MinionIcon from '../assets/minions.png';

const SinglePlayer = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [solution, setSolution] = useState(null);
    const [answer, setAnswer] = useState('');
    const [timeLeft, setTimeLeft] = useState(60);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [feedback, setFeedback] = useState('');
    const navigate = useNavigate();
    const { currentUser, getLeague } = useAuth(); // getLeague function to determine league

    const totalQuestions = 5;

    const fetchQuestion = async () => {
        try {
            const response = await fetch('https://marcconrad.com/uob/banana/api.php');
            const data = await response.json();
            setCurrentQuestion(data.question);
            setSolution(data.solution);
            setFeedback('Solve the question!');
        } catch (error) {
            setFeedback('Failed to load the question. Please try again later.');
        }
    };

    useEffect(() => {
        fetchQuestion();
    }, []);

    useEffect(() => {
        if (timeLeft === 0) {
            endGame();
            return;
        }
        const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (parseInt(answer) === solution) {
            setFeedback('Correct!');
            setCorrectAnswers((prev) => prev + 1);

            if (currentQuestionIndex + 1 < totalQuestions) {
                setCurrentQuestionIndex((prev) => prev + 1);
                fetchQuestion();
                setAnswer('');
            } else {
                endGame(true);
            }
        } else {
            setFeedback('Not Correct! Try again.');
        }
    };

    const endGame = async (win = false) => {
        const xp = win ? 200 : correctAnswers * 20;
        const message = win ? 'You Win!' : 'Game Over!';

        if (currentUser) {
            try {
                const userDocRef = doc(db, 'users', currentUser.uid);

                // Increment XP
                await updateDoc(userDocRef, {
                    xp: increment(xp),
                });

                // Fetch updated XP from Firestore
                const updatedDoc = await getDoc(userDocRef);
                const updatedXp = updatedDoc.data().xp;

                // Determine new league based on updated XP
                const newLeague = getLeague(updatedXp);

                // Update the league in Firestore
                await updateDoc(userDocRef, {
                    league: newLeague,
                });

                // Navigate to the result page with updated league and XP
                navigate('/result', {
                    state: {
                        xp: updatedXp,
                        league: newLeague,
                        message,
                    },
                });
            } catch (error) {
                console.error('Error updating XP and league:', error);
            }
        }
    };

    const handleGoToProfile = () => {
        navigate('/profile');
    };

    const handleGoToGameSelection = () => {
        navigate('/game-selection');
    };

    const timePercentage = (timeLeft / 60) * 100;

    return (
        <div className="singlePlayer">
            <img className="backgroundIcon" alt="Background" src={BackgroundImage} />
            <div className="topBar">
                <button className="homeButton" onClick={handleGoToGameSelection}>Home</button>
            </div>
            <h2 className="gameTitle">Single Player</h2>
            <div className="gameArea">
                <img className="minionIcon" alt="Minion Icon" src={MinionIcon} onClick={handleGoToProfile} />
                <div className="timerContainer">
                    <div className="timerBar" style={{ width: `${timePercentage}%` }}>
                        {timeLeft}s
                    </div>
                </div>
                {currentQuestion ? (
                    <img src={currentQuestion} alt="Banana Game Question" className="questionImage" />
                ) : (
                    <p>Loading question...</p>
                )}
                <form onSubmit={handleSubmit} className="answerSections">
                    <label htmlFor="answer" className="answerLabel">Answer:</label>
                    <input
                        id="answer"
                        type="number"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Your Answer"
                        className="answerInput"
                    />
                    <button type="submit" className="submitButton">Submit</button>
                </form>
                <p className="feedback">{feedback}</p>
                <div className="progressContainer">
                    <p className="progress">Question {currentQuestionIndex + 1} of {totalQuestions}</p>
                    <p className="score">Correct Answers: {correctAnswers}</p>
                </div>
            </div>
        </div>
    );
};

export default SinglePlayer;
