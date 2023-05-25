import React, { useState, useEffect, useContext} from 'react';
import { ProductContext } from '../../context/ProductContext';
import './Cards.css'; 

const Product = ({ product, addToCart }) => {
  const { name, img, sizes, price } = product;

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

const Cards = ({ addToCart }) => {
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
                 addToCart={addToCart}
            />
            ))}
            </>
           ) :(
            <>
            {allProducts.map((product) => (
              <Product
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
            ))}
            </>
          )
        } 
      
    </div>
   
    
  )
};

export default Cards;
