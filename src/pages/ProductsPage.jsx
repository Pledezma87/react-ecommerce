import {React,useContext,useState,} from 'react';
import Header from'../components/Header/Header';
import Footer from'../components/Footer/Footer';
import Cards from'../components/Cards/Cards';
import Filter from'../components/Filter/Filter';
import { ProductContext } from '../context/ProductContext';
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';

// import { Carouse } from '../components/Carousel/';
import { Cart } from '../components/Cart/Cart';
import { CartProvider } from '../context/CartContext';

function ProductsPage() {

  const {active, setActive} = useContext(ProductContext)

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
        <button onClick={previousImage}><AiOutlineLeft/></button>
        <img src={images[currentImageIndex]} alt="Carousel Image" />
        <button onClick={nextImage}><AiOutlineRight/></button>
      </div>
    );
  };
  

  return ( 
    <>
    <CartProvider>
      <Header />
      <Carousel />
      <div className='productsbanner'> 
        {/* <img src={slider} className='slider-img'/> */}
      </div>
  

          <div className='productsbanner'> 
            <img src={slider} className='slider-img'/>
          </div>
      <Cart />
      <Filter />
      <Cards />
      <Footer />
    </CartProvider>
    </> 
    );      
};



export default ProductsPage