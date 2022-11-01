import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchTrendingMovies, getMovieByID } from '../APIService/API';
import { MovieList } from './MovieList/MovieList';
import { Movies } from '../pages/Movies/Movies';
import { Layout } from './Layout/Layout';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';

export const App = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    async function addMoviesList() {
      try {
        const response = await fetchTrendingMovies();

        setMoviesList([...response]);
      } catch (error) {
        console.log(error.message);
      }
    }
    addMoviesList();
  }, []);
  getMovieByID(83659);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MovieList moviesArray={moviesList} />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </div>
  );
};
