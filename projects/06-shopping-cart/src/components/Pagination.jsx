/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext, useEffect, useId, useMemo } from 'react'
import { usePaginate } from '../hooks/usePaginate.js'
import { FiltersContext } from '../context/FiltersContext.jsx'
import { ChevronLeft, ChevronRight, ChevronDoubleLeft, ChevronDoubleRight } from './Icons.jsx'
import './Pagination.css'

export default function Pagination ({ products }) {
  const { filters, setFilters } = useContext(FiltersContext)
  const { handleSetCurrentPage } = usePaginate({ products })

  const valueTotalPages = useMemo(() => {
    return Math.ceil(products.length / filters.itemsPerPage)
  }, [products.length, filters.itemsPerPage])

  const valueTotalItems = useMemo(() => {
    return products.length
  }, [products.length])

  useEffect(() => {
    if (filters.currentPage > valueTotalPages) {
      setFilters(prevState => ({
        ...prevState,
        currentPage: 1
      }))
    }

    const handleSetTotal = () => {
      setFilters(prevState => ({
        ...prevState,
        totalItems: valueTotalItems,
        totalPages: valueTotalPages
      }))
    }
    handleSetTotal()
  }, [filters.currentPage, valueTotalItems, valueTotalPages, setFilters])

  return (

    <div className='pagination__container'>

      <div className='pagination__container-bar'>
        <div className='pagination__container-bar-button'>
          <button
            type='number'
            value={1}
            onClick={handleSetCurrentPage}
          />
          <ChevronDoubleLeft />
        </div>
        <div className='pagination__container-bar-button'>
          <button
            type='number'
            value={(filters.currentPage !== 1 ? filters.currentPage - 1 : 1)}
            onClick={handleSetCurrentPage}
          />
          <ChevronLeft />
        </div>

        <div className='pagination__container-text'>
          <p>{filters.currentPage}/{filters.totalPages === 0 ? 1 : filters.totalPages}
          </p>
        </div>

        <div className='pagination__container-bar-button'>
          <button
            type='number'
            value={(filters.currentPage !== filters.totalPages ? filters.currentPage + 1 : filters.totalPages)}
            onClick={handleSetCurrentPage}
          />
          <ChevronRight />
        </div>
        <div className='pagination__container-bar-button'>
          <button
            type='number'
            value={filters.totalPages}
            onClick={handleSetCurrentPage}
          />
          <ChevronDoubleRight />
        </div>
      </div>
      <div><strong>Results: {valueTotalItems}</strong></div>

    </div>

  )
}
