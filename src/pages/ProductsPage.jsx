import React from 'react';
import Header from'../components/Header/Header';
import Footer from'../components/Footer/Footer';
import Cards from'../components/Cards/Cards';
import Filter from'../components/Filter/Filter';
import slider from'../assets/slider.png';


function ProductsPage() {
  return ( <>
  
        <Header />
        <div className='productsbanner'> 
        <img src={slider}></img>
        </div>
        <Filter />
        <Cards />
        <Footer />
        
          </> );      
};

export default ProductsPage