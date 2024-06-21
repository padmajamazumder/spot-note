import React from 'react';

const LandingPage = () => {
  const notes = [
    { id: 1, title: 'First Note', content: 'This is the first note' },
    { id: 2, title: 'Second Note', content: 'This is the second note' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Landing Page</h1>
      <ul className="space-y-4">
        {notes.map(note => (
          <li key={note.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{note.title}</h2>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LandingPage;
