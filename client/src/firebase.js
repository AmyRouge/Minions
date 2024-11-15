import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAnStzEzfRCS4TCCA5WUotQcbTGhbzCdTQ",
  authDomain: "minions-5d853.firebaseapp.com",
  projectId: "minions-5d853",
  storageBucket: "minions-5d853.firebasestorage.app",
  messagingSenderId: "1038240132311",
  appId: "1:1038240132311:web:77481201f455425ee15492",
  measurementId: "G-VQG7WMJYVF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
