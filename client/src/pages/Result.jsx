import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import '../styles/Result.css';

import BackgroundImage from '../assets/background.jpg';
import MinionIcon from '../assets/minions.png';

const Result = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { currentUser, getLeague } = useAuth();
    const [currentXp, setCurrentXp] = useState(0);
    const [currentLeague, setCurrentLeague] = useState('Rookie');
    const { xp, message } = location.state || {
        xp: 0,
        message: 'Game Over!',
    };

    // Define league colors (avoiding yellow and orange)
    const leagueColors = {
        Rookie: '#4a90e2',        // Light Blue
        Explorer: '#7b68ee',      // Medium Slate Blue
        Adventurer: '#32cd32',    // Lime Green
        Hero: '#8a2be2',          // Blue Violet
        Legend: '#9400d3'         // Dark Violet
    };

    // Fetch user's XP and determine the league
    useEffect(() => {
        const fetchUserProfile = async () => {
            if (currentUser) {
                try {
                    const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
                    if (userDoc.exists()) {
                        const totalXp = userDoc.data().xp;
                        setCurrentXp(totalXp);
                        setCurrentLeague(getLeague(totalXp));
                    } else {
                        console.log('No profile found!');
                    }
                } catch (error) {
                    console.error('Error fetching profile:', error);
                }
            }
        };

        fetchUserProfile();
    }, [currentUser, getLeague]);

    const handlePlayAgain = () => {
        navigate('/game-selection');
    };

    // Define league thresholds
    const leagueThresholds = {
        Rookie: { min: 0, max: 300 },
        Explorer: { min: 300, max: 600 },
        Adventurer: { min: 600, max: 1000 },
        Hero: { min: 1000, max: 1500 },
        Legend: { min: 1500, max: Infinity }
    };

    // Get the current league threshold and calculate progress
    const { min, max } = leagueThresholds[currentLeague];
    const progress = ((currentXp - min) / (max - min)) * 100;

    return (
        <div className="result">
            <img className="backgroundIcon" alt="Background" src={BackgroundImage} />
            <div className="resultContainer">
                <h1 className="resultTitle">{message}</h1>
                <form className="resultForm">
                    <label className="formLabel">Exp Gained</label>
                    <input
                        type="text"
                        className="inputField"
                        value={xp}
                        readOnly
                    />

                    <label className="formLabel">League</label>
                    <input
                        type="text"
                        className="inputField"
                        value={currentLeague}
                        readOnly
                    />
                </form>
                <div className="progressBarContainer">
                    <div
                        className="progressBar"
                        style={{
                            width: `${progress}%`,
                            backgroundColor: leagueColors[currentLeague],
                        }}
                    >
                        {currentXp} XP
                    </div>
                </div>
                <button className="playAgainButton" onClick={handlePlayAgain}>
                    Play Again
                </button>
            </div>
            <img className="minionIcon" alt="Minion Icon" src={MinionIcon} />
        </div>
    );
};

export default Result;
