import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

import BackgroundImage from '../assets/background.jpg'; // Replace with your actual background
import MinionIcon from '../assets/minions.png'; // Replace with your actual minion icon

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for error message
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear any previous error messages
        try {
            await login(email, password);
            navigate('/game-selection');
        } catch (error) {
            console.log("Login error:", error); // Log the entire error object for debugging
            console.log("Error code:", error.code); // Log error code specifically

            // Display error message based on Firebase error codes
            switch (error.code) {
                case 'auth/invalid-credential':
                    setErrorMessage('Invalid email or password');
                    break;
                case 'auth/missing-password':
                    setErrorMessage('Please enter the password.');
                    break;
                case 'auth/too-many-requests':
                    setErrorMessage('Too many failed login attempts. Please try again later.');
                    break;
                default:
                    setErrorMessage('Failed to log in. Please try again.');
                    break;
            }
        }
    };

    return (
        <div className="login">
            <img className="backgroundImage" alt="Background" src={BackgroundImage} />
            <div className="welcomeMinions">Welcome Minions</div>
            <img className="minionIcon" alt="Minion Icon" src={MinionIcon} />

            <div className="loginContainer">
                <h1 className="welcomeBack">Welcome Back</h1>
                {errorMessage && <p className="error">{errorMessage}</p>} {/* Display error message */}
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
                    <button type="button" className="signUpButtonx" onClick={() => navigate('/signup')}>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
