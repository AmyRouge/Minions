// src/pages/SignUp.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';

import BackgroundImage from '../assets/background.jpg';
import MinionIcon from '../assets/minions.png';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const { signup } = useAuth();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (formData.password !== formData.confirmPassword) {
            setErrorMessage("Passwords do not match!");
            return;
        }

        try {
            // Sign up the user and create profile in Firestore
            await signup(formData.email, formData.password, formData.username);
            navigate('/game-selection');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="signUp">
            <img className="backgroundImage" alt="Background" src={BackgroundImage} />
            <div className="welcomeMinions">Welcome Minions</div>
            <img className="minionIcon" alt="Minion Icon" src={MinionIcon} />

            <div className="formContainer">
                <h2 className="formTitle">Sign Up</h2>
                {errorMessage && <p className="error">{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <label className="formLabel">User Name</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="User Name"
                        className="inputField"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                    <label className="formLabel">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="inputField"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <label className="formLabel">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="inputField"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    <label className="formLabel">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="inputField"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit" className="signUpButton">Sign Up</button>
                </form>
            </div>

            <button className="homeButton" onClick={() => navigate('/')}>Home</button>
        </div>
    );
};

export default SignUp;
