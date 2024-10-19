import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  { userName: 'midudev', name: 'Miguel Ángel Durán', isFollowing: true },
  { userName: 'ChrisSCR04', name: 'Christian Cárdenas', isFollowing: false },
  { userName: 'cuchuflim', name: 'Henry Jaramillo', isFollowing: true },
  { userName: 'pheralb', name: 'Pablo Hernández', isFollowing: false }
]

export function App () {
  return (
    <section className='App'>
      <h1>Componente de Seguidor de Twitter</h1>
      {
            users.map(({ userName, name, isFollowing }) => (
              <TwitterFollowCard
                key={userName} // To be replaced for useId from react after the lesson.
                userName={userName}
                name={name}
                initialIsFollowing={isFollowing}
              />
            ))
        }
    </section>
  )
}
