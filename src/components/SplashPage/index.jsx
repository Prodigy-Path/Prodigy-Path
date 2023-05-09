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
  const [featureRef1, featureInView1] = useInView({
    threshold: 0.1,
  });

  const [featureRef2, featureInView2] = useInView({
    threshold: 0.1,
  });

  const [featureRef3, featureInView3] = useInView({
    threshold: 0.1,
  });
  const [featureRef4, featureInView4] = useInView({
    threshold: 0.1,
  });
  const [testimonialRef, testimonialInView] = useInView({
    threshold: 0.1,
  });

  const slideInLeft = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 },
  };

  const slideInUp = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };

  const heroAnimation = useAnimation();
  const featureAnimation = useAnimation();
  const featureAnimation1 = useAnimation();
  const featureAnimation2 = useAnimation();
  const featureAnimation3 = useAnimation();
  const featureAnimation4 = useAnimation();

  const testimonialAnimation = useAnimation();
  const [heroVisible, setHeroVisible] = useState(false);
  const [featureVisible, setFeatureVisible] = useState(false);
  const [featureVisible1, setFeatureVisible1] = useState(false);
  const [featureVisible2, setFeatureVisible2] = useState(false);
  const [featureVisible3, setFeatureVisible3] = useState(false);
  const [featureVisible4, setFeatureVisible4] = useState(false);
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

  useEffect(() => {
    if (featureInView1) {
      setFeatureVisible1(true);
      featureAnimation1.start('visible');
    } else if (!featureVisible1) {
      featureAnimation1.start('hidden');
    }
  }, [featureAnimation1, featureInView1, featureVisible1]);

  useEffect(() => {
    if (featureInView2) {
      setFeatureVisible2(true);
      featureAnimation2.start('visible');
    } else if (!featureVisible2) {
      featureAnimation2.start('hidden');
    }
  }, [featureAnimation2, featureInView2, featureVisible2]);

  useEffect(() => {
    if (featureInView3) {
      setFeatureVisible3(true);
      featureAnimation3.start('visible');
    } else if (!featureVisible3) {
      featureAnimation3.start('hidden');
    }
  }, [featureAnimation3, featureInView3, featureVisible3]);

  useEffect(() => {
    if (featureInView4) {
      setFeatureVisible4(true);
      featureAnimation4.start('visible');
    } else if (!featureVisible4) {
      featureAnimation4.start('hidden');
    }
  }, [featureAnimation4, featureInView4, featureVisible4]);

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
          <h1
            data-testid="heading"
            className="splash__title"
          >
            Prodigy Path
          </h1>
          <h3 data-testid="subheading">
            Empowering the Next Generation of Experts
          </h3>
          <Link
            className="btn"
            to="/login"
          >
            LOGIN
          </Link>
        </motion.section>

        <section
          className="splash__feature"
          ref={featureRef}
          initial="hidden"
          animate={featureAnimation}
          variants={fadeInUp}
          transition={{ duration: 0.25, delay: 0.4 }}
        >
          <div className="splash__feature__content">
            <div
              className="splash__feature__item"
              ref={featureRef1}
              initial="hidden"
              animate={featureAnimation1}
            >
              <div className="splash__feature--img-text">
                <motion.img
                  src={match}
                  alt="Two people working together"
                  initial="hidden"
                  animate={featureAnimation1}
                  variants={slideInLeft}
                  transition={{ duration: 0.35, delay: 0.2 }}
                />
                <motion.div
                  initial="hidden"
                  animate={featureAnimation1}
                  variants={slideInUp}
                  transition={{ duration: 0.35, delay: 0.2 }}
                  className="splash__text"
                >
                  <h3>Mentor Matching:</h3>
                  <p>
                    The platform's advanced mentor matching algorithm helps to
                    match mentors with mentees based on their skills,
                    experience, and preferences.
                  </p>
                </motion.div>
              </div>
            </div>
            <div
              className="splash__feature__item"
              ref={featureRef2}
              initial="hidden"
              animate={featureAnimation2}
            >
              <div className="splash__feature--img-text reverse">
                <motion.img
                  src={match2}
                  alt="working on an ipad"
                  initial="hidden"
                  animate={featureAnimation2}
                  variants={slideInRight}
                  transition={{ duration: 0.35, delay: 0.2 }}
                />
                <motion.div
                  initial="hidden"
                  animate={featureAnimation2}
                  variants={slideInUp}
                  transition={{ duration: 0.35, delay: 0.2 }}
                  className="splash__text"
                >
                  <h3>Real-time Communication:</h3>
                  <p>
                    Mentors and mentees can communicate through the platform's
                    built-in messaging system, allowing for real-time and
                    effective communication.
                  </p>
                </motion.div>
              </div>
            </div>
            <div
              className="splash__feature__item"
              ref={featureRef3}
              initial="hidden"
              animate={featureAnimation3}
            >
              <div className="splash__feature--img-text">
                <motion.img
                  src={match3}
                  alt="Someone learning expert secrets"
                  initial="hidden"
                  animate={featureAnimation3}
                  variants={slideInLeft}
                  transition={{ duration: 0.35, delay: 0.2 }}
                />
                <motion.div
                  initial="hidden"
                  animate={featureAnimation3}
                  variants={slideInUp}
                  transition={{ duration: 0.35, delay: 0.2 }}
                  className="splash__text"
                >
                  <h3>Expert Insights:</h3>
                  <p>
                    Gain valuable insights and advice from experienced mentors
                    who have been where you are now and can provide the guidance
                    you need to succeed.
                  </p>
                </motion.div>
              </div>
            </div>
            <div
              className="splash__feature__item"
              ref={featureRef4}
              initial="hidden"
              animate={featureAnimation4}
            >
              <div className="splash__feature--img-text reverse">
                <motion.img
                  src={match4}
                  alt="puzzle pieces needing connected"
                  initial="hidden"
                  animate={featureAnimation4}
                  variants={slideInRight}
                  transition={{ duration: 0.35, delay: 0.2 }}
                />
                <motion.div
                  initial="hidden"
                  animate={featureAnimation4}
                  variants={slideInUp}
                  transition={{ duration: 0.35, delay: 0.2 }}
                  className="splash__text"
                >
                  <h3>Easy Connections:</h3>
                  <p>
                    Our platform makes it easy to connect with like-minded
                    individuals in your field of interest. You can build and
                    expand your network, which will help you take your career to
                    the next level.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <motion.section
          className="splash__testimonials"
          ref={testimonialRef}
          initial="hidden"
          animate={testimonialAnimation}
          variants={fadeInUp}
          transition={{ duration: 0.35, delay: 0.2 }}
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
