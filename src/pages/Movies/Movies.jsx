import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchMoviesByQuery } from 'APIService/API';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';
  // const [query, setQuery] = useState('');

  useEffect(() => {
    if (!search) {
      return;
    }
    setMoviesList([]);

    async function addMoviesListByQuery() {
      try {
        const { results } = await fetchMoviesByQuery(search);
        setMoviesList([...results]);
      } catch (error) {
        console.log(error.message);
      }
    }
    addMoviesListByQuery();
  }, [search]);

  const formSubmitHandler = query => {
    // setQuery(query);
    // console.log(query);
    // console.log(search);
    setSearchParams({ search: query });
    setMoviesList([]);
  };

  return (
    <>
      <div>
        <Searchbar onSubmit={formSubmitHandler} />
        {moviesList && <MovieList movies={moviesList} />}
      </div>
    </>
  );
};
export default Movies;
