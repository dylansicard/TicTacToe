import React, { useState } from 'react';
import Board from './Board';
import './App.css';

const App = () => {
  const [id, setId] = useState('1');

  const restartGame = () => {
    setId(Math.random().toString());
  };
  return (
    <div>
      <Board key={id} restartGame={restartGame} />
    </div>
  );
};

export default App;
