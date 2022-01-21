import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: 1px solid var(--primary-color);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color linear 0.2s;
  &:hover {
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }
`;

function Button(props) {
  return <StyledButton {...props} />;
}

export default Button;
