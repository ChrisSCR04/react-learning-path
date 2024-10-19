import React from 'react'
import Square from './Square'
import { turns } from '../logic/constants'

const TurnDisplay = ({ turn }) => {
  return (
    <section className='turn'>
      <Square isSelected={turn === turns.X}>{turns.X}</Square>
      <Square isSelected={turn === turns.O}>{turns.O}</Square>
    </section>
  )
}

export default TurnDisplay
