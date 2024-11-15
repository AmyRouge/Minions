// src/pages/Profile.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Changed firestore to db
import '../styles/Profile.css';

import BackgroundImage from '../assets/background.jpg';
import MinionIcon from '../assets/minions.png';

const Profile = () => {
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const [profileData, setProfileData] = useState({
        username: '',
        league: '',
        xp: 0,
        userId: ''
    });

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (currentUser) {
                try {
                    const userDoc = await getDoc(doc(db, 'users', currentUser.uid)); // Changed firestore to db
                    if (userDoc.exists()) {
                        setProfileData({
                            username: userDoc.data().username,
                            league: userDoc.data().league,
                            xp: userDoc.data().xp,
                            userId: currentUser.uid
                        });
                    } else {
                        console.log('No profile found!');
                    }
                } catch (error) {
                    console.error('Error fetching profile:', error);
                }
            }
        };

        fetchUserProfile();
    }, [currentUser]);

    const handleGoToHome = () => {
        navigate('/game-selection');
    };

    return (
        <div className="profilee">
            <img className="backgroundIcon" alt="Background" src={BackgroundImage} />
            <div className="profileContainer">
                <h1 className="profileTitle">Profile</h1>
                <form className="profileForm">
                    <label className="formLabel">Name</label>
                    <input
                        type="text"
                        className="inputField"
                        value={profileData.username}
                        readOnly
                    />

                    <label className="formLabel">League</label>
                    <input
                        type="text"
                        className="inputField"
                        value={profileData.league}
                        readOnly
                    />

                    <label className="formLabel">Exp</label>
                    <input
                        type="text"
                        className="inputField"
                        value={profileData.xp}
                        readOnly
                    />

                    <label className="formLabel">User Id</label>
                    <input
                        type="text"
                        className="inputField"
                        value={profileData.userId}
                        readOnly
                    />
                </form>
            </div>
            <button className="homeButton" onClick={handleGoToHome}>Home</button>
            <img className="minionIcon" alt="Minion Icon" src={MinionIcon} />
        </div>
    );
};

export default Profile;
