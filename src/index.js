import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductProvider } from './context/ProductProvider';
import { CartProvider } from './context/CartContext';
import { Cartnew } from './reducers/cart';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <CartProvider>
      <ProductProvider>
        {/* <Cartnew /> */}
        <App />
      </ProductProvider>
    </CartProvider>
  </React.StrictMode>

);

