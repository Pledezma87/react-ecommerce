import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logosmall.png';
import Navbar from '../Navbar/Navbar';
import cartIcon from '../../assets/image 5.png';
import user from '../../assets/image 6.png';

function Header() {


  return (
    <div className='container-header'>

        <div className='container-navbar'>
          <Navbar />
        </div>

        <div className='logo'>
            <Link to={`/`}><img src={logo}></img> </Link>
        </div>

        <div className='user'>
          <a href=""> <img src={user} alt="user" /></a>
        </div>

        <div className='cart'>
          <a href=""> <img src={cartIcon} alt="cart" /></a>
        </div>

    </div>
  )
}

export default Header
