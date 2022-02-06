import React, { useState, useEffect } from 'react';

const Square = ({ id, player, gameStateCallBack, updatePlayer }) => {
  const [color, setColor] = useState();
  const [xo, setXO] = useState('');
  const palet = ['bg-red', 'bg-purple'];
  const colorSelect = (player) => {
    return palet[player];
  };

  console.log(`player from square: ${player}`);

  return (
    <div className="square-background">
      <button
        className={`square`}
        id={id}
        onClick={(e) => {
          if (e.target.innerHTML) {
            return;
          }
          gameStateCallBack(e);
          setXO(player === 0 ? 'X' : 'O');
          console.log(xo);
          e.target.className = `square ${palet[player]}`;
          updatePlayer();
        }}
      >
        {xo}
      </button>
    </div>
  );
};

export default Square;
