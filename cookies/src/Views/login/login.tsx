import './login.css';
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';
const Login = () => {
  const cookies = new Cookies();
  const LoginHandler = () => {
    cookies.set('auth', 'true', { path: '/' });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    const data = {
      name: e.target.email.value,
      password: e.target.password.value,
    };

    console.log('====================================');
    console.log(data);
    console.log('====================================');

    fetch('http://localhost:3004/users', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      Login
      <form onSubmit={submitHandler} method="post">
        <input type="text" className="input" name="email" />
        <input type="password" className="input" name="password" />
        <button onClick={LoginHandler}>Login</button>
      </form>
    </div>
  );
};

export default Login;
