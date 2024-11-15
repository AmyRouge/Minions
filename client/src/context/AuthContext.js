// src/context/AuthContext.js
import React, { useContext, useState, useEffect, createContext } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Define the leagues
    const leagues = [
        { name: 'Rookie', minXp: 0, maxXp: 300 },
        { name: 'Explorer', minXp: 300, maxXp: 600 },
        { name: 'Adventurer', minXp: 600, maxXp: 1000 },
        { name: 'Hero', minXp: 1000, maxXp: 1500 },
        { name: 'Legend', minXp: 1500, maxXp: Infinity },
    ];

    // Determine the league name based on XP
    const getLeague = (xp) => {
        return leagues.find(league => xp >= league.minXp && xp < league.maxXp).name;
    };

    // Sign up function with Firestore profile creation
    const signup = async (email, password, username) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Create user profile in Firestore
        await setDoc(doc(db, 'users', user.uid), {
            username: username,
            xp: 0,
            league: getLeague(0),  // Starts in the first league
        });

        return user;
    };

    // Login function
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout function
    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        logout,
        getLeague,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
