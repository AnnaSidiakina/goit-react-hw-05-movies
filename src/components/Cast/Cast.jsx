import { nanoid } from 'nanoid';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'APIService/API';
import {
  CastList,
  ImgWrapper,
  CastImg,
  CastInfo,
  CastName,
} from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function addCast() {
      if (movieId) {
        try {
          const { cast } = await getCastMovie(movieId);
          setCast(cast);
          return cast;
        } catch (error) {
          console.log(error.message);
        }
      }
    }
    addCast(movieId);
  }, [movieId]);

  return (
    <>
      {cast && (
        <CastList>
          {cast.map(actor => {
            const poster = actor.profile_path
              ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
              : 'https://cdn.pixabay.com/photo/2017/04/15/16/59/skeleton-2232884_960_720.jpg';
            return (
              <li key={nanoid()}>
                <ImgWrapper>
                  <CastImg src={poster} alt={actor.name} />
                </ImgWrapper>
                <CastInfo>
                  Name: <CastName>{actor.name}</CastName>
                </CastInfo>
                <CastInfo>
                  Character:
                  <CastName>{actor.character}</CastName>
                </CastInfo>
              </li>
            );
          })}
        </CastList>
      )}
      <CastInfo>
        Sorry, there is no information about the cast for this movie.
      </CastInfo>
    </>
  );
};
export default Cast;
