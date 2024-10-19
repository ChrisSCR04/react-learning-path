import React from 'react'
import Square from './Square'

const GameBoard = ({ board, updateBoard }) => {
  return (
    <section className='game'>
      {board.map((square, index) => (
        <Square
          key={index}
          index={index}
          updateBoard={updateBoard}
        >
          {square}
        </Square>
      ))}
    </section>
  )
}

export default GameBoard
