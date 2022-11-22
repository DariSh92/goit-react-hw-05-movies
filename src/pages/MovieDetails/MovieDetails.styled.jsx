import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
  padding: 16px 28px;
`;

export const LinkBtn = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 30px;
  color: black;
  :hover {
    color: #C0C0C0;
  }
`;

export const AddInfo = styled.div`
  margin-top: 16px;
`;

export const AddInfoTitle = styled.p`
  font-size: 16px;
`;

export const AddInfoItem = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const AddInfoWrapper = styled.div`
  padding: 16px;
`;

export const AddInfoItemLink = styled(NavLink)`
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  color: #008080;
  :hover {
    color: #C0C0C0;
  }
`;

export const AddInfoUl = styled.ul`
list-style: none;
`;