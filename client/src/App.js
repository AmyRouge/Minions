// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GameSelection from './pages/GameSelection';
import LogIn from './pages/Login';
import Result from './pages/Result';
import PlayerConnect from './pages/PlayerConnect';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SinglePlayer from './pages/SinglePlayer';
import TwoPlayer from './pages/TwoPlayer';
import Menu from './pages/Menu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-selection" element={<GameSelection />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/result" element={<Result />} />
        <Route path="/player-connect" element={<PlayerConnect />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/single-player" element={<SinglePlayer />} />
        <Route path="/two-player" element={<TwoPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
