import {React,useContext,useState} from 'react';
import Header from'../components/Header/Header';
import Footer from'../components/Footer/Footer';
import Cards from'../components/Cards/Cards';
import Filter from'../components/Filter/Filter';
import slider from'../assets/slider.png';
import { ProductContext } from '../context/ProductContext';
// import { Carouse } from '../components/Carousel/';

function ProductsPage() {

  const {active, setActive} = useContext(ProductContext)

  const Carousel = () => {
    const images = [
      "https://i.postimg.cc/7h8JczpF/banner2.jpg",
      "https://i.postimg.cc/HWzTFXDb/banner3.jpg",
      "https://i.postimg.cc/DwXkfbDj/banner1.webp",
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
  

  return ( 
    <>
  
      <Header />
      <Carousel />
      <div className='productsbanner'> 
        {/* <img src={slider} className='slider-img'/> */}
      </div>
  

      <Filter />
      <Cards />
      <Footer />
        
    </> 
    );      
};



export default ProductsPage