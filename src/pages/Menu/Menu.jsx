import React from 'react';
import LargeButton from '../../components/LargeButton';

function Menu({ handleClickGame, handleClickLeaderboard }) {
  return (
    <>
      <h1>LEARN MULTIPLICATION!</h1>
      <LargeButton
        text={'NEW GAME'}
        handleClick={() => {
          handleClickGame();
        }}
      />
      <LargeButton
        text={'LEADERBOARD'}
        handleClick={() => {
          handleClickLeaderboard();
        }}
      />
    </>
  );
}

export default Menu;
