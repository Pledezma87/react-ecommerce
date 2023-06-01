import {React, useState,} from 'react';
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';


const Carousel = () => {
    const images = [
      "https://i.postimg.cc/SRmYwnHp/slider3.jpg",
      "https://i.postimg.cc/4x2vVQqH/slider2.png",
      "https://i.postimg.cc/zBg1d2Zk/slider.png",
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
        <button className='botonizq' onClick={previousImage}><AiOutlineLeft/></button>
        <img className='imagenes' src={images[currentImageIndex]} alt="CarouselImage" />
        <button className='botondrch' onClick={nextImage}><AiOutlineRight/></button>
      </div>
    );
  };
  
  export default Carousel;