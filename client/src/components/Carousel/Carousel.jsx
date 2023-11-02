import './Carousel.css';

import React, { useState, useEffect } from 'react';

const images = [
  '/images/mega.png',
  '/images/carrefour.png',
  '/images/kaufland.png',
  '/images/lidl.png',
  '/images/auchan.png',
  '/images/metro.png',
  '/images/penny.png',
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
    <h1 className="carousel-header"> Parteneri: </h1>
    <div className="carousel">
 
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
    </div>
    </>
  );
};

export default Carousel;