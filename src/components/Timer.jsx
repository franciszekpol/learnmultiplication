import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../data/colors';

const TimeBar = styled.div`
  height: 60px;
  position: relative;
  width: 350px;
`;

const Line = styled.p`
  height: 10px;
  border-radius: 5px;
  position: absolute;
  z-index: 1;
  box-shadow: 0 2px gray;
  color: black;
  width: ${(props) => props.width};
  background-color: ${(props) => {
    if (props.time === 1) return '#ff0000';
    if (props.time === 2) return '#ff7400';
    if (props.time === 3) return '#ffc100';
    return COLORS.secondaryColor;
  }};
`;

const Icon = styled.p`
  font-size: 35px;
  position: absolute;
  z-index: 2;
  margin: 0 0 0 -15px;
`;

const Countdown = styled.p`
  text-align: left;
  font-weight: bold;
  margin-bottom: 0;
`;

function Timer({ handleClick }) {
  const [time, setTime] = useState(10);

  function getCurrentLineWidth() {
    return `${35 * time}px`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time === -1) {
      handleClick();
    }
  }, [time]);

  return (
    <div>
      <Countdown>{time}</Countdown>
      <TimeBar>
        {time > 0 ? (
          <Icon display='inline'>&#128163;</Icon>
        ) : (
          <Icon display='inline'>&#128165;</Icon>
        )}
        <Line width={getCurrentLineWidth()} time={time} />
      </TimeBar>
    </div>
  );
}

export default Timer;
