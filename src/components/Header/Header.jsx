import React from 'react';
import { Link } from 'react-router-dom';
import  Navbar from '../../components/Navbar/Navbar'
import logo from '../../assets/logosmall.png'
function Header() {

  return (
    <div className='container-header'>
        <div className='container-navbar'>
         
           <Navbar />

        </div>
        <div className='logo'>
            <Link to={`/`}><img src={logo}></img> </Link>
        </div>

    </div>
  )
}

export default Header
