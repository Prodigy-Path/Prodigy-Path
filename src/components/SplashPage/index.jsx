/** @format */
import { Carousel } from '@mantine/carousel';
import img1 from '../../images/testimonials/img1.png';
import img2 from '../../images/testimonials/img2.png';
import img3 from '../../images/testimonials/img3.png';
import img4 from '../../images/testimonials/img4.png';
import Autoplay from 'embla-carousel-autoplay';
import { Link } from 'react-router-dom';
import Card from './Card';
import { useRef } from 'react';
const SplashPage = () => {
  const autoplay = useRef(Autoplay({ delay: 17000 }));
  return (
    <>
      <div className="splash">
        <section className="splash__hero">
          <h1 data-testid="heading">Prodigy Path</h1>
          <h3 data-testid="subheading">
            Empowering the Next Generation of Experts
          </h3>

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
                  <span className="splash__title">Mentor Matching:</span> The
                  platform's advanced mentor matching algorithm helps to match
                  mentors with mentees based on their skills, experience, and
                  preferences.
                </p>
              </div>
            </Card>
            <Card>
              <div className="splash__card two">
                <p className="splash__card--content">
                  <span className="splash__title">
                    Real-time Communication:
                  </span>
                  Mentors and mentees can communicate through the platform's
                  built-in messaging system, allowing for real-time and
                  effective communication.
                </p>
              </div>
            </Card>
          </div>
          <div className="splash__row">
            <Card>
              <div className="splash__card three">
                <p className="splash__card--content">
                  <span className="splash__title">Expert Insights:</span> Gain
                  valuable insights and advice from experienced mentors who have
                  been where you are now and can provide the guidance you need
                  to succeed.
                </p>
              </div>
            </Card>
            <Card>
              <div className="splash__card four">
                <p className="splash__card--content">
                  <span className="splash__title">Easy Connections:</span>
                  Connect with like-minded individuals in your field of interest
                  and expand your network, helping you take your career to the
                  next level.
                </p>
              </div>
            </Card>
          </div>
        </section>
        <section className="splash__testimonials">
          <Carousel
            plugins={[autoplay.current]}
            align="start"
            loop
            dragFree
            orientation="vertical"
            mx="auto"
            height={590}
          >
            <Carousel.Slide>
              <img
                src={img1}
                alt="Testimonial: Heading: ProdigyPath is amazing! Body: I never would have thought I'd find a mentor who shares my passion, but ProdigyPath made it possible. I've gained so much knowledge and made valuable connections.
                Attribution: Cartoon person designed by Freepik"
              />
            </Carousel.Slide>

            <Carousel.Slide>
              <img
                src={img2}
                alt="Testimonial: Heading: Great Platform! Body: I was intimidated to enter a new industry, but prodigyPath connected me with the perfect mentor who provided guidance and valuable insights I'm grateful for this platform. Attribution: Cartoon person designed by Freepik"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <img
                src={img3}
                alt="Testimonial: Heading: ProdigyPath kept me current! As a mentor, ProdigyPath has allowed me to give back.and stay current in my field. It's been a rewarding experience for both me and my mentee. Body: 
                Attribution: Cartoon person designed by Freepik"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <img
                src={img4}
                alt="Testimonial: Heading: ProdigyPath changed my life! Body: As a busy professional, I appreciate the convenience and efficiency of ProdigyPath. It's made mentorship accessible for me. 
                Attribution: Cartoon person designed by Freepik"
              />
            </Carousel.Slide>
          </Carousel>
        </section>
      </div>
    </>
  );
};
export default SplashPage;
