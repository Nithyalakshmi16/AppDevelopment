// App.js
import React from 'react';
import useDarkMode from './usedarkmode';
import './App.css';

const App = () => {
  const [isDarkMode, toggleMode] = useDarkMode();

  return (
    <div className={isDarkMode ? 'app dark-mode' : 'app light-mode'}>
      <h1>NITHYA LAKSHMI</h1>
      
      <button onClick={toggleMode}>
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default App;
