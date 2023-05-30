import React, {useContext, useEffect, useState} from 'react';
import Header from'../components/Header/Header';
import Footer from'../components/Footer/Footer';
import { ProductContext } from '../context/ProductContext';
import { useParams } from 'react-router-dom';
import { Cart } from '../components/Cart/Cart';
import { useCart } from "../hook/useCart"





const ProductsDetails = () => {
  const { getProductsByID} = useContext(ProductContext);
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();
  const {addToCart} = useCart()

  const fetchProducts = async (id) => {
    const data = await getProductsByID(id);
    setProductDetail(data);
  };

  useEffect(() => {
    fetchProducts(id);
  }, []);

  const handleAddToCart = () => {
    addToCart(productDetail); // Pasar productDetail al addToCart
  };


  return (
  <>
  
    <Header />
    <Cart />
    <div className="cards"> 
      <img src={productDetail.img} alt={productDetail.name} />
      <h2>{productDetail.name}</h2>
      {/* <p>Tallas: {sizes}</p> */}
      <p>${productDetail.price}</p>
      <button className='btncomprar' onClick={handleAddToCart}>Añadir al carrito</button>
    </div>

    <Footer />

  </>
  );      
};

export default ProductsDetails