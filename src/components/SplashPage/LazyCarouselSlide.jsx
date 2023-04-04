// LazyCarouselSlide.js
import React, { useEffect, useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import LazyImage from './LazyImage';

const LazyCarouselSlide = ({ src, alt, ...props }) => {
  const slideRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imageRef.current.src = src;
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '0px 0px 200px 0px',
      },
    );

    if (slideRef.current) {
      observer.observe(slideRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <Carousel.Slide
      ref={slideRef}
      {...props}
    >
      <LazyImage
        ref={imageRef}
        src={src}
        alt={alt}
      />
    </Carousel.Slide>
  );
};

export default LazyCarouselSlide;
