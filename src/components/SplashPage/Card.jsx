import React, { useEffect, useState } from 'react';
import LazyImage from './LazyImage';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Card = ({ children, imgSrc = null, imgAlt = '' }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };
  const cardAnimation = useAnimation();
  const [cardVisible, setCardVisible] = useState(false);
  const [cardRef, cardInView] = useInView({
    threshold: 0.1,
  });
  useEffect(() => {
    if (cardInView) {
      setCardVisible(true);
      cardAnimation.start('visible');
    } else if (!cardVisible) {
      cardAnimation.start('hidden');
    }
  }, [cardAnimation, cardInView, cardVisible]);
  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={cardAnimation}
      variants={fadeInUp}
      transition={{ duration: 0.55, delay: 0.2}}
      data-testid="card"
      className="card"
    >
      {imgSrc && (
        <div className="card__image">
          <LazyImage
            src={imgSrc}
            alt={imgAlt}
          />
        </div>
      )}
      {children}
    </motion.div>
  );
};

export default Card;
