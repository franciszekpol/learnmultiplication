import React from 'react';
import WrongAnswersList from './WrongAnswersList';
import MediumButton from '../../components/MediumButton';
import styled from 'styled-components';
import { COLORS } from '../../data/colors';

const Container = styled.div`
  background-color: ${COLORS.menuBackground};
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const ScoreValue = styled.h1`
  font-size: 150px;
  font-weight: 500;
  margin: 20px;
`;

const ScoreDescription = styled.p`
  color: black;
  margin-bottom: -25px;
  font-weight: 450;
`;

const AnswersDescription = styled.p`
  font-size: 20px;
  margin: 0;
`;

function Score({
  roundCount,
  gameStatistics,
  handleClickMenu,
  handleClickLeaderboard,
}) {
  return (
    <Container>
      <ScoreDescription>YOUR SCORE:</ScoreDescription>
      <ScoreValue>{roundCount}</ScoreValue>
      <AnswersDescription>YOU'VE GOT THIS WRONG:</AnswersDescription>
      <WrongAnswersList gameStatistics={gameStatistics} />
      <MediumButton text={'RETURN TO MENU'} handleClick={handleClickMenu} />
      <MediumButton
        text={'SUBMIT YOUR SCORE'}
        handleClick={handleClickLeaderboard}
      />
    </Container>
  );
}

export default Score;
