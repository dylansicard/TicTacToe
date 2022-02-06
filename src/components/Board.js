import React, { useState } from 'react';
import Square from './Square';
import Winner from './Winner';

const Board = ({ restartGame }) => {
  const [player, setPlayer] = useState(0);
  const [mounted, setMounted] = useState(true);
  const [random, setRandom] = useState(0);
  // some state to monitor which square was clicked on, by whom
  const [gameState, setGameState] = useState([
    { player: 0, squareIds: [] },
    { player: 1, squareIds: [] },
  ]);

  const reset = () => {
    restartGame();
  };

  // update state based on which player clicked which square
  const gameStateCallBack = (e) => {
    const squareId = parseInt(e.target.id);
    const currGameState = gameState;
    const currentPlayer = currGameState[player];
    currentPlayer.squareIds = [...currentPlayer.squareIds, squareId];
    setGameState(currGameState);
  };

  // communicate active player from board to square
  const updatePlayer = (e) => {
    setPlayer(player === 0 ? player + 1 : player - 1);
  };

  function renderSquare(i) {
    return (
      <Square
        updatePlayer={updatePlayer}
        player={player}
        id={i}
        gameStateCallBack={gameStateCallBack}
      ></Square>
    );
  }

  // check for winner
  const checkWinner = (gameState) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let player0Moves = gameState[0].squareIds;
    let player1Moves = gameState[1].squareIds;

    for (let i = 0; i < win.length; i++) {
      if (
        // every and includes checks to see if playermoves contains every move of winning combo
        win[i].every((value) => {
          return player0Moves.includes(value);
        })
      ) {
        return gameState[0].player;
      }

      if (
        win[i].every((value) => {
          return player1Moves.includes(value);
        })
      ) {
        return gameState[1].player;
      }
    }
    return null;
  };

  console.log(`winner: ${checkWinner(gameState)}`);

  return (
    <div className="game-board">
      <div className="grid-row">
        {mounted && renderSquare(0)}
        {mounted && renderSquare(1)}
        {mounted && renderSquare(2)}
      </div>
      <div className="grid-row">
        {mounted && renderSquare(3)}
        {mounted && renderSquare(4)}
        {mounted && renderSquare(5)}
      </div>
      <div className="grid-row">
        {mounted && renderSquare(6)}
        {mounted && renderSquare(7)}
        {mounted && renderSquare(8)}
      </div>
      <div id="info">
        <h1>{`Player ${player === 0 ? 'X' : 'O'}`}</h1>
        <Winner gameState={gameState} checkWinner={checkWinner} />
        <button onClick={reset}>Reset Game</button>
      </div>
    </div>
  );
};

export default Board;
