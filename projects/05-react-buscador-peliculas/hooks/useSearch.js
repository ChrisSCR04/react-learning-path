import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('El campo de busqueda no puede estar vacio')
      return
    }
    if (search.length < 3) {
      setError('Por favor ingrese al menos 3 caracteres')
      return
    }
    if (search.length > 50) {
      setError('Por favor ingrese menos de 50 caracteres')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('Por favor ingrese un texto válido')
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}
