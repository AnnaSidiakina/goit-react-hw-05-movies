import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListLink,
  MovieImg,
  MovieContainer,
  MovieName,
} from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <List>
        {movies.map(({ id, title, name, poster_path }) => (
          <ListItem key={id}>
            <MovieContainer>
              <ListLink to={`/movies/${id}`} state={{ from: location }}>
                <div>
                  <MovieImg
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : `https://cdn.pixabay.com/photo/2015/03/24/00/46/food-686922_960_720.jpg`
                    }
                  />
                </div>
                <MovieName>{title || name}</MovieName>
              </ListLink>
            </MovieContainer>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string,
    }).isRequired
  ),
  titlePage: PropTypes.string,
};

export default MovieList;
