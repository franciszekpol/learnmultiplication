import React from 'react';
import MediumButton from '../../components/MediumButton';
import styled from 'styled-components';
import { COLORS } from '../../data/colors';

const Container = styled.div`
  background-color: ${COLORS.deeppurple};
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.p`
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 35px;
  color: white;
`;

const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-top: 0;
`;

const ListItem = styled.li`
  background-color: ${COLORS.banner};
  width: 90vw;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  height: 60px;
  margin: 4px 0;
  box-shadow: 0px 16px 30px -10px rgb(39 42 44 / 50%);
  color: ${(props) => {
    if (props.children[0].props.children === 'YOU') {
      return COLORS.lightred;
    } else {
      return 'black';
    }
  }};
`;

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  margin: 0 20px;
  font-size: 22px;
`;

function Leaderboard({ handleClickMenu }) {
  const leaderboardEntries = JSON.parse(localStorage.getItem('scores')) || [];
  leaderboardEntries.sort((a, b) =>
    parseInt(a.score) < parseInt(b.score) ? 1 : -1
  );

  return (
    <Container>
      <Title>LEADERBOARD</Title>
      <UnorderedList>
        {leaderboardEntries.map((entry) => {
          return (
            <ListItem key={entry.username}>
              <Paragraph>{entry.username}</Paragraph>
              <Paragraph>{entry.score}</Paragraph>
            </ListItem>
          );
        })}
      </UnorderedList>
      <MediumButton
        text={'RETURN TO MENU'}
        handleClick={() => {
          handleClickMenu();
        }}
      />
    </Container>
  );
}

export default Leaderboard;
