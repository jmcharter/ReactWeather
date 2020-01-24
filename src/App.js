import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Clock from './components/Clock';

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
          <Clock />
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default App;
