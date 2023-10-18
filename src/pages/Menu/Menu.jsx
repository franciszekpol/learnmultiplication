import React from 'react';
import LargeButton from '../../components/LargeButton';
import styled from 'styled-components';
import { COLORS } from '../../data/colors';

const Container = styled.div`
  background-color: ${COLORS.menuBackground};
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

function Menu({ handleClickGame, handleClickLeaderboard }) {
  return (
    <Container>
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
    </Container>
  );
}

export default Menu;
