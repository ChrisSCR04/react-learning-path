import Square from './Square'
const WinnerModal = ({ winner, resetGame }) => {
  const winnerText = winner === false ? 'Draw' : 'Winner: '
  if (winner === null) return null
  // Conditionally render the header based on the winner value
  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

        {winner !== false && ( // Only render header if winner is not false (Draw)
          <header className='win'>
            {winner && <Square>{winner}</Square>}
          </header>
        )}

        <footer>
          <button onClick={resetGame}>Try again!</button>
        </footer>
      </div>
    </section>
  )
}
export default WinnerModal
