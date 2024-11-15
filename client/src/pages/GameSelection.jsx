import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GameSelection.css';

import BackgroundImage from '../assets/background.jpg';
import MinionIcon from '../assets/minions.png';

const GameSelection = () => {
    const navigate = useNavigate();

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

            <img className="minionIcon" alt="Minion Icon" src={MinionIcon} onClick={handleGoToProfile} />

            <div className="navigationButtonss">
                <button className="homeButtons" onClick={handleGoHome}>Home</button>
                <button className="profileButtons" onClick={handleGoToProfile}>Profile</button>
            </div>
        </div>
    );
};

export default GameSelection;
