import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { MovieList } from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'APIService/API';
import styles from './Home.module.css';

const TrendingMoviesList = () => {
  const [moviesList, setMoviesList] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function addMoviesList() {
      try {
        const { results } = await fetchTrendingMovies();

        setMoviesList([...results]);
      } catch (error) {
        console.log(error.message);
      }
    }
    addMoviesList();
  }, []);

  // const [moviesList, setMoviesList] = useState([]);
  return (
    <>
      {moviesList && (
        <div>
          <h1 className={styles.Title}>Trending today</h1>
          <ul className={styles.List}>
            {moviesList.map(movie => {
              return movie.hasOwnProperty('title') ? (
                <li key={movie.id} className={styles.ListItem}>
                  <Link
                    to={`movies/${movie.id}`}
                    state={{ from: location }}
                    className={styles.ListLink}
                  >
                    {movie.title}
                  </Link>
                </li>
              ) : (
                <li key={movie.id} className={styles.ListItem}>
                  <Link
                    to={`movies/${movie.id}`}
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
export default TrendingMoviesList;
