import React from 'react';
import PropTypes from 'prop-types';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import {
  emailState,
  firstNameState,
  lastNameState,
  phoneNumberState,
  profileCompletionState,
} from '../../store/User';
import Comparator from '../../components/Comparator';

const Info = styled.address`
  border: 1px solid var(--border-color);
  padding: 1rem;
  border-radius: var(--border-radius);
`;

function Dashboard() {
  const [firstName] = useRecoilState(firstNameState);
  const [lastName] = useRecoilState(lastNameState);
  const [email] = useRecoilState(emailState);
  const [phoneNumber] = useRecoilState(phoneNumberState);
  const isProfileComplete = useRecoilValue(profileCompletionState);

  return (
    <div>
      <h2>{firstName}'s Dashboard</h2>
      <Info>
        {firstName} {lastName}
        <br />
        {email}
        <br />
        {phoneNumber}
      </Info>
      <Comparator currency={'BTC'} />
    </div>
  );
}

export default Dashboard;
