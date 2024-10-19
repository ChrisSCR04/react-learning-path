import { useState, useEffect } from 'react'
import { fetchItems } from '../services/items'

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const [priceRange, setPriceRange] = useState([])

  useEffect(() => {
    fetchItems()
      .then((items) => {
        setProducts(items)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    const uniqueCategories = new Set()
    products.forEach(product => uniqueCategories.add(product.category))
    setCategoryList(Array.from(uniqueCategories))
  }, [products])

  useEffect(() => {
    const uniquePriceRange = new Set()
    products.forEach(product => uniquePriceRange.add(product.price))
    setPriceRange(Array.from(uniquePriceRange))
  }, [products])

  return { isLoading, products, categoryList, priceRange }
}
