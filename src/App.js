import React, { useState } from 'react';

const XDictionary = () => {
  // Initialize the dictionary state
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  // State for the search term and the result
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  // Function to handle the search
  const handleSearch = () => {

    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundWord) {
      setResult(`Definition: ${foundWord.meaning}`);
    } else {
      setResult('Word not found in the dictionary.');
    }
  };

  return (
    <div>
      <h1>XDictionary</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a word"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {result && (
          <div>
            {result.startsWith('Definition:') ? (
              <>
                <h3>Definition:</h3>
                <p>{result.split('Definition: ')[1]}</p>
              </>
            ) : (
              <p>{result}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default XDictionary;