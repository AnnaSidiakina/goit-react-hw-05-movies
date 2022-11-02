import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'APIService/API';
import { Cast } from 'components/Cast/Cast';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function addCast() {
      if (movieId) {
        try {
          const { cast } = await getCastMovie(movieId);
          setCast(cast);
          console.log(cast);
          return cast;
        } catch (error) {
          console.log(error.message);
        }
      }
    }
    addCast(movieId);
  }, [movieId]);
  //   console.log(movieId);

  return <>{cast && <Cast cast={cast} />}</>;
};
export default CastPage;
