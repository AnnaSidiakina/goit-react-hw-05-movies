import { Menu, Link } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Menu>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </Menu>
  );
};
