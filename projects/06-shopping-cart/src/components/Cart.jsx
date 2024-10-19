/* eslint-disable react/prop-types */
import { CartIcon, ClearCartIcon, PlusCircle, MinusCircle, PayPalIcon } from './Icons'
import { useContext } from 'react'
import { useCart } from '../hooks/useCart'
import { CartContext } from '../context/CartContext'
import './Cart.css'

function calculateTotalPrices (products) {
  // Check if input is an array
  if (!Array.isArray(products)) {
    throw new Error('Input must be an array of products')
  }

  // Return an empty array if the input array is empty
  if (products.length === 0) {
    return []
  }

  const totalPricePerItem = products.map(product => {
    const price = parseFloat(product.price)
    const totalPrice = price * product.quantity
    return { ...product, totalPrice }
  })

  return totalPricePerItem.reduce((acc, product) => acc + product.totalPrice, 0).toFixed(2)
}

export function CartItem ({ thumbnail, price, title, quantity, addToCart, substractFromCart }) {
  return (
    <li>
      <div className='cart__container-img'>
        <img
          src={thumbnail}
          alt={title}
        />
      </div>
      <div className='cart__container-text'>
        <strong>{title}</strong>
        <p>${price}</p>
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button className='cart__button' onClick={addToCart}>
          <PlusCircle />
        </button>
        <button className='cart__button' onClick={substractFromCart}>
          <MinusCircle />
        </button>
      </footer>
    </li>
  )
}

export function CartList ({ cart, addToCart, substractFromCart, clearCart }) {
  const { isChecked, handleCartToggle } = useContext(CartContext)
  return (
    <>
      <button className='cart__button toggle' onClick={handleCartToggle}>
        <CartIcon />
      </button>

      <aside className={`cart ${isChecked ? 'cart-visible' : 'cart-hidden'}`}>
        <h1>Shopping Cart</h1>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              substractFromCart={() => substractFromCart(product)}
              {...product}
            />
          ))}
        </ul>

        <div className='subtotal'>
          <strong>Subtotal</strong>
          <p>${calculateTotalPrices(cart)}</p>
        </div>

        <button className='checkout-cart__btn' onClick={() => { window.location = 'https://paypal.com' }}>
          <PayPalIcon />
          <label />
        </button>

        <button className='clear-cart__btn' onClick={clearCart}>
          <ClearCartIcon />
          <label>Clear Cart</label>
        </button>

      </aside>

    </>
  )
}

export function NoCart () {
  const { isChecked, handleCartToggle } = useContext(CartContext)
  return (
    <>
      <button className='cart__button toggle' onClick={handleCartToggle}>
        <CartIcon />
      </button>
      <aside className={`cart ${isChecked ? 'cart-visible' : 'cart-hidden'}`}>
        <h1>Shopping Cart</h1>
        <strong>No items yet</strong>
      </aside>
    </>
  )
}

export default function Cart () {
  const { cart, addToCart, substractFromCart, clearCart } = useCart()
  const hasCart = cart?.length > 0

  return (
    hasCart ? <CartList cart={cart} addToCart={addToCart} substractFromCart={substractFromCart} clearCart={clearCart} /> : <NoCart />)
}
