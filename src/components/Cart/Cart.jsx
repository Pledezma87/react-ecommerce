import './Cart.css'

import { useId, useState, useEffect } from 'react'
import { useCart } from '../../hook/useCart'
import cartIcon from '../../assets/image 5.png';

function CartItem ({ img, price, name, quantity, addToCart }) {
  return (
    <li>
      <img
        src={img}
        alt={name}
      />
      <div>
        <strong>{name}</strong> - ${price}
      </div>

      <footer>
        <button onClick={addToCart}>-</button>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const [isCartOpen, setCartOpen] = useState(false)
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isCartOpen); // Aplica o remueve la clase 'no-scroll' en el body según el estado del carrito
  }, [isCartOpen]);


  const toggleCart = () => {
    setCartOpen((prevOpen) => !prevOpen); // Invierte el valor actual de isCartOpen
  };

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}  onClick={toggleCart}>
        <img src={cartIcon} alt="" />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      {isCartOpen && (
        <aside className="cart">
          <ul>
            {cart.map((product) => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
              />
            ))}
          </ul>

          <button onClick={clearCart}>x</button>
        </aside>
      )}
    </>
  );
}