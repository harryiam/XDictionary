import React, { useState } from 'react';

const initialDictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

function XDictionary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = () => {
    const result = initialDictionary.find(entry =>
      entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    setSearchResult(result ? result.meaning : "Word not found in the dictionary");
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Enter a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <h2>Definition:</h2>
      <p>{searchResult}</p>
      {/* {searchResult && (
        <div>
          <h2>Definition:</h2>
          <p>{searchResult}</p>
        </div>
      )}
      {!searchResult && (
        <div>
          <h2>Definition:</h2>
          <p>Word not found in the dictionary.</p>
        </div>
      )} */}
    </div>
  );
}

export default XDictionary;
