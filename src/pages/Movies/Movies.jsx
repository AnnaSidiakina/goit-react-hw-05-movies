import React, { useState, useEffect } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchMoviesByQuery } from 'APIService/API';

export const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function addMoviesListByQuery() {
      try {
        const response = await fetchMoviesByQuery(query);
        setMoviesList([...response]);
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
    }
    addMoviesListByQuery();
  }, [query]);

  const formSubmitHandler = query => {
    setQuery(query);
  };

  return (
    <div>
      <Searchbar onSubmit={formSubmitHandler} />
      <MovieList moviesArray={moviesList} />
    </div>
  );
};
