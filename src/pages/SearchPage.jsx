import React, { useContext } from 'react';
import Header from'../components/Header/Header';
import Footer from'../components/Footer/Footer';
import Cards from'../components/Cards/Cards';
import Filter from'../components/Filter/Filter';
import slider from'../assets/slider.png';
import { useLocation } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

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

function SearchPage() {

    const {allProducts} = useContext(ProductContext)
    const location = useLocation()
    console.log(location.state)
    const filteredProducts = allProducts.filter(product =>
		  product.name.includes(location.state.toLowerCase())
	  );
    console.log(filteredProducts)

  return ( 
    <>
    
        <Header />
        <div className='productsbanner'> 
          <img src={slider} className='slider-img'/>
        </div>
        <Filter />
            <div className="card-container"> 
              {filteredProducts.map((product) => (
                <Product
                key={product.id}
                product={product}
                />
              ))}
            </div>
        <Footer />
        
    </> 
  );      
};

export default SearchPage;