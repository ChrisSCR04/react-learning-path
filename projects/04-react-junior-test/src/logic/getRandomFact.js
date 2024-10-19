const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  try {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status}`)
    }
    const data = await res.json()
    const { fact } = data
    return fact
  } catch (error) {
    console.error('Error fetching cat fact:', error)

    return 'Failed to fetch cat fact. Please try again later.'
  }
}
