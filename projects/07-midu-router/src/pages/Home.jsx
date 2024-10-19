import { Link } from './Link'

export default function HomePage () {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Pagina inicial</p>
      <Link to='/about'>Acerca de nosotros</Link>
    </div>
  )
}
