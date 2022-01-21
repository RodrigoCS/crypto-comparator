import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;

function Form({ ...props }) {
  return (
    <Container>
      <form {...props} />
    </Container>
  );
}

export default Form;
