// LazyImage.js
import React from 'react';

const LazyImage = React.forwardRef(({ src, alt, ...props }, ref) => {
  return (
    <img
      ref={ref}
      src=""
      data-src={src}
      alt={alt}
      {...props}
    />
  );
});

export default LazyImage;
