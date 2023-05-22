import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

const [ menu , setMenu ]= useState(false);
const toggleMenu = () => {
    setMenu( !menu )
}
  return (
    <div>
        <div className={`container-navbar ${menu ? 'isActive' : ''}`}>
            <div className= 'close-menu'>
            <FontAwesomeIcon icon={faBars} onClick={ toggleMenu }/>
            </div>
            <div className='menu'>
                <ul>
                    <li><a href="#">Women</a></li>
                    <li><Link to={`/men`} />Men</li>
                    <li><a href="#">New Arrivals</a></li>
                    <li><a href="#">Sale</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Navbar