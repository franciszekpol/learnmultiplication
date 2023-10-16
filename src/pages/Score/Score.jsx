import React from 'react';
import WrongAnswersList from './WrongAnswersList';
import MediumButton from '../../components/MediumButton';

function Score({
  roundCount,
  gameStatistics,
  handleClickMenu,
  handleClickLeaderboard,
}) {
  return (
    <div>
      <p>Game has ended!</p>
      <p>You have gotten {roundCount} points.</p>
      <p>This is what you got wrong:</p>
      <WrongAnswersList gameStatistics={gameStatistics} />
      <MediumButton text={'RETURN TO MENU'} handleClick={handleClickMenu} />
      <MediumButton
        text={'SUBMIT YOUR SCORE'}
        handleClick={handleClickLeaderboard}
      />
    </div>
  );
}

export default Score;
