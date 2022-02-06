import React from 'react';

const Winner = ({ checkWinner, gameState }) => {
  if (checkWinner(gameState) === 0) {
    return <h1>Winner: X</h1>;
  } else if (checkWinner(gameState) === 1) {
    return <h1>Winner: 0</h1>;
  } else {
    return <h1></h1>;
  }
};

export default Winner;
