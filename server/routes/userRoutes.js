const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Handle user signup
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  
  try {
    // Assuming User is a Mongoose model (or Firebase if you're using that)
    const newUser = new User({ username, email, password });
    await newUser.save();
    
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Error creating user" });
  }
});

module.exports = router;
