import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

import BackgroundImage from '../assets/background.jpg';
import MinionIcon1 from '../assets/minions.png';
import MinionIcon2 from '../assets/Icon.png';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home">
            <img className="backgroundImage" alt="Background" src={BackgroundImage} />
            <div className="welcomeMinionss">Welcome Minions</div>
            <p className="descriptionText">
                Illumination, Universal, and Gameloft bring you Minion Rush, an endless running game that can be enjoyed offline, anytime! 
                Run through lots of cool locations, dodging devious traps, battling vile villains, and collecting loads of bright, beautiful Bananas!
            </p>
            <button className="signupButton" onClick={() => navigate('/signup')}>Sign Up</button>
            <button className="guestButton" onClick={() => navigate('/game-selection')}>Guest</button>
            <img className="minionIcon1" alt="Minion Icon 1" src={MinionIcon1} />
            <img className="minionIcon2" alt="Minion Icon 2" src={MinionIcon2} />
        </div>
    );
};

export default Home;
