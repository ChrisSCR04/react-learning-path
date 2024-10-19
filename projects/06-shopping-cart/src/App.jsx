import { Header, Products, Footer, Pagination, Cart, Filters } from './components/index.js'
import { useFilters } from './hooks/useFilters.js'
import { useFetch } from './hooks/useFetch.js'
import { IS_DEVELOPMENT } from './config'
import { CartProvider } from './context/CartContext.jsx'

function App () {
  const { isLoading, products } = useFetch()

  const { filterProducts, paginateProducts } = useFilters()

  const filteredProducts = filterProducts({ products })

  const paginatedProducts = paginateProducts({ filteredProducts })

  const NoProducts = filteredProducts?.length === 0

  return (
    <CartProvider>
      <Header />
      {!NoProducts && <Pagination products={filteredProducts} />}
      <Filters />

      {isLoading ? <h1>Loading...</h1> : <Products products={paginatedProducts} />}
      <Pagination products={filteredProducts} />
      <Cart />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
