/** @format */

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__links">
          <div className="footer__column">
            <p className="footer__logo">ProdigyPath</p>
          </div>
          <div className="footer__column">
            <ul>
              <li className="footer_title">ABOUT</li>
              <li className="footer_item">
                <Link to="/"> What's Prodigy Path?</Link>
              </li>
              <li className="footer_item">
                <Link to="/">Meet the Devs</Link>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            
          </div>
        </div>
        <div className="footer__copyright"></div>
      </footer>
    </>
  );
};
export default Footer;
