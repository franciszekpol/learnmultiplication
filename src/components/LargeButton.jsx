import React from 'react';
import styled from 'styled-components';

function LargeButton({ text, handleClick }) {
  return <Button onClick={handleClick}>{text}</Button>;
}

export default LargeButton;

const Button = styled.button`
  margin: 10px;
  width: 350px;
  height: 130px;
  font-size: 40px;
  background-color: #f7d407;
  color: #642813;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 16px 30px -10px rgba(150, 170, 180, 0.5);
`;
