import React from 'react';
import Header from'../components/Header/Header';
import Footer from'../components/Footer/Footer';
import Women from '../assets/homewoman.png';
import Men from '../assets/homeman.png';
import {Link} from 'react-router-dom';


function HomePage() {
  return ( <>
        
        <Header />

        <div className='banner'>
            <div className='banerwomen'>
              <img src={Women} className='banerwomen-img' alt="women"/><h2 className='titlewomen'>WOMEN</h2>
            </div>
            <div className='banermen'>
              <Link to={`/men`}><img src={Men} className='banermen-img' alt="men"/><h2 className='titlemen'>MEN</h2></Link>
            </div>
        </div>
        
        <Footer />

          </> );      
};

export default HomePage