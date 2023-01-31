/** @format */

import { Link } from 'react-router-dom';
import Card from './Card';
const SplashPage = () => {
  return (
    <>
      <div className="splash">
        <section className="splash__hero">
          <h1>Prodigy Path</h1>
          <h3>Empowering the Next Generation of Experts</h3>

          <Link
            className="btn"
            to="/login"
          >
            LOGIN
          </Link>
        </section>
        <section className="splash__feature">
          <div className="splash__row">
            <Card>
              <div className="splash__card one">
                <p className="splash__card--content">
                  Mentor Matching: The platform's advanced mentor matching
                  algorithm helps to match mentors with mentees based on their
                  skills, experience, and preferences.
                </p>
              </div>
            </Card>
            <Card>
              <div className="splash__card two">
                <p className="splash__card--content">
                  Real-time Communication: Mentors and mentees can communicate
                  through the platform's built-in messaging system, allowing for
                  real-time and effective communication.
                </p>
              </div>
            </Card>
          </div>
          <div className="splash__row">
            <Card>
              <div className="splash__card three">
                <p className="splash__card--content">
                  Expert Insights: Gain valuable insights and advice from
                  experienced mentors who have been where you are now and can
                  provide the guidance you need to succeed.
                </p>
              </div>
            </Card>
            <Card>
              <div className="splash__card four">
                <p className="splash__card--content">
                  Easy Connections: Connect with like-minded individuals in your
                  field of interest and expand your network, helping you take
                  your career to the next level.
                </p>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};
export default SplashPage;
