/* eslint-disable react/prop-types */
// import { useFilters } from '../hooks/useFilters'
// import { useCart } from '../hooks/useCart'
import './Footer.css'

export default function Footer () {
  // const { filters } = useFilters()
  // const { cart } = useCart()
  return (

    <footer className='footer'>
      {/* {JSON.stringify(filters, null, 2)} */}
      <h4>Playground Shopping Cart ⚛️ <span>@ChrisSCR04</span></h4>
      <h5>From &quot;Shopping Cart with useContext and useReducer&quot; <span>&nbsp;@midudev</span></h5>
      {/* {JSON.stringify(cart, null, 2)} */}
    </footer>
  )
}
