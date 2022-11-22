import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  flex-wrap: wrap;
  gap: 12px;
`;
export const Item = styled.li`
  width: 100px;
  height: 100px;
  margin-right: 30px;
  margin-bottom: 30px;
  border: 2px solid #417d69;;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 10px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  &.active {
    color: #c01062;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #C0C0C0;
  }
`;