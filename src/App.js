import React, { useState } from "react";

const XDictionary = () => {
  // Static dictionary data
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  // State for search term and result
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState({ found: false, meaning: "" });

  // Function to handle search
  const handleSearch = () => {
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundWord) {
      setResult({ found: true, meaning: foundWord.meaning });
    } else {
      setResult({ found: false, meaning: "Word not found in the dictionary." });
    }
  };

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"5px"}}>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <h3>Definition:</h3>
        {result.meaning && (
          <p>{result.found ? result.meaning : <>{result.meaning}</>}</p>
        )}
      </div>
    </div>
  );
};

export default XDictionary;
