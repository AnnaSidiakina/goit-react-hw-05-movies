import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
`;

export const SearchInput = styled.input`
  min-width: 400px;
  min-height: 40px;
  padding: 0 5px;
`;

export const SearchButton = styled.button`
  margin-left: 20px;
  padding: 5px 15px;
  background-color: rgb(206, 206, 197);
  border-radius: 3px;
  border: rgb(206, 206, 197);
  cursor: pointer;
  height: 40px;

  &:hover,
  &:focus {
    background-color: rgb(172, 171, 165);
  }
`;
