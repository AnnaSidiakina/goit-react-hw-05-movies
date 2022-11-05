import React from 'react';
import PropTypes from 'prop-types';
import { SearchForm, SearchInput, SearchButton } from './Searchbar.styled';

export const Searchbar = ({ onSubmit, value }) => {
  return (
    <div>
      <SearchForm onSubmit={onSubmit}>
        <SearchInput
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          defaultValue={value}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
