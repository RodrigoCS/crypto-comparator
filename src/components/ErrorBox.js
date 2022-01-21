import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #ffc5d8;
  padding: 1rem;
  border-radius: var(--border-radius);
  color: #fd6387;
`;

function ErrorBox(props) {
  return <Container {...props} />;
}

export default ErrorBox;
