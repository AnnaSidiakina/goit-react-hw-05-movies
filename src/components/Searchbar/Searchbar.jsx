import React, { useState } from 'react';
import { SearchForm, SearchInput, SearchButton } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.currentTarget.value);
  };
  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(query);

    setQuery('');
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          onChange={handleInputChange}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </div>
  );
};
