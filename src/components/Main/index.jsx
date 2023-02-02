/** @format */
import Login from '../signupLogin/Login';
import SignUp from '../signupLogin/SignUp';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dashboard from '../Dashboard';
import SplashPage from '../SplashPage';
import Explore from '../Explore';
import Footer from '../Footer';
import Chat from '../Chat';
import DevsAbout from '../About/DevsAbout';
import ProdPathAbout from '../About/ProdPathAbout';
import MentorTasks from '../Task/MentorTasks';
import ProtegeTasks from '../Task/ProtegeTasks';

import Cookies from 'universal-cookie';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cookieLogin } from '../store/loginSlice';


import Profile from '../Profile';

const Main = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.login);

  const cookies = new Cookies();
  useEffect(() => {
    const cook = cookies.get('user');
  
    if (cook?.token) {
      dispatch(cookieLogin(cook));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <Routes>
        <Route
          path={'/'}
          element={isLoggedIn ? <Dashboard /> : <SplashPage />}
        />

        <Route
          path={'/explore'}
          element={isLoggedIn ? <Explore /> : <SplashPage />}
        />


        <Route
          path={'/tasks'}
          element={
            <>
              {isLoggedIn && user.role === 'protege' && <ProtegeTasks />}
              {isLoggedIn && user.role === 'mentor' && <MentorTasks />}
            </>
          }
        />

        <Route
          path={'/login'}
          element={<Login />}
        />
        <Route
          path={'/signup'}
          element={<SignUp />}
        />
        <Route
          path={'/devs'}
          element={<DevsAbout />}
        />
        <Route
          path={'/about'}
          element={<ProdPathAbout />}
        />
        <Route
          path={'/profile'}
          element={isLoggedIn ?<Profile /> : <SplashPage/>}
        />

      </Routes>
      {isLoggedIn ? <Chat /> : null}
      <Footer />
    </>
  );
};
export default Main;
