import { Routes, Route } from 'react-router';
import Home from '../../Views/home/home';
import Login from '../../Views/login/login';
import Memes from '../../Views/memes/memes';
import People from '../../Views/People/people';
import Posts from '../../Views/posts/posts';
import Profile from '../../Views/Profile/profile';
import Navbar from '../Navbar/navbar';
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';

const ProtectedRoutes = () => {
  let cookies = new Cookies();
  const auth = cookies.get('auth');
  const routing = (path: string, component: JSX.Element) => {
    return (
      <Route
        path={path}
        element={auth && auth === 'true' ? component : <Login />}
      />
    );
  };

  return (
    <div>
      {auth ? <Navbar /> : ''}
      <Routes>
        {' '}
        <Route path="/login" element={<Login />} />
        {routing('/', <Home />)}
        {routing('/memes', <Memes />)}
        {routing('/people', <People />)}
        {routing('/post', <Posts />)}
        {routing('/profile', <Profile />)}
        {routing('*', <Home />)}
      </Routes>
    </div>
  );
};

export default ProtectedRoutes;
