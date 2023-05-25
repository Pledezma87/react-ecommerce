
import React from 'react'
import'./footer.css'
function Footer() {
  return (

    <div className='footer'>

         <div className='titles'>
        <div className='ayuda'>
           <a href=''>Ayuda</a>
              <ul>
              <li><span>Preguntas frecuentes</span></li>
              <li><span>Estado de mi pedido</span></li>
              <li><span>Cómo devolver</span></li>
              <li><span>Tramitar devolución</span></li>
              <li><span>Envíos</span></li>
              <li><span>Tarjeta Regalo</span></li>
            </ul>
        </div>

        <div className='empresa'>
            <a href=''>Empresa</a>
            <ul>
              <li><span>Quines somos</span></li>
              <li><span>Localizador de tiendas</span></li>
              <li><span>Cómo devolver</span></li>
               <li><span>Franquicias</span></li>
              <li><span>Envíos</span></li>
               <li><span>Trabaja con nosotros</span></li>
            </ul>
        </div>    
            <div className='Follow'>
            <a href=''>Follow us!</a>
        </div>
        
         </div>
       </div>
  )
}

export default Footer;