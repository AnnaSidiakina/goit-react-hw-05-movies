import { nanoid } from 'nanoid';
import styles from './Reviews.module.css';

export const Reviews = ({ reviews }) => {
  return (
    <>
      <ul className={styles.ReviewsList}>
        {reviews.length > 0 ? (
          reviews.map(review => {
            return (
              <li key={nanoid()} className={styles.ReviewsItem}>
                <h2 className={styles.ReviewsAuthor}>
                  Author: {review.author}
                </h2>
                <p className={styles.ReviewsText}>{review.content}</p>
              </li>
            );
          })
        ) : (
          <p>
            Sorry, there is no information about the reviews for this movie.
          </p>
        )}
      </ul>
    </>
  );
};
