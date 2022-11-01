import React, { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => setQuery(event.currentTarget.value);
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    reset();
  };
  function reset() {
    setQuery('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
