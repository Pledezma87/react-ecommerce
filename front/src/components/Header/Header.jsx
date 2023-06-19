import React, { useEffect, useState, useContext }  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  Navbar from '../../components/Navbar/Navbar';
import logo from '../../assets/PushPull_Logo_Black_on_Transparent.png';
import user from '../../assets/image 6.png';
import lupaimg from '../../assets/lupa.png';
import './header.css';
import { ProductContext } from '../../context/ProductContext';
import { Cart } from '../Cart/Cart';


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

  const [isHeaderFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [ lupa, setLupa ] = useState(false);
  const toggleLupa = () => {setLupa(!lupa)}

  return (

    <div className={`container-header ${isHeaderFixed ? 'header-fixed' : ''}`}>

        <div className='container-navbar'>
          <Navbar />
        </div>

        <div className='logo'>
          <Link to={`/`}><img src={logo} className='imagelogo'></img></Link>
        </div>

        <div className='container-right'>

          <button className='botonlupa' onClick= { toggleLupa }>
            <img src={lupaimg} className='lupa'></img>
          </button>
          
          <form onSubmit={onSearchSubmit}>       
            <div className={ `searchbar ${lupa ? 'isActive' : ''}`}>

                <div className='search-bar'>
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

          <div className='carritoheader'>
            <Cart />
          </div>
          
        </div>

      </div>
  )
}

export default Header
