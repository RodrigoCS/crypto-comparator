import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Input from '../../components/Input';
import Form from '../../components/Form';
import { useRecoilState } from 'recoil';
import {
  firstNameState,
  lastNameState,
  emailState,
  phoneNumberState,
} from '../../store/User';
import Button from '../../components/Button';
import FormRow from '../../components/FormRow';
import { useLocation, useNavigate } from 'react-router-dom';
import ErrorBox from '../../components/ErrorBox';

const Container = styled.div``;

function Welcome() {
  const [firstName, setFirstName] = useRecoilState(firstNameState);
  const [lastName, setLastName] = useRecoilState(lastNameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberState);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname;

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstNameValue = e.target.firstName.value;
    const lastNameValue = e.target.lastName.value;
    const emailValue = e.target.email.value;
    const phoneNumberValue = e.target.phoneNumber.value;
    setFirstName(firstNameValue);
    setLastName(lastNameValue);
    setEmail(emailValue);
    setPhoneNumber(phoneNumberValue);
    navigate('/dashboard');
  };

  return (
    <Container>
      <h2>Welcome</h2>
      {from && (
        <ErrorBox style={{ marginBottom: '1rem' }}>
          You must enter your information to view the page at {from}
        </ErrorBox>
      )}
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <Input
            type={'text'}
            name={'firstName'}
            placeholder={'First Name'}
            defaultValue={firstName}
          />
          <Input
            type={'text'}
            name={'lastName'}
            placeholder={'Last Name'}
            defaultValue={lastName}
          />
        </FormRow>
        <FormRow>
          <Input
            type={'email'}
            name={'email'}
            placeholder={'Email'}
            defaultValue={email}
          />
        </FormRow>
        <FormRow>
          <Input
            type={'phone'}
            name={'phoneNumber'}
            placeholder={'Phone Number'}
            defaultValue={phoneNumber}
          />
        </FormRow>
        <Button type={'submit'}>Submit</Button>
      </Form>
    </Container>
  );
}

export default Welcome;
