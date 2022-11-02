import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = event => {
    event.preventDefault();
    setQuery(event.currentTarget.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    setSearchParams(query !== '' ? { search: query } : {});
    setQuery('');
  };
  // function reset() {
  //   setQuery('');
  // }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <input
          onChange={handleInputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          className={styles.SearchInput}
        />
        <button type="submit" className={styles.SearchButton}>
          Search
        </button>
      </form>
    </div>
  );
};
