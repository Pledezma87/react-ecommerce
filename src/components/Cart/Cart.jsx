import './Cart.css'

import { useId } from 'react'
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
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <img src={cartIcon} alt="" />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          x
        </button>
      </aside>
    </>
  )
}