import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 0.5rem;
  input {
    margin-right: 0.5rem;
  }
`;

function FormRow({ children }) {
  return <Container>{children}</Container>;
}

export default FormRow;
