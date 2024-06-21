import React, { useState } from 'react';

const Music = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tracks, setTracks] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/spotify/search?query=${searchTerm}`);
    const data = await response.json();
    setTracks(data.tracks.items);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Music</h1>
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for music"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-purple-500 text-white rounded">Search</button>
      </form>
      <ul className="space-y-4 mt-4">
        {tracks.map(track => (
          <li key={track.id} className="border p-4 rounded shadow">
            <p>{track.name} by {track.artists[0].name}</p>
            <audio controls>
              <source src={track.preview_url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Music;
