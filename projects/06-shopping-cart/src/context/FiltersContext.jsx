/* eslint-disable react/prop-types */
import { useState, createContext } from 'react'

// 1. Create a context for the filters
export const FiltersContext = createContext()

// 2. Create a custom hook to consume the filters
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
    maxPrice: 0,
    currentPage: 1,
    itemsPerPage: 20,
    totalItems: 0,
    totalPages: 0
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
