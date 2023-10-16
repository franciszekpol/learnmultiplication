import React from 'react';
import styled from 'styled-components';

function LifeBar({ lifesCount }) {
  return (
    <Hearts>
      {lifesCount === 1 && <p display='inline'>&#x1F49C;</p>}
      {lifesCount === 2 && (
        <>
          <p display='inline'>&#x1F49C;</p>
          <p display='inline'>&#x1F49C;</p>
        </>
      )}
      {lifesCount === 3 && (
        <>
          <p display='inline'>&#x1F49C;</p>
          <p display='inline'>&#x1F49C;</p>
          <p display='inline'>&#x1F49C;</p>
        </>
      )}
    </Hearts>
  );
}

const Hearts = styled.div`
  display: flex;
  flex-direction: row;
`;

export default LifeBar;
