import './Cart.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { React, useId, useEffect, useState, useContext} from 'react'
import { useCart } from '../../hook/useCart'
import cartIcon from '../../assets/image 5.png';

/*funcion precio total por articulo*/
function calculateItemTotalPrice(price, quantity) {
  return price * quantity;
}

function CartItem ({ img, price, name, quantity, addToCart, deleteFromCart, removeFromCart }) {

  return (
    <div className='art'>

      <img
        src={img}
        alt={name}
      />

      <div className='detalle'>

        <div className='titulo'>
          <span className='nombreuno'>{name}</span>
          <span className='preciouno'>Precio Unitario: {price}€</span>
        </div>

        <footer >
          <div className='cantidad'>
            <button className='menos' onClick={removeFromCart}>-</button>
            <span>{quantity}</span> 
            <button className='mas' onClick={addToCart}>+</button>
          </div>
        
          <div className='papelera'>
            <button className='papelerabtn' onClick={deleteFromCart}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </footer>

        <div>
          <span>Precio Artículo total: {calculateItemTotalPrice(price, quantity).toFixed(2)}€</span>
        </div>

      </div>

    </div>
  )
}

/* Total cantidad de articulos */
function calculateTotalQuantity(cart) {
  let totalQuantity = 0;

  cart.forEach(product => {
    totalQuantity += product.quantity;
  });

  return totalQuantity;
}

/* precio total del carrito*/
function calculateTotalPrice(cart) {
  let totalPrice = 0;

  cart.forEach(product => {
    const productPrice = product.price * product.quantity;
    totalPrice += productPrice;
  });
  
  return  totalPrice 
}

/*funcion del carrito */
export function Cart () {
  const [isCartOpen, setCartOpen] = useState(false)
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart, removeFromCart, deleteFromCart } = useCart()
  const totalQuantity = calculateTotalQuantity(cart);

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isCartOpen]);


  const toggleCart = () => {
    setCartOpen((prevOpen) => !prevOpen); // Invierte el valor actual de isCartOpen
  };


  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}  onClick={toggleCart}>
        <img className='cart-img' src={cartIcon} alt="" />
        <span className='count-art'>{totalQuantity}</span>
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      {isCartOpen && (
        <aside className='cart'>
            
        <header className='artics'>
          Artículos --
          <span> - {totalQuantity}</span>
        </header>

        <hr />

          <ul>
            {cart.map(product => (
              <CartItem
                key={product.id}
                removeFromCart={() => removeFromCart(product)}
                addToCart={() => addToCart(product)}
                deleteFromCart={() => deleteFromCart(product)}
                {...product}
              />
            ))} 
          </ul>

        <hr />

        <div className='total'>
          <span>Precio total: {calculateTotalPrice(cart).toFixed(2)}€ </span>
        </div>

        <hr />

        <div className='delcont'>
          <button className='delete' onClick={clearCart}>
            Delete all
          </button>
        </div>

      </aside>
      )}
      
    </>
  );
}