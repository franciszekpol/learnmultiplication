import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../data/colors';

const Button = styled.button`
  margin: 12px;
  width: 160px;
  height: 160px;
  background-color: white;
  border: none;
  border-radius: 30px;
  color: ${COLORS.fontPrimary};
  box-shadow: 0px 16px 30px -10px rgba(150, 170, 180, 0.5);
  text-align: center;
  font-size: 60px;
`;

function SquareButton({ number, handleClick }) {
  return <Button onClick={handleClick}>{number}</Button>;
}

export default SquareButton;
