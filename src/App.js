import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

const API_Key = "5311918c1c662f293ab051013c9773de"

function App() {

  const [clickCount, setCount] = useState(0);

  return (
    <div className="app">
      <div className="outer">
        <div className="header">
          <SearchBar />
        </div>
        <div className="body">
          <button onClick={() => setCount(clickCount + 1)} className="countbtn">Click to count</button>
          <p className="counter">You've clicked {clickCount} times!</p>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default App;
