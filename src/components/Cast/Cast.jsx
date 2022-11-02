import { nanoid } from 'nanoid';
import styles from './Cast.module.css';

export const Cast = ({ cast }) => {
  return (
    <>
      <ul className={styles.CastList}>
        {cast.length > 0 ? (
          cast.map(actor => {
            const poster = actor.profile_path
              ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
              : 'https://nuft.edu.ua/assets/images/people/no-image.jpg';
            return (
              <li key={nanoid()} className={styles.CastItem}>
                <div className={styles.ImgWrapper}>
                  <img
                    src={poster}
                    alt={actor.name}
                    className={styles.CastImg}
                  />
                </div>
                <p className={styles.CastInfo}>
                  Name: <span className={styles.CastName}>{actor.name}</span>
                </p>
                <p className={styles.CastInfo}>
                  Character:{' '}
                  <span className={styles.CastName}>{actor.character}</span>
                </p>
              </li>
            );
          })
        ) : (
          <p>Sorry, there is no information about the cast for this movie.</p>
        )}
      </ul>
    </>
  );
};
