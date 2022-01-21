import React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { fetcher } from '../utils/fetch';

const Container = styled.div``;

function useFetch() {
  const { data, error } = useSWR(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&amp;ids=bitcoin%2Cethereum%2Cripple`,
    fetcher,
  );
  return { data, error };
}

function Comparator({ currency }) {
  const { data, error } = useFetch();
  console.log('🚀 ~ file: Comparator.js ~ line 17 ~ Comparator ~ error', error);
  console.log('🚀 ~ file: Comparator.js ~ line 17 ~ Comparator ~ data', data);

  return (
    <Container>
      <h3>Comparator</h3>
      {currency}
    </Container>
  );
}

export default Comparator;
