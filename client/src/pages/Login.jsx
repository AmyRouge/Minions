import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

import BackgroundImage from '../assets/background.jpg'; // Replace with your actual background
import MinionIcon from '../assets/minions.png'; // Replace with your actual minion icon

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/game-selection');
        } catch (error) {
            console.error('Failed to log in', error);
        }
    };

    return (
        <div className="login">
            <img className="backgroundImage" alt="Background" src={BackgroundImage} />
            <div className="welcomeMinions">Welcome Minions</div>
            <img className="minionIcon" alt="Minion Icon" src={MinionIcon} />

            <div className="loginContainer">
                <h1 className="welcomeBack">Welcome Back</h1>
                <form onSubmit={handleLogin}>
                    <label className="formLabel">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="inputField"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="formLabel">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="inputField"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="loginButton">Log In</button>
                    <button type="button" className="signUpButton" onClick={() => navigate('/signup')}>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
