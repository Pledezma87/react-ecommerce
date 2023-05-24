import React from 'react';
import { Link } from 'react-router-dom';
import  Navbar from '../../components/Navbar/Navbar';
import logo from '../../assets/logosmall.png';
import cartIcon from '../../assets/image 5.png';
import user from '../../assets/image 6.png';
import lupa from '../../assets/search.png';
import './header.css';

function Header() {

  return (
      <div className='container-header'>

        <div className='container-navbar'>
          <Navbar />
        </div>

        <div className='logo'>
          <Link to={`/`}><img src={logo} className='imagelogo'></img> </Link>
        </div>

        <div className='container-right'>
          <div className='searchbar'>
            <img src={lupa} className='lupa'></img>
            <input type= "text" className="searchinput" placeholder="Search..."></input>
          </div>

          <div className='user'>
            <a href=""> <img src={user} alt="user" /></a>
          </div>

          <div className='cart'>
            <a href=""> <img src={cartIcon} alt="cart" /></a>
          </div>
        </div>

      </div>
  )
}

export default Header
