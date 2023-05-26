import {React,useState} from 'react';
import './Carousel.css';

const Carousel = () => {
  const images = [
    "https://i.postimg.cc/QCh8RFZx/pantalon1.png",
    "https://i.postimg.cc/pr1HXcWs/pantalon2.png",
    "https://i.postimg.cc/BZ27SV6b/pantalon3.png",
    "https://i.postimg.cc/zBg1d2Zk/slider.png"
    // Agrega más rutas de imágenes aquí
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button onClick={previousImage}>Previous</button>
      <img src={images[currentImageIndex]} alt="Carousel Image" />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Carousel;