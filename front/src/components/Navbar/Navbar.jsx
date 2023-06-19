import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

const [ menu , setMenu ]= useState(false);

const toggleMenu = () => {
    setMenu( !menu )
}

  return (

    <header className="Cabecera">

        <button 
        onClick={ toggleMenu }
        className="Cabecera-button">
        <FontAwesomeIcon icon={faBars} size="2xl" className='icon-menu' />
        </button>

        <nav className={ `Cabecera-nav ${ menu ? 'isActive' : '' }` }>
          <ul className="Cabecera-ul">
            <li className="Cabecera-li"><a href="#" className="Cabecera-a">Women</a></li>
            <li className="Cabecera-li"><a href="#" className="Cabecera-a"><Link to={`/men`}>Men</Link></a></li>
            <li className="Cabecera-li"><a href="#" className="Cabecera-a">New Arrivals</a></li>
            <li className="Cabecera-li"><a href="#" className="Cabecera-a">Sale</a></li>
            <li className="Cabecera-li"><a href="#" className="Cabecera-a">About us</a></li>
          </ul>
        </nav>

    </header>
    
  );
};

export default Navbar