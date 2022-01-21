import React from 'react';
import { Link, matchPath, matchRoutes, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
`;
const Logo = styled.div`
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    font-size: 2rem;
    content: '💱';
  }
`;
const Nav = styled.nav`
  display: flex;
  background-color: var(--primary-color);
  color: var(--secondary-color);
`;
const NavItem = styled(Link)`
  color: var(--secondary--color);
  background-color: var(--primary-color);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.active &&
    css`
      background-color: red;
    `};
  &:hover {
    color: var(--primary-color);
    background-color: var(--secondary-color);
  }
`;
const Content = styled.main`
  padding: 2rem;
`;

function AppLayout() {
  const location = useLocation();
  return (
    <Container>
      <Nav>
        <Logo>
          <h1>Currency Converter</h1>
        </Logo>
        <NavItem active={location?.pathname === '/'} to={'/'}>
          🏠 Welcome
        </NavItem>
        <NavItem active={location?.pathname === '/dashboard'} to={'dashboard'}>
          📊 Dashboard
        </NavItem>
      </Nav>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
}

export default AppLayout;
