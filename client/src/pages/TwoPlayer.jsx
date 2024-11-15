import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/TwoPlayer.css';
import BackgroundImage from '../assets/background.jpg';

const TwoPlayer = () => {
    const location = useLocation();
    const { player1 = 'Player 1', player2 = 'Player 2' } = location.state || {};

    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [currentPlayer, setCurrentPlayer] = useState(player1); // Start with Player 1

    const handleAnswerSubmit = (e) => {
        e.preventDefault();
        if (currentPlayer === player1) {
            setPlayer1Score(player1Score + 1);
            setCurrentPlayer(player2); // Switch to Player 2
        } else {
            setPlayer2Score(player2Score + 1);
            setCurrentPlayer(player1); // Switch back to Player 1
        }
        setCurrentAnswer(''); // Clear answer field for next turn
    };

    return (
        <div className="twoPlayerGame">
            <img className="backgroundIcon" alt="Background" src={BackgroundImage} />
            <h1 className="title">Two Player</h1>

            {/* Scoreboard */}
            <div className="scoreboard">
                <div className="score">
                    <h3>{player1}</h3>
                    <p>Score: {player1Score}</p>
                </div>
                <div className="score">
                    <h3>{player2}</h3>
                    <p>Score: {player2Score}</p>
                </div>
            </div>

            {/* Game Area */}
            <div className="gameBoard">
                <form onSubmit={handleAnswerSubmit} className="answerSection">
                <label htmlFor="answer" className="answerLabel">Answer:</label>
                    <input
                        type="text"
                        placeholder="Enter answer"
                        value={currentAnswer}
                        onChange={(e) => setCurrentAnswer(e.target.value)}
                        className="answerInput"
                    />
                    <button type="submit" className="submitButton">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default TwoPlayer;
