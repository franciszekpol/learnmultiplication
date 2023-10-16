import React from 'react';

function WrongAnswersList({ gameStatistics }) {
  return (
    <>
      {gameStatistics.map((round, i) => {
        if (!round.isCorrect) {
          return (
            <li key={i}>
              {round.multiplierA} × {round.multiplierB} = {round.correctAnswer}{' '}
              <i>
                <s>{round.userAnswer}</s>
              </i>
            </li>
          );
        }
      })}
    </>
  );
}

export default WrongAnswersList;
