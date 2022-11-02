import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={styles.Menu}>
      <nav>
        <NavLink to="/" className={styles.MenuItem}>
          Home
        </NavLink>
        <NavLink to="movies" className={styles.MenuItem}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
