/** @format */

import HeaderComponent from '../Header';
import Login from '../signupLogin/Login';
import SignUp from '../signupLogin/SignUp';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dashboard from '../Dashboard';
import SplashPage from '../SplashPage';
const Main = () => {
  const { isLoggedIn, user } = useSelector((state) => state.login);
  console.log(user);
  return (
    <>
      <Routes>
        <Route
          path={'/'}
          element={isLoggedIn ? <Dashboard /> : <SplashPage />}
        />
        <Route path={'/login'} element={<Login />}></Route>
        <Route path={'/signup'} element={<SignUp />} />
      </Routes>
    </>
  );
};
export default Main;
