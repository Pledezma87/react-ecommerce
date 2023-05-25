import {React, useContext, useState} from 'react'
import { ProductContext } from '../../context/ProductContext'
import "./Filters.css"

function Filter(){
  const{active, handleCheckbox} = useContext(ProductContext)
  const{setActive}= useContext(ProductContext)

  const [filter,setFilter] = useState(false)

  const toggleFilter = () => {
    setFilter( !filter )
  } 
  

  return (
   <div className="container-filters">

      <div className='container-filter container'>
				<div className='icon-filter'onClick={ toggleFilter }>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
						/>
					</svg>
					<span>Filtrar</span>
				</div>
			</div>

       <div className='close'onClick={() => setActive(false)}>
         <h1>x</h1>
       </div>

       <div className={ `filtro-tipos ${ filter ? 'isActive' : '' }` }>
         <spam>Filtro</spam>
         <div className='group-type'>
          <input type='checkbox'onChange={handleCheckbox}name="cargo"id="cargo"/>
          <label htmlFor='cargo'>Cargo</label>
         </div>
         <div className='group-type'>
          <input type='checkbox'onChange={handleCheckbox}name="chandal"id="chandal"/>
          <label htmlFor='chandal'>Chandal</label>
         </div>
         <div className='group-type'>
          <input type='checkbox'onChange={handleCheckbox}name="jogger"id="jogger"/>
          <label htmlFor='jogger'>Jogger</label>
         </div>
       </div>
   </div>


  )
  }

export default Filter