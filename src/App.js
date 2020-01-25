import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';


function App() {

  return (
    <div className="app">
      <div className="outer">
        <div className="header">
          <Search />
        </div>
        <div className="footer"></div>
      </div>
    </div >
  );
}

export default App;
