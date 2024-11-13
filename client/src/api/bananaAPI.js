// src/api/bananaAPI.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Signup API function
export const signup = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/users/signup`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Signup failed");
  }
};

// Login API function
export const login = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};
