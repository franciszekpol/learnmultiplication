import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../data/colors';

const UnorderedList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const ListItem = styled.li`
  width: 80%;
  margin: 4px;
  border: none;
  border-radius: 18px;
  font-size: 30px;
  background-color: ${COLORS.banner};
`;

const WrongAnswer = styled.i`
  color: ${COLORS.wrongAnswer};
`;

function WrongAnswersList({ gameStatistics }) {
  return (
    <UnorderedList>
      {gameStatistics.map((round, i) => {
        if (!round.isCorrect) {
          return (
            <ListItem key={i}>
              {round.multiplierA} × {round.multiplierB} = {round.correctAnswer}{' '}
              <WrongAnswer>
                <s>{round.userAnswer}</s>
              </WrongAnswer>
            </ListItem>
          );
        } else return null;
      })}
    </UnorderedList>
  );
}

export default WrongAnswersList;
