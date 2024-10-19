/* eslint-disable react/prop-types */
import './Products.css'

import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext.jsx'
import { FiltersContext } from '../context/FiltersContext.jsx'

export function NoProducts () {
  return (
    <div>
      <h2>No products found</h2>
    </div>
  )
}

export function ProductsList ({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()

  const { isChecked, handleCartToggle } = useContext(CartContext)

  const { filters } = useContext(FiltersContext)

  const checkProductInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main>
      <section className='products__container'>

        <ul> {/* TODO: Pagination implementation */}

          {products.slice(0, filters.itemPerPage).map(product => {
            const isProductInCart = checkProductInCart(product)

            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div className='products__container-description'>
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>

                </div>
                <div className='products__container-button'>
                  <button
                    style={{ backgroundColor: isProductInCart ? 'red' : 'green' }}
                    onClick={() => {
                      isProductInCart ? removeFromCart(product) : addToCart(product)
                      isChecked !== true && handleCartToggle()
                    }}
                  >
                    {
                      isProductInCart
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default function Products ({ products }) {
  const hasProducts = products?.length > 0
  return (
    hasProducts ? <ProductsList products={products} /> : <NoProducts />
  )
}
