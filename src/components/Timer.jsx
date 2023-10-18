import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../data/colors';

const TimeBar = styled.div`
  height: 80px;
  position: relative;
`;

const Line = styled.p`
  height: 10px;
  border-radius: 5px;
  position: absolute;
  z-index: 1;
  margin-left: 20px;
  width: ${(props) => props.width};
  background-color: ${(props) => {
    if (props.time === 1) return '#ff0000';
    if (props.time === 2) return '#ff7400';
    if (props.time === 3) return '#ffc100';
    return COLORS.secondaryColor;
  }};
`;

const Icon = styled.p`
  font-size: 30px;
  position: absolute;
  z-index: 2;
  margin: 0 0 0 10px;
`;

function Timer() {
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

  return (
    <div>
      <p>Time: {time}</p>
      <TimeBar>
        {time > 0 ? (
          <Icon display='inline'>&#128163;</Icon>
        ) : (
          <Icon display='inline'>&#128293;</Icon>
        )}
        <Line width={getCurrentLineWidth()} time={time} />
      </TimeBar>
    </div>
  );
}

export default Timer;
