import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  padding: 30px;
`;

export const LoadMoreBtn = styled.button`
  text-decoration: none;
  padding: 5px 10px;
  background-color: rgb(206, 206, 197);
  border-radius: 3px;
  cursor: pointer;
  border-color: rgb(206, 206, 197);

  &:hover,
  &:focus {
    background-color: rgb(172, 171, 165);
  }
`;
