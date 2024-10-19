/* eslint-disable react/prop-types */
import { useState, useContext, useEffect, useId } from 'react'
import { Bars3 } from './Icons.jsx'
import { useFetch } from '../hooks/useFetch'
import { usePaginate } from '../hooks/usePaginate.js'
import { FiltersContext } from '../context/FiltersContext.jsx'
import './Filters.css'

export default function Filters () {
  const { filters, setFilters } = useContext(FiltersContext)
  const { categoryList, priceRange } = useFetch([]) || []
  const { handleSetItemsPerPage } = usePaginate()
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const itemsPerPageFilterId = useId()
  const { minPriceFilterId } = useId()
  const { maxPriceFilterId } = useId()
  const { categoryFilterId } = useId()

  useEffect(() => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: Math.min(...priceRange),
      maxPrice: Math.max(...priceRange)
    }))
  }, [priceRange, setFilters])

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: (event.target.value)
    })
    )
  }

  const handleChangeMaxPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      maxPrice: (event.target.value)
    })
    )
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value,
      currentPage: 1
    })
    )
  }

  const ParseCategories = category => {
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  return (
    <div className='filters'>
      {/* Needs debounce */}
      <button onClick={() => setIsFilterOpen(!isFilterOpen)}><Bars3 />Filters</button>

      {isFilterOpen && (
        <div className='filters__container'>
          <div className='filters__container-price'>
            <div className='filter___container-price-label flex'>
              <label>Price Range</label>
            </div>
            <div className='filters__container-price-values row'>
              <div className='filters__container-price-min-value'>
                <label htmlFor={minPriceFilterId}>Min</label>
                <span className='currency'>$</span>
                <input type='number' id={minPriceFilterId} value={Math.floor(filters.minPrice)} onChange={handleChangeMinPrice} />
              </div>
              <div className='filters__container-price-max-value'>
                <label htmlFor={maxPriceFilterId}>Max</label>
                <span className='currency'>$</span>
                <input type='number' id={maxPriceFilterId} value={Math.round(filters.maxPrice)} onChange={handleChangeMaxPrice} />
              </div>
            </div>
          </div>

          <div className='filters__container-category'>
            <div className='filters__container-category-label flex'>
              <label>Category</label>
            </div>
            <div className='filters__container-category-label row'>
              <label>Current</label>

              <select id={categoryFilterId} onChange={handleChangeCategory}>
                <option value='all'>All</option>
                {categoryList.map(category => (
                  <option key={category} value={category}>
                    {ParseCategories(category)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className='filters__container-items'>
            <div className='filters__container-items-label flex'>
              <label htmlFor={itemsPerPageFilterId}>Items per page</label>
            </div>
            <div className='filters__container-items-select row'>
              <label>Show</label>
              <select name='itemsPerPage' id={itemsPerPageFilterId} onChange={handleSetItemsPerPage}>
                <option value='20'>20</option>
                <option value='40'>40</option>
                <option value='60'>60</option>
                <option value='80'>80</option>
                <option value='100'>100</option>
              </select>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
