import './Cart.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useId } from 'react'
import { useCart } from '../../hook/useCart'
import cartIcon from '../../assets/image 5.png';

function CartItem ({ img, price, name, quantity, addToCart, deleteFromCart, removeFromCart }) {

  // const total = calculateTotalPriceArt({ price, quantity });

  return (
    <div className='art'>

      <img
        src={img}
        alt={name}
      />

      <div className='detalle'>

      <div className='titulo'>
        <strong>{name}</strong>
        <span>Precio: ${price}</span>
      </div>

      <footer >
        <div className='cantidad'>
          <button className='mas' onClick={addToCart}>+</button>
          <span>{quantity}</span> 
          <button className='menos' onClick={removeFromCart}>-</button>
        </div>

        <div className='papelera'>
          <button className='papelerabtn' onClick={deleteFromCart}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </footer>

      </div>

      {/* <div className='totalart'>
        <span>Precio total: </span>
      </div> */}

    </div>
  )
}

// function calculateTotalPriceArt(product) {
//   const { price, quantity } = product;
//   return price * quantity;
// }

// function calculateTotalPriceArt(CartItem){
//   let totalPriceArt = 0;
//   CartItem.forEach(product => {
//     const productPrice = product.price * product.quantity;
//   });
//   return totalPriceArt;
// }



function calculateTotalPrice(cart) {
  let totalPrice = 0;

  cart.forEach(product => {
    const productPrice = product.price * product.quantity;
    totalPrice += productPrice;
  });
  
  return  totalPrice 
}

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart, removeFromCart, deleteFromCart } = useCart()

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
              removeFromCart={() => removeFromCart(product)}
              deleteFromCart={() => deleteFromCart(product)}
              {...product}
            />
          ))}
        </ul>

        <hr />

            <div className='total'>
              <span>Precio total: {calculateTotalPrice(cart)} </span>
            </div>

        <hr />

        <div className='delcont'>
          <button className='delete' onClick={clearCart}>
            Delete all
          </button>
        </div>
      </aside>
    </>
  )
}