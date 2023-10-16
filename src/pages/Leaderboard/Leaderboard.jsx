import React from 'react';
import LargeButton from '../../components/LargeButton';
import styled from 'styled-components';

function Leaderboard({ handleClickMenu }) {
  const leaderboardEntries = JSON.parse(localStorage.getItem('scores')) || [];
  leaderboardEntries.sort((a, b) => (a.score < b.score ? 1 : -1));

  return (
    <>
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
      <LargeButton
        text={'RETURN TO MENU'}
        handleClick={() => {
          handleClickMenu();
        }}
      />
    </>
  );
}

const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #fffdee;
  width: 90%;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  height: 60px;
  margin: 4px 0;
  box-shadow: 0px 16px 30px -10px rgb(39 42 44 / 50%);
`;

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  margin: 0 20px;
  font-size: 22px;
`;

export default Leaderboard;
