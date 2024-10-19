import { useContext } from 'react'
import { FiltersContext } from '../context/FiltersContext'

export function usePaginate () {
  const { filters, setFilters } = useContext(FiltersContext)

  const handleSetItemsPerPage = (event) => {
    setFilters(prevState => ({
      ...prevState,
      itemsPerPage: Number(event.target.value),
      currentPage: 1
    })
    )
  }

  const handleSetCurrentPage = (event) => {
    if (Number(event.target.value) === filters.currentPage) return
    setFilters(prevState => ({
      ...prevState,
      currentPage: Number(event.target.value)
    }))
  }

  return ({ handleSetCurrentPage, handleSetItemsPerPage })
}
