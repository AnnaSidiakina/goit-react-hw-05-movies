import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonWrapper = styled.div`
  padding: 30px;
`;

export const GoBackLink = styled(Link)`
  text-decoration: none;
  padding: 5px 10px;
  background-color: rgb(206, 206, 197);
  border-radius: 3px;

  &:hover,
  &:focus {
    background-color: rgb(172, 171, 165);
  }
`;
