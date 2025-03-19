import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="app-container">
      <button className="styled-button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;