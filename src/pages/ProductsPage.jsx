import {React,useContext} from 'react';
import Header from'../components/Header/Header';
import Footer from'../components/Footer/Footer';
import Cards from'../components/Cards/Cards';
import Filter from'../components/Filter/Filter';
import slider from'../assets/slider.png';
import { ProductContext } from '../context/ProductContext';

function ProductsPage() {

  const {active, setActive} = useContext(ProductContext)

  return ( 
    <>
  
      <Header />
      <div className='productsbanner'> 
        <img src={slider} className='slider-img'/>
      </div>
  

      <Filter />
      <Cards />
      <Footer />
        
    </> 
    );      
};

export default ProductsPage