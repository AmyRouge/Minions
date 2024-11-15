import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GameSelection.css';

import BackgroundImage from '../assets/background.jpg';
import MinionIcon from '../assets/minions.png';

const GameSelection = () => {
    const navigate = useNavigate();
    const [showInstructions, setShowInstructions] = useState(false);

    const handleSinglePlayer = () => {
        navigate('/single-player');
    };

    const handleTwoPlayer = () => {
        navigate('/two-player');
    };

    const handleGoToProfile = () => {
        navigate('/profile');
    };

    const handleGoHome = () => {
        navigate('/');
    };

    const toggleInstructions = () => {
        setShowInstructions((prev) => !prev);
    };

    return (
        <div className="gameSelection">
            <img className="backgroundIcon" alt="Background" src={BackgroundImage} />
            <div className="welcomeMinions">Welcome Minions</div>

            <div className="gameSelectionContainer">
                <h1 className="selectPlayer">Select Player</h1>
                <div className="singlePlayerButton" onClick={handleSinglePlayer}>
                    <span className="labelText">Single Player</span>
                </div>
                <div className="twoPlayerButton" onClick={handleTwoPlayer}>
                    <span className="labelText">Two Player</span>
                </div>
            </div>

            <img
                className="topLeftMinionIcon"
                alt="Minion Icon"
                src={MinionIcon}
                onClick={handleGoToProfile}
            />

            <div className="navigationButtons">
                <button className="instructionsButton" onClick={toggleInstructions}>Instructions</button>
            </div>

            {showInstructions && (
                <div className="instructionsPopup">
                    <h2>Game Instructions</h2>
                    <p>In Single Player mode, answer questions correctly to earn XP. In Two Player mode, compete with a friend to see who scores higher!</p>
                    <button className="closeButton" onClick={toggleInstructions}>Close</button>
                </div>
            )}
        </div>
    );
};

export default GameSelection;
