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
import ProtectedRoute from './components/ProtectedRoute'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route
          path="/game-selection"
          element={
            <ProtectedRoute>
              <GameSelection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/result"
          element={
            <ProtectedRoute>
              <Result />
            </ProtectedRoute>
          }
        />
        <Route
          path="/player-connect"
          element={
            <ProtectedRoute>
              <PlayerConnect />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/single-player"
          element={
            <ProtectedRoute>
              <SinglePlayer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/two-player"
          element={
            <ProtectedRoute>
              <TwoPlayer />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
