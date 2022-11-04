import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'APIService/API';
import { Title } from './Home.styled';

const TrendingMoviesList = () => {
  const [movies, setMovies] = useState(null);
  // const location = useLocation();

  useEffect(() => {
    async function addMoviesList() {
      try {
        const { results } = await fetchTrendingMovies();

        setMovies([...results]);
      } catch (error) {
        console.log(error.message);
      }
    }
    addMoviesList();
  }, []);

  return (
    <>
      {movies && (
        <div>
          <Title>Trending today</Title>

          <MovieList movies={movies} />
        </div>
      )}
    </>
  );
};
export default TrendingMoviesList;
