// src/pages/SignUp.js
import React, { useState } from 'react';
import styles from './SignUp.css';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '', // We'll use displayName in Firebase
    email: '',
    password: '',
    confirmPassword: ''
  });
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

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Update the user's profile with the username
      await updateProfile(userCredential.user, {
        displayName: formData.username
      });

      alert("Signup successful! Please log in.");
      // Optionally redirect to login page
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className={styles.signUp}>
      {/* Your existing UI components */}
      <img className={styles.groupIcon} alt="" src="/assets/images/Group.png" />
      <div className={styles.welcomeMinions}>Welcome Minions</div>

      {/* Display error message if present */}
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}

      {/* Input fields with event listeners for capturing user data */}
      <input
        type="text"
        name="username"
        placeholder="User Name"
        value={formData.username}
        onChange={handleInputChange}
        className={styles.inputText}
      />

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

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        className={styles.inputText}
      />

      <button onClick={handleSubmit} className={styles.signupButton}>
        Sign Up
      </button>

      {/* Other components like Home button */}
    </div>
  );
};

export default SignUp;
