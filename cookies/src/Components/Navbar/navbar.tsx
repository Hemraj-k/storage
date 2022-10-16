import './navbar.css';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const Navbar = () => {
  const cookies = new Cookies();

  const Logout = () => {
    cookies.remove('auth');
    window.location.reload();
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/memes">Memes</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/post">Posts</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <button onClick={Logout}>Logout</button>
    </div>
  );
};

export default Navbar;
