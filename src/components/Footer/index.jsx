/** @format */

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  const { isLoggedIn } = useSelector((state) => state.login);
  return (
    <>
      <footer className="footer">
        <div className="footer__links">
          <div className="footer__column">
            <p className="footer__logo">
              <Link to="/">ProdigyPath</Link>
            </p>
          </div>
          <div className="footer__column">
            <ul>
              <li className="footer__title">ABOUT</li>
              <li className="footer__item">
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                  to="/about"
                >
                  {' '}
                  What's Prodigy Path?
                </Link>
              </li>
              <li className="footer_item">
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                  to="/devs"
                >
                  Meet the Devs
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            {!isLoggedIn ? (
              <ul>
                <li className="footer__title">LINKS</li>
                <li className="footer__item">
                  <Link to="/login">Login</Link>
                </li>
                <li className="footer_item">
                  <Link to="/signup">Signup</Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li className="footer__title">LINKS</li>
                <li className="footer_item">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="footer_item">
                  <Link to="/tasks">Tasks</Link>
                </li>
                <li className="footer_item">
                  <Link to="/explore">Explore</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="footer__column">
            <ul>
              <li className="footer__title">CONTACT</li>
              <li className="footer__item">
                <a href="/">Email</a>
              </li>
              <li className="footer_item">
                <a href="https://github.com/Prodigy-Path/Prodigy-Path">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright">
          <p>&copy;ProdigyPath {year}</p>
          <p>
            <a href="https://github.com/Prodigy-Path/Prodigy-Path">
              Privacy Policy
            </a>
          </p>
          <p>
            <a href="https://github.com/Prodigy-Path/Prodigy-Path">
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
