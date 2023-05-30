import {React,useContext} from 'react';
import Header from'../components/Header/Header';
import Footer from'../components/Footer/Footer';
import Cards from'../components/Cards/Cards';
import Filter from'../components/Filter/Filter';
import slider from'../assets/slider.png';
import { Cart } from '../components/Cart/Cart';


function ProductsPage() {

  return ( 
    <>

      <Header />
          <div className='productsbanner'> 
            <img src={slider} className='slider-img'/>
          </div>
      <Cart />
      <Filter />
      <Cards />
      <Footer />
  
    </> 
    );      
};

export default ProductsPage