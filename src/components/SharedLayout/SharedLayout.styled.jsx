import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
  width: auto;
`;

export const Header = styled.header`
  padding: 32px 32px;
  border-bottom: 2px solid #297261;
  background-color: #F5F5F5;
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #008080;
  font-weight: 700;
  font-size: 30px;
  &.active {
    color: white;
    background-color:#5F9EA0;
  }
`;