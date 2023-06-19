import {React, useContext, useState} from 'react'
import { ProductContext } from '../../context/ProductContext'
import "./Filter.css"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered  } from '@fortawesome/free-solid-svg-icons';


function Filter(){
  const{active, handleCheckbox} = useContext(ProductContext)
  const{setActive}= useContext(ProductContext)

  const [filtro,setFiltro] = useState(false)

  const toggleFiltro = () => {
    setFiltro( !filtro )
  } 
  

  return (
   <header className="filtro">

        <div className='filtro-head'>
          <button 
          onClick={ toggleFiltro }
          className="filter-button">
          <FontAwesomeIcon icon={faBarsStaggered} size="2xl" className='icon-menu' />
          <span className='title-filtros'>Filtros</span>
          </button>
        </div>

        <nav className={ `filtro-nav ${ filtro ? 'Active' : '' }` }>

          <div className='filtro-close' >
            <span className='x-close' onClick={ toggleFiltro }>x</span>
          </div>

          <ul className="filtro-ul">
            <li className="filtro-li">
              <input type='checkbox'onChange={handleCheckbox}name="cargo"id="cargo"/>
              <label htmlFor='cargo'>Cargo</label>
            </li>
            <li className="filtro-li">
              <input type='checkbox'onChange={handleCheckbox}name="chandal"id="chandal"/>
              <label htmlFor='chandal'>Chandal</label>
            </li>
            <li className="filtro-li">
              <input type='checkbox'onChange={handleCheckbox}name="jogger"id="jogger"/>
              <label htmlFor='jogger'>Jogger</label>
            </li>
          </ul>
        </nav>

        </header>
       
   )
  }

export default Filter