import './App.css'

import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useState, useCallback } from 'react'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(debounce(search => { getMovies({ search }) }, 400), [])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return

    setSearch(newSearch)

    if (!error) { // Check if there's no error before debouncing
      debouncedGetMovies(newSearch)
    }
  }

  return (
    <div className='page'>
      <header>
        <div className='forms__container'>
          <h1>Buscador de películas</h1>
          <div className='form__container'>
            <form className='form' onSubmit={handleSubmit}>
              <input
                name='query'
                className='search__input'
                placeholder='The Lord of the Rings'
                value={search}
                onChange={handleChange}
                style={{
                  border: '1px solid transparent',
                  borderColor: error ? 'red' : 'transparent',
                  boxSizing: 'border-box'
                }}
              />
              <button className='submit__button' type='submit'>Buscar</button>
              <div className='checkbox__container'>
                <input className='checkbox__input' type='checkbox' onChange={handleSort} checked={sort} />
                <label className='checkbox__label'>Ordenar alfabéticamente</label>

              </div>
            </form>
          </div>

        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
        loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
