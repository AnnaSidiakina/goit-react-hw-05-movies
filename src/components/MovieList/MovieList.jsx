import React from 'react';
import { useLocation } from 'react-router-dom';
import { List, ListItem, ListLink } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <List>
        {movies.map(({ id, title, name }) => (
          <ListItem key={id}>
            <ListLink to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </ListLink>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default MovieList;
