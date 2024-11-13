// src/pages/LogIn.js
import React, { useState } from 'react';
import styles from './LogIn.module.css';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LogIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState(null);

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(null); // Reset error message

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Login successful!");
      // Optionally redirect to the game or profile page
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className={styles.logIn}>
      {/* Your existing UI components */}
      <img className={styles.groupIcon} alt="" src="/assets/images/Group.png" />

      {/* Display error message if present */}
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}

      {/* Input fields */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        className={styles.inputText}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
        className={styles.inputText}
      />

      <button onClick={handleSubmit} className={styles.loginButton}>
        Log In
      </button>

      {/* Other components like Home button */}
    </div>
  );
};

export default LogIn;
