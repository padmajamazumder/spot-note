import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Note from './pages/Note';
import Music from './pages/Music';
import './index.css';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="flex space-x-4 p-4 bg-gray-800 text-white">
      <button onClick={() => navigate('/')} className="px-4 py-2 bg-blue-500 rounded">Home</button>
      <button onClick={() => navigate('/note')} className="px-4 py-2 bg-green-500 rounded">Add Note</button>
      <button onClick={() => navigate('/music')} className="px-4 py-2 bg-purple-500 rounded">Music</button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/note" element={<Note />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </Router>
  );
}

export default App;
