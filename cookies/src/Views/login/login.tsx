import './login.css';
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';
const Login = () => {
  const cookies = new Cookies();
  const LoginHandler = (e: any) => {
    e.preventDefault();
    cookies.set('auth', 'true', { path: '/' });
    // window.location.reload();

    fetch('http://localhost:3004/users')
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].name === e.target.name.value) {
            if (data[i].password === e.target.password.value) {
              cookies.set('auth', 'true', { path: '/' });
              window.location.reload();
            }
          }
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    const data = {
      name: e.target.email.value,
      password: e.target.password.value,
    };

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
      Register
      <form onSubmit={submitHandler} method="post">
        <input type="text" className="input" name="email" />
        <input type="password" className="input" name="password" />
        <button>Register</button>
      </form>
      Login
      <form onSubmit={LoginHandler}>
        <input type="text" className="input" name="name" />
        <input type="password" className="input" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
