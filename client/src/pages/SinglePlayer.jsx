import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SinglePlayer.css';
import BackgroundImage from '../assets/background.jpg';
import MinionIcon from '../assets/minions.png';

const SinglePlayer = () => {
    const [answer, setAnswer] = useState('');
    const [timeLeft, setTimeLeft] = useState(60); // 60 seconds timer
    const navigate = useNavigate();

    useEffect(() => {
        if (timeLeft === 0) {
            alert("Time's up!");
            // Handle timeout logic here
            return;
        }
        const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Answer submitted:', answer);
        // Add game logic here for validating the answer
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
                <form onSubmit={handleSubmit} className="answerSection">
                    <label htmlFor="answer" className="answerLabel">Answer:</label>
                    <input
                        id="answer"
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Your Answer"
                        className="answerInput"
                    />
                    <button type="submit" className="submitButton">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SinglePlayer;
