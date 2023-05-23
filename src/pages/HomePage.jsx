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
            <img src={Women} alt="women"></img><h2 className='titlewomen'>Women</h2>
            </div>
            <div className='banermen'>
            <Link to={`/men`}><img src={Men} alt="men"></img><h2 className='titlemen'>Men</h2></Link>
            </div>
        </div>
        <Footer />

          </> );      
};

export default HomePage