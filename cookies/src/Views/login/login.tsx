import './login.css';
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';
const Login = () => {
  const [x, setX] = useState('');

  const cookies = new Cookies();
  const LoginHandler = () => {
    cookies.set('auth', 'true', { path: '/' });
    setX(cookies.get('auth'));
    window.location.reload();
  };

  return (
    <div>
      Login
      <button onClick={LoginHandler}>Login</button>
    </div>
  );
};

export default Login;
