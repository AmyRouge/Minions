import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PlayerConnect.css';
import BackgroundImage from '../assets/background.jpg';
import MinionIcon from '../assets/minions.png';

const PlayerConnect = () => {
    const [player2, setPlayer2] = useState('');
    const navigate = useNavigate();

    const handleStartGame = () => {
        if (player2.trim()) {
            navigate('/two-player-game', { state: { player1: 'Player 1', player2 } });
        } else {
            alert('Please enter Player 2 name');
        }
    };

    return (
        <div className="playerConnect">
            <img className="backgroundIcon" alt="Background" src={BackgroundImage} />
            <h1 className="title">Two Players</h1>
            <div className="playerConnectContainer">
                <h2 className="profileTitle">Profile</h2>
                <label className="playerLabel">Player 1</label>
                <input
                    className="inputField"
                    type="text"
                    value="Player 1"
                    readOnly
                />
                <label className="playerLabel">Player 2</label>
                <input
                    className="inputField"
                    type="text"
                    placeholder="Enter Player 2 Name"
                    value={player2}
                    onChange={(e) => setPlayer2(e.target.value)}
                />
                <button className="playButton" onClick={handleStartGame}>Play</button>
            </div>
            <img className="minionIcon" alt="Minion Icon" src={MinionIcon} />
            <div className="navigationButtons">
                <button className="homeButton" onClick={() => navigate('/home')}>Home</button>
                <button className="profileButton" onClick={() => navigate('/profile')}>Profile</button>
            </div>
        </div>
    );
};

export default PlayerConnect;
