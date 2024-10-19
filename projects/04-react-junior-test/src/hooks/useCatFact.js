import { getRandomFact } from '../logic/getRandomFact.js'
import { useEffect, useState } from 'react'

export const useCatFact = () => {
  const [catFact, setCatFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setCatFact(newFact))
  }

  useEffect(refreshFact, [])

  return { catFact, refreshFact }
}
