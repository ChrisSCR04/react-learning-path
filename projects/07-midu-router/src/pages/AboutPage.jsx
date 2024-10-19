import { Link } from './Link'

export default function AboutPage () {
  return (
    <div>
      <h1>About</h1>
      <p>Creando un clon de react router</p>
      <img
        className='tw-followCard-avatar'
        src='https://unavatar.io/github/ChrisSCR04'
        alt='Foto de perfil de ChrisSCR04'
      />
      <Link to='/'>Home</Link>
    </div>
  )
}
