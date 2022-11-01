import React from 'react';
import { MovieList } from 'components/MovieList/MovieList';

export const TrendingMoviesList = ({ moviesArray }) => {
  // const [moviesList, setMoviesList] = useState([]);
  return (
    <div>
      <h1>Trending today</h1>
      <MovieList moviesArray={moviesArray} />
    </div>
  );
};
