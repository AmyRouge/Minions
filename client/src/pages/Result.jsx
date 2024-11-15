import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Result.css';
import BackgroundImage from '../assets/background.jpg';
import MinionIcon from '../assets/minions.png';

const Result = () => {
    const navigate = useNavigate();

    const handlePlayAgain = () => {
        navigate('/game-selection');
    };

    return (
        <div className="result">
            <img className="backgroundIcon" alt="Background" src={BackgroundImage} />
            <div className="resultContainer">
                <h1 className="resultTitle">Game Over</h1>
                <form className="resultForm">
                    <label className="formLabel">Exp</label>
                    <input type="text" className="inputField" placeholder="Experience Points" readOnly />

                    <label className="formLabel">League</label>
                    <input type="text" className="inputField" placeholder="Your League" readOnly />
                </form>
                <button className="playAgainButton" onClick={handlePlayAgain}>Play Again</button>
            </div>
            <img className="minionIcon" alt="Minion Icon" src={MinionIcon} />
        </div>
    );
};

export default Result;
