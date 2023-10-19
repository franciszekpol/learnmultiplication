import React from 'react';
import LargeButton from '../../components/LargeButton';
import styled from 'styled-components';
import { COLORS } from '../../data/colors';

const Container = styled.div`
  background-color: ${COLORS.menuBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;

function Menu({ handleClickGame, handleClickLeaderboard }) {
  return (
    <Container>
      <h1>LEARN MULTIPLICATION!</h1>
      <Buttons>
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
      </Buttons>
    </Container>
  );
}

export default Menu;
