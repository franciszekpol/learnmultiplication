import React from 'react';
import { useState } from 'react';
import Round from '../Round/Round';
import Score from '../Score/Score';

function Game({ handleClickMenu, handleClickLeaderboard }) {
  const [roundCount, setRoundCount] = useState(0);
  const [lifesCount, setLifesCount] = useState(3);
  const [gameStatistics, setGameStatistics] = useState([]);

  function roundHasEnded(multiplierA, multiplierB, answer) {
    updateStatistics(multiplierA, multiplierB, answer);
    setRoundCount((roundCount) => roundCount + 1);
    if (multiplierA * multiplierB !== answer) {
      setLifesCount((lifesCount) => lifesCount - 1);
    }
  }

  function updateStatistics(multiplierA, multiplierB, answer) {
    setGameStatistics(() => {
      const statistics = [...gameStatistics];
      statistics.push({
        multiplierA: multiplierA,
        multiplierB: multiplierB,
        userAnswer: answer,
        correctAnswer: multiplierA * multiplierB,
        isCorrect: multiplierA * multiplierB === answer ? true : false,
      });

      return statistics;
    });
  }

  return (
    <>
      {lifesCount > 0 && (
        <Round
          roundCount={roundCount}
          lifesCount={lifesCount}
          handleClick={roundHasEnded}
        />
      )}
      {lifesCount === 0 && (
        <Score
          roundCount={roundCount}
          gameStatistics={gameStatistics}
          handleClickMenu={handleClickMenu}
          handleClickLeaderboard={handleClickLeaderboard}
        />
      )}
    </>
  );
}

export default Game;
