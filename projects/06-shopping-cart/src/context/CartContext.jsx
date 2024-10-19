/* eslint-disable react/prop-types */
import { createContext, useReducer, useState } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart'

// Testing the reducer without rendering the component
// expect(
//   reducer([], { type: 'ADD_TO_CART', payload: { id: 1 } })
// ).toEqual([{ id: 1, quantity: 1 }])

// export function CartProvider ({ children }) {
//   const [cart, setCart] = useState([])

//   function addToCart (product) {
//     const productInCartIndex = cart.findIndex(item => item.id === product.id)
//     if (productInCartIndex >= 0) {
//       const newCart = structuredClone(cart)
//       newCart[productInCartIndex].quantity += 1
//       return setCart(newCart)
//     }
//     setCart([...cart, { ...product, quantity: 1 }])
//   }

//   function substractFromCart (product) {
//     const productInCartIndex = cart.findIndex(item => item.id === product.id)
//     if (productInCartIndex >= 0) {
//       const newCart = structuredClone(cart)
//       newCart[productInCartIndex].quantity -= 1
//       if (newCart[productInCartIndex].quantity <= 0) {
//         newCart.splice(productInCartIndex, 1)
//       }
//       return setCart(newCart)
//     }
//   }

//   function removeFromCart (product) {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== product.id))
//   }

//   function clearCart () {
//     setCart([])
//   }

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  function addToCart (product) {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  function substractFromCart (product) {
    dispatch({ type: 'SUBSTRACT_FROM_CART', payload: product })
  }

  function removeFromCart (product) {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  }

  function clearCart () {
    dispatch({ type: 'CLEAR_CART' })
  }

  const [isChecked, setIsChecked] = useState(false)

  const handleCartToggle = () => { setIsChecked(!isChecked) }

  const value = { isChecked, handleCartToggle, cart: state, addToCart, substractFromCart, removeFromCart, clearCart }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
