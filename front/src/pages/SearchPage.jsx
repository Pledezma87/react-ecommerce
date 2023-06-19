import React, { useContext } from 'react';
import Header from'../components/Header/Header';
import Footer from'../components/Footer/Footer';
import Cards from'../components/Cards/Cards';
import Filter from'../components/Filter/Filter';
import { useLocation, Link} from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { useCart } from "../hook/useCart"
import { Carousel } from 'bootstrap';


const Product = ({ product}) => {
  console.log(product)

    const { name, img, sizes, price } = product;
    const { addToCart} = useCart()

    return (
      <div className="cards"> 
        <Link to={`/products/${product.id}`}><img src={img} alt={name} /></Link>
        <Link to={`/products/${product.id}`}><h2>{name}</h2></Link>
        {/* <p>Tallas: {sizes}</p> */}
        <p>${price}</p>
        <button className='btncomprar' onClick={() => addToCart(product)}>Añadir al carrito</button>
      </div>
    );
  };


function SearchPage() {

    const {allProducts} = useContext(ProductContext)
    const location = useLocation()
/*     console.log(location.state) */
    const filteredProducts = allProducts.filter(product =>
		  product.name.includes(location.state.toLowerCase())
	  );
    /* console.log(filteredProducts) */

  return ( 
    <>
    
        <Header />
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