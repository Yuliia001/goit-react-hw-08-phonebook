import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: black;
  &:hover {
    background-color: white;
    color: black;
  }
  &:activ {
    background-color: yellow;
    color: blau;
  }
`;
