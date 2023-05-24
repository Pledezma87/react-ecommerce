import React, { useState, useContext }  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  Navbar from '../../components/Navbar/Navbar';
import logo from '../../assets/logosmall.png';
import cartIcon from '../../assets/image 5.png';
import user from '../../assets/image 6.png';
import lupa from '../../assets/search.png';
import './header.css';
import { ProductContext } from '../../context/ProductContext';



function Header() {

  const {valueSearch, onInputChange, onResetForm} = useContext(ProductContext)
  const navigate = useNavigate ()  
  const onSearchSubmit = e => {
		e.preventDefault();
		navigate('/search', {
			state: valueSearch,
		});

		onResetForm();
	};

  return (
      <div className='container-header'>

        <div className='container-navbar'>
          <Navbar />
        </div>

        <div className='logo'>
          <Link to={`/`}><img src={logo} className='imagelogo'></img> </Link>
        </div>

        <div className='container-right'>
          
           
				<form onSubmit={onSearchSubmit}>
                
          <div className='searchbar'>
            <img src={lupa} className='lupa'></img>
            
            <div className="search-bar">
            <input
            type="search"
            name='valueSearch'
            placeholder="Buscar productos..."
            value={valueSearch}
            onChange={onInputChange}
            />
            </div>
         

          </div>
          </form>
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
