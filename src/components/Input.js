import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
`;

function Input(props) {
  return <StyledInput {...props} />;
}

export default Input;
