import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchMoviesByQuery } from 'APIService/API';
import styles from './Movies.module.css';

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('search') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }

    async function addMoviesListByQuery() {
      try {
        const { results } = await fetchMoviesByQuery(query);
        setMoviesList([...results]);
        // console.log(results);
      } catch (error) {
        console.log(error.message);
      }
    }
    addMoviesListByQuery();
  }, [query]);

  const formSubmitHandler = query => {
    setQuery(query);
    // setMoviesList([]);
    setSearchParams(query !== '' ? { search: query } : {});
  };

  return (
    <>
      {moviesList && (
        <div>
          <Searchbar onSubmit={formSubmitHandler} />
          <ul className={styles.List}>
            {moviesList.map(movie => {
              return movie.hasOwnProperty('title') ? (
                <li key={movie.id} className={styles.ListItem}>
                  <Link
                    to={`${movie.id}`}
                    className={styles.ListLink}
                    state={{ from: location }}
                  >
                    {movie.title}
                  </Link>
                </li>
              ) : (
                <li key={movie.id} className={styles.ListItem}>
                  <Link
                    to={`${movie.id}`}
                    state={{ from: location }}
                    className={styles.ListLink}
                  >
                    {movie.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
export default Movies;
