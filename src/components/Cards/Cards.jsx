import React, { useState, useEffect, useContext} from 'react';
import { ProductContext } from '../../context/ProductContext';
import './Cards.css'; 
import { useCart } from '../../hook/useCart';




const Product = ({ product}) => {
  const { name, img, sizes, price } = product;
  const { addToCart} = useCart()

  return (

    <div className="cards"> 
      <img src={img} alt={name} />
      <h2>{name}</h2>
      {/* <p>Tallas: {sizes}</p> */}
      <p>${price}</p>
      <button className='btncomprar' onClick={() => addToCart(product)}>Añadir al carrito</button>
    </div>

  );
};

const Cards = () => {
const {allProducts, filteredProducts} = useContext(ProductContext)


  return (

    <div className="card-container">
        {
          filteredProducts.length ?(
            <>
            {filteredProducts.map((product) => (
                <Product
                 key={product.id}
                  product={product}

            />
            ))}
            </>
           ) :(
            <>
            {allProducts.map((product) => (
              <Product
              key={product.id}
              product={product}

            />
            ))}
            </>
          )
        } 
      
    </div>
   
    
  )
};

export default Cards;
