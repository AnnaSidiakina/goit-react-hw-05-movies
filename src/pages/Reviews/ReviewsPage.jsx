import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from 'APIService/API';
import { Reviews } from 'components/Reviews/Reviews';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function addReviews() {
      if (movieId) {
        try {
          const { results } = await getReviewsMovie(movieId);
          setReviews(results);
          return results;
        } catch (error) {
          console.log(error.message);
        }
      }
    }
    addReviews(movieId);
  }, [movieId]);

  return <>{reviews && <Reviews reviews={reviews} />};</>;
};
export default ReviewsPage;
