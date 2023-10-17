import React from 'react';
import SquareButton from './SquareButton';
import LifeBar from './LifeBar';
import styled from 'styled-components';
import { COLORS } from '../../data/colors.js';

const Container = styled.div`
  text-align: center;
  background-color: ${COLORS.roundBackground};
  color: ${COLORS.fontPrimary};
  height: 100vh;
`;

const InfoBar = styled.div`
  display: flex;
`;

const InfoText = styled.p`
  font-size: 25px;
  margin: auto;
  display: flex;
  text-align: center;
`;

const AssignmentText = styled.p`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
`;

function Round({ roundCount, lifesCount, handleClick }) {
  const minRange = 2;
  const maxRange = 9;

  const [multiplierA, multiplierB] = getRandomizedMultipliers();
  const answersArray = getGeneratedAnswers();

  function getRandomizedMultipliers() {
    let a = Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
    let b = Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);

    if (a > b) {
      let tmp = a;
      a = b;
      b = tmp;
    }

    return [a, b];
  }

  function getGeneratedAnswers() {
    let answers = [];

    const rightAnswer = multiplierA * multiplierB;
    const wrongAnswer1 = (multiplierA + 1) * multiplierB;
    const wrongAnswer2 = multiplierA * (multiplierB - 1);

    answers.push(rightAnswer, wrongAnswer1, wrongAnswer2);
    answers.sort(() => Math.random() - 0.5);

    let wrongAnswersArray = [];
    if (rightAnswer > 50) {
      if (rightAnswer % 2) {
        wrongAnswersArray.push(answers[0], answers[0] - 4);
      } else {
        wrongAnswersArray.push(answers[0] + 5, answers[0] - 5);
      }
    } else {
      if (rightAnswer % 2) {
        wrongAnswersArray.push(answers[0] + 2, answers[0] - 2);
      } else {
        wrongAnswersArray.push(answers[0] + 1, answers[0] - 1);
      }
    }

    wrongAnswersArray.sort(() => Math.random() - 0.5);
    answers.push(wrongAnswersArray[0]);
    answers.sort(() => Math.random() - 0.5);

    return answers;
  }

  return (
    <Container>
      <InfoBar>
        <InfoText>Round: {roundCount}</InfoText>
        <InfoText>
          <LifeBar lifesCount={lifesCount} />
        </InfoText>
      </InfoBar>
      <AssignmentText>
        {multiplierA} × {multiplierB}
      </AssignmentText>
      {answersArray.map((answer, i) => {
        return (
          <SquareButton
            number={answer}
            key={i}
            handleClick={() => handleClick(multiplierA, multiplierB, answer)}
          />
        );
      })}
    </Container>
  );
}

export default Round;
