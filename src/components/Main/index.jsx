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
        <Route
          path={'/explore'}
          element={<Explore />}
        />
        <Route
          path={'/login'}
          element={<Login />}
        />
        <Route
          path={'/signup'}
          element={<SignUp />}
        />
      </Routes>
      {isLoggedIn ? <Chat /> : <Chat />}
      <Footer />
    </>
  );
};
export default Main;
