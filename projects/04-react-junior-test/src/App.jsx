import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

function App () {
  const { catFact, refreshFact } = useCatFact()
  const { catImage } = useCatImage({ catFact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>React Cat Facts App</h1>

      <button onClick={handleClick}>New random fact</button>

      {catFact && <p>{catFact}</p>}
      {catImage && <img src={catImage} alt={`Image extracted using the first three words for ${catFact}`} />}
    </main>
  )
}

export default App
