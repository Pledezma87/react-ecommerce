import React, {useContext, useEffect, useState} from 'react';
import Header from'../components/Header/Header';
import Footer from'../components/Footer/Footer';
import { ProductContext } from '../context/ProductContext';
import { useParams } from 'react-router-dom';

const ProductsDetails = () => {
  const { getProductsByID, addToCart } = useContext(ProductContext);
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();

  const fetchProducts = async (id) => {
    const data = await getProductsByID(id);
    setProductDetail(data);
  };

  useEffect(() => {
    fetchProducts(id);
  }, []);

  return (
  <>
  
    <Header />

    <div className="cards"> 
      <img src={productDetail.img} alt={productDetail.name} />
      <h2>{productDetail.name}</h2>
      {/* <p>Tallas: {sizes}</p> */}
      <p>${productDetail.price}</p>
      <button className='btncomprar' onClick={() => addToCart(ProductsDetails)}>Añadir al carrito</button>
    </div>

    <Footer />

  </>
  );      
};

export default ProductsDetails