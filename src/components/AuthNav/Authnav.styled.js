import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 16px;
  font-weight: 700;
  color: #04273b;
  font-size: 24px;
  text-transform: uppercase;
}
  &:hover {
    color: #eb7750;
  }
   
`;
