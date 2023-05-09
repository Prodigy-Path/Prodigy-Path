import { Carousel } from '@mantine/carousel';
import img1 from '../../images/testimonials/img1.png';
import img2 from '../../images/testimonials/img2.png';
import img3 from '../../images/testimonials/img3.png';
import img4 from '../../images/testimonials/img4.png';
import match from '../../images/match.jpg';
import match2 from '../../images/match2.jpg';
import match3 from '../../images/match3.jpg';
import match4 from '../../images/match4.jpg';
import LazyCarouselSlide from './LazyCarouselSlide';
import Autoplay from 'embla-carousel-autoplay';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SplashPage = () => {
  const imgOneAlt = 'Testimonial 1: Cartoon person designed by Freepik';
  const imgTwoAlt = 'Testimonial 2: Cartoon person designed by Freepik';
  const imgThreeAlt = 'Testimonial 3: Cartoon person designed by Freepik';
  const imgFourAlt = 'Testimonial 4: Cartoon person designed by Freepik';

  const autoplay = useRef(Autoplay({ delay: 17000 }));

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
  });

  const [featureRef, featureInView] = useInView({
    threshold: 0.1,
  });

  const [testimonialRef, testimonialInView] = useInView({
    threshold: 0.1,
  });

  const heroAnimation = useAnimation();
  const featureAnimation = useAnimation();
  const testimonialAnimation = useAnimation();
  const [heroVisible, setHeroVisible] = useState(false);
  const [featureVisible, setFeatureVisible] = useState(false);
  const [testimonialVisible, setTestimonialVisible] = useState(false);

  // hero animation
  useEffect(() => {
    if (heroInView) {
      setHeroVisible(true);
      heroAnimation.start('visible');
    } else if (!heroVisible) {
      heroAnimation.start('hidden');
    }
  }, [heroAnimation, heroInView, heroVisible]);

  // feature animation
  useEffect(() => {
    if (featureInView) {
      setFeatureVisible(true);
      featureAnimation.start('visible');
    } else if (!featureVisible) {
      featureAnimation.start('hidden');
    }
  }, [featureAnimation, featureInView, featureVisible]);

  // testimonial animation
  useEffect(() => {
    if (testimonialInView) {
      setTestimonialVisible(true);
      testimonialAnimation.start('visible');
    } else if (!testimonialVisible) {
      testimonialAnimation.start('hidden');
    }
  }, [testimonialAnimation, testimonialInView, testimonialVisible]);
  return (
    <>
      <div className="splash">
        <motion.section
          className="splash__hero"
          ref={heroRef}
          initial="hidden"
          animate={heroAnimation}
          variants={fadeInUp}
          transition={{ duration: 0.25 }}
        >
          <h1 data-testid="heading" className='splash__title'>Prodigy Path</h1>
          <h3 data-testid="subheading">
            Empowering the Next Generation of Experts
          </h3>
          <Link className="btn" to="/login">
            LOGIN
          </Link>
        </motion.section>

        <motion.section
          className="splash__feature"
          ref={featureRef}
          initial="hidden"
          animate={featureAnimation}
          variants={fadeInUp}
          transition={{ duration: 0.25, delay: 0.4 }}
        >
          <div className="splash__feature__content">

            <div className="splash__feature__item">
              <div className='splash__feature--img-text'>
              <img src={match} alt="Two people working together" />
              <div className='splash__text'>

              <h3>Mentor Matching:</h3>
              <p>
                The platform's advanced mentor matching algorithm helps to match
                mentors with mentees based on their skills, experience, and
                preferences.
              </p>
              </div>
              </div>
            </div>
            <div className="splash__feature__item">
              <div className='splash__feature--img-text reverse'>
              <img src={match2} alt="working on an ipad" />
              <div className='splash__text'>

              <h3>Real-time Communication:</h3>
              <p>
                Mentors and mentees can communicate through the platform's
                built-in messaging system, allowing for real-time and
                effective communication.
              </p>
              </div>
              </div>
            </div>
            <div className="splash__feature__item">
              <div className='splash__feature--img-text'>

              <img src={match3} alt="Someone learning expert secrets" />
              <div className='splash__text'>
              <h3>Expert Insights:</h3>

              <p>
                Gain valuable insights and advice from experienced mentors who have
                been where you are now and can provide the guidance you need
                to succeed.
              </p>
              </div>
              </div>
            </div>
            <div className="splash__feature__item">
              <div className='splash__feature--img-text reverse'>

              <img src={match4} alt="puzzle pieces needing connected" />
              <div className='splash__text'>

              <h3>Easy Connections:</h3>
              <p>
                Connect with like-minded individuals in your field of interest
                and expand your network, helping you take your career to the
                next level.
              </p>
              </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="splash__testimonials"
          ref={testimonialRef}
          initial="hidden"
          animate={testimonialAnimation}
          variants={fadeInUp}
          transition={{ duration: 0.25, delay: 0.3 }}
        >
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
              <LazyCarouselSlide
                src={img1}
                alt={imgOneAlt}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <LazyCarouselSlide
                src={img2}
                alt={imgTwoAlt}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <LazyCarouselSlide
                src={img3}
                alt={imgThreeAlt}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <LazyCarouselSlide
                src={img4}
                alt={imgFourAlt}
              />
            </Carousel.Slide>
          </Carousel>
        </motion.section>
      </div>
    </>
  );
};
export default SplashPage;
