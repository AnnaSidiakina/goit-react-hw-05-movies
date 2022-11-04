import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Menu = styled.header`
  display: flex;
  justify-content: flex-end;
  height: 40px;
  border-bottom: 2px solid grey;
  align-items: center;
`;

export const Link = styled(NavLink)`
  margin-left: 20px;
  text-decoration: none;
  padding: 5px 10px;
  background-color: rgb(206, 206, 197);
  border-radius: 3px;
  &.active {
    background-color: rgb(145, 182, 187);
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    background-color: rgb(172, 171, 165);
  }
`;
