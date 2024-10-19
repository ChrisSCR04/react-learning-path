import { useState } from 'react'
import PropTypes from 'prop-types'

TwitterFollowCard.propTypes = {
  userName: PropTypes.string,
  name: PropTypes.string,
  initialIsFollowing: PropTypes.bool
}

export function TwitterFollowCard ({ userName = 'Unknown', name, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'

  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () =>
    setIsFollowing(!isFollowing)

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
          alt=''
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollowing'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
