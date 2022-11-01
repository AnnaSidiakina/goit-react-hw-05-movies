import React from 'react';
import { Link } from 'react-router-dom';

export const MovieList = ({ moviesArray }) => {
  return (
    <div>
      <ul>
        {moviesArray.map(movie => {
          return movie.hasOwnProperty('title') ? (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          ) : (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
