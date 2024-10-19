import { useContext } from 'react'
import { FiltersContext } from '../context/FiltersContext'

export function useFilters () {
  const { filters } = useContext(FiltersContext)

  const filterProducts = ({ products }) => {
    return products.filter(product => {
      const categoryMatch = filters.category === 'all' || product.category === filters.category
      const PriceMatch = product.price >= filters.minPrice && product.price <= filters.maxPrice

      return categoryMatch && PriceMatch
    })
  }

  const paginateProducts = ({ filteredProducts }) => {
    const indexOfLastItem = filters.currentPage * filters.itemsPerPage
    const indexOfFirstItem = indexOfLastItem - filters.itemsPerPage
    const arraySliced = filteredProducts.slice(indexOfFirstItem, indexOfLastItem)

    return arraySliced
  }

  return { filterProducts, paginateProducts }
}
export default useFilters
