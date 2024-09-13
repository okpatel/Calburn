import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
`;

function Card({ title, children }) {
  return (
    <CardContainer>
      <h2>{title}</h2>
      {children}
    </CardContainer>
  );
}

export default Card;
