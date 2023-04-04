import React from 'react';
import LazyImage from './LazyImage';

const Card = ({ children, imgSrc = null, imgAlt = '' }) => {
  return (
    <div
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
    </div>
  );
};

export default Card;
