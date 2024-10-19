/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { Link } from './Link'

export default function SearchPage ({ routeParams }) {
  useEffect(() => {
    document.title = `Buscando: ${routeParams.query}`
  }, [routeParams.query])

  return (
    <>
      <h1>Buscando: {routeParams.query}</h1>
      <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt='Gif de gato buscando' />
      <Link to='/'>Volver al inicio</Link>
    </>
  )
}
