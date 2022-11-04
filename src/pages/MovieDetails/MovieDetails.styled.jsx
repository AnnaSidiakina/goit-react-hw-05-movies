import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid grey;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const MovieImg = styled.img`
  object-fit: cover;
  max-width: 300px;
  height: auto;
`;

export const MovieInfoBlock = styled.div`
  text-align: left;
  padding-left: 30px;
`;

export const MovieTitle = styled.h1`
  font-size: 24px;
`;

export const MovieInfoTitle = styled.h2`
  font-size: 18px;
`;

export const AddInfo = styled.ul`
  list-style: none;
`;

export const AddInfoItem = styled.li`
  margin-top: 20px;
`;

export const AddInfoLink = styled(NavLink)`
  background-color: rgb(206, 206, 197);
  width: 50px;
  padding: 5px 15px;
  border-radius: 3px;
  margin: 0 auto 10px;
  text-decoration: none;

  &.active {
    background-color: rgb(145, 182, 187);
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    background-color: rgb(172, 171, 165);
  }
`;
