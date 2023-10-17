import React from 'react';
import styled from 'styled-components';

function WrongAnswersList({ gameStatistics }) {
  return (
    <UnorderedList>
      {gameStatistics.map((round, i) => {
        if (!round.isCorrect) {
          return (
            <ListItem key={i}>
              {round.multiplierA} × {round.multiplierB} = {round.correctAnswer}{' '}
              <i>
                <s>{round.userAnswer}</s>
              </i>
            </ListItem>
          );
        } else return null;
      })}
    </UnorderedList>
  );
}
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
  background-color: #fffdee;
`;

export default WrongAnswersList;
