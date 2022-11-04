import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from 'APIService/API';
import { nanoid } from 'nanoid';
import {
  ReviewsList,
  ReviewsItem,
  ReviewsAuthor,
  ReviewsText,
} from './Reviews.styled';

const Reviews = () => {
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

  return (
    <>
      {reviews && (
        <ReviewsList>
          {reviews.length > 0 ? (
            reviews.map(review => {
              return (
                <ReviewsItem key={nanoid()}>
                  <ReviewsAuthor>Author: {review.author}</ReviewsAuthor>
                  <ReviewsText>{review.content}</ReviewsText>
                </ReviewsItem>
              );
            })
          ) : (
            <ReviewsText>
              Sorry, there is no information about the reviews for this movie.
            </ReviewsText>
          )}
        </ReviewsList>
      )}
    </>
  );
};
export default Reviews;
