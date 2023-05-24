import React, { useState, useEffect } from 'react';
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    fetch('http://localhost:3000/stock')
      .then((response) => response.json())
      .then((data) => {
        const productsData = data.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          img: item.img,
          //   sizes: item.sizes,
        }));
        console.log(productsData);
        setProducts(productsData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="card-container"> 
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default Cards;