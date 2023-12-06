import React from 'react';
import Computer from './Computer';
import Player from './Player';
import Result from './Result';

const Game = (props) => {
  const {
    state,
    status,
    setPlayerSelection,
    toggleIsCheating
  } = props;
  
  return (
    <div>
      <main className="game">
        <Computer state={state} toggleIsCheating={toggleIsCheating} />
        <Player
          state={state}
          setPlayerSelection={setPlayerSelection}
        />
      </main>
      <Result status={status} />
    </div>
  );
};

export default Game;
