import {React,useState} from 'react';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';
import './Carousel.css';


const Carousel = () => {
  const images = [
    "https://i.postimg.cc/SRmYwnHp/slider3.jpg",
    "https://i.postimg.cc/4x2vVQqH/slider2.png",
    "https://i.postimg.cc/LsHdg2d8/emptycart-buy.pngnpm startr",
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
    <div className='carousel'>
      <button className='botonizq' onClick={previousImage}>Previous</button>
      <img className='imagenes' src={images[currentImageIndex]} alt="Carousel Image" />
      <button className='botondrch' onClick={nextImage}>Next</button>
    </div>
  );
};

export default Carousel;