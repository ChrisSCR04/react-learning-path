import PropTypes from 'prop-types'

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired
}
Movies.propTypes = {
  movies: PropTypes.array.isRequired
}

function PosterFixer ({ movie }) {
  const posterSrc = movie.poster === 'N/A' ? 'https://via.placeholder.com/300x450' : movie.poster

  return (
    <div className='image'>
      <img src={posterSrc} alt={movie.title} />
    </div>
  )
}

PosterFixer.propTypes = {
  movie: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}

function MoviesList ({ movies }) {
  return (
    <ul className='movies'>
      {movies.map(movie => (
        <li className='movie' key={movie.id}>
          <div className='banner__container'>
            <h3>{movie.title}</h3>
            <p>({movie.year})</p>
          </div>
          <PosterFixer movie={movie} />
        </li>))}
    </ul>
  )
}

function NoMovies () {
  return (<p>No se encontraron resultados</p>)
}

export function Movies ({ movies }) {
  const hasResults = movies?.length > 0
  return (
    hasResults ? <MoviesList movies={movies} /> : <NoMovies />
  )
}
