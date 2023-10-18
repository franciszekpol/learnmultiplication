import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../data/colors';

const Button = styled.button`
  margin: 10px;
  width: 280px;
  height: 100px;
  font-size: 30px;
  background-color: ${COLORS.roundBackground};
  color: ${COLORS.fontPrimary};
  border: none;
  border-radius: 15px;
  box-shadow: 0px 16px 30px -10px rgba(150, 170, 180, 0.5);
`;

function MediumButton({ text, handleClick }) {
  return <Button onClick={handleClick}>{text}</Button>;
}

export default MediumButton;
