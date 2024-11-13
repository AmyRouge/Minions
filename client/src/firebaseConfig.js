// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // If using Firestore

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnStzEzfRCS4TCCA5WUotQcbTGhbzCdTQ",
    authDomain: "minions-5d853.firebaseapp.com",
    projectId: "minions-5d853",
    storageBucket: "minions-5d853.firebasestorage.app",
    messagingSenderId: "1038240132311",
    appId: "1:1038240132311:web:77481201f455425ee15492",
    measurementId: "G-VQG7WMJYVF"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // If using Firestore

export { auth, db };
