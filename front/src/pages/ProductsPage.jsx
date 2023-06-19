import {React,useContext,useState,} from 'react';
import Header from'../components/Header/Header';
import Footer from'../components/Footer/Footer';
import Cards from'../components/Cards/Cards';
import Filter from'../components/Filter/Filter';
import { ProductContext } from '../context/ProductContext';
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';


function ProductsPage() {



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
  

  return ( 
    <>

      <Header />
      <Carousel />
      <Filter />
      <Cards />
      <Footer />
  
    </> 
    );      
};



export default ProductsPage