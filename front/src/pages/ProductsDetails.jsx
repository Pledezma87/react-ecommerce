import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { ProductContext } from '../context/ProductContext';
import { useParams } from 'react-router-dom';
import { useCart } from "../hook/useCart"


const ProductsDetails = () => {
  const { getProductsByID } = useContext(ProductContext);
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();
  const { addToCart } = useCart();

  const fetchProducts = async (id) => {
    const data = await getProductsByID(id);
    setProductDetail(data);
  };

  useEffect(() => {
    fetchProducts(id);
  }, []);

  const handleAddToCart = () => {
    addToCart(productDetail);
  };

  return (
    <>
      <Header />
    
      <div className="product-details">
        <div className='product-img'>
          <img src={productDetail.img} alt={productDetail.name} />
        </div>
        <div className="product-info">
          <h2>{productDetail.name}</h2>
          <div className="product-sizes">
            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
          </div>
          <p className="product-price">${productDetail.price}</p>
          <div className='botonañadir'>
            <button className="add-to-cart" onClick={handleAddToCart}>
              Añadir al carrito
            </button>
          </div>
          <div className='descriptions'>
            <h5>{productDetail.description}</h5>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ProductsDetails;