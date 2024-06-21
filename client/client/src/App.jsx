import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Note from './pages/Note';
import Music from './pages/Music';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note" element={<Note />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </div>
  );
}

export default App;
