import { useState, useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export const useCatImage = ({ catFact }) => {
  const [catImage, setCatImage] = useState()

  useEffect(() => {
    if (!catFact) return

    const firstThreeWords = catFact ? catFact.split(' ', 3).join(' ') : 'hello'

    fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        const url = `/cat/${_id}/says/${firstThreeWords}`
        setCatImage(url)
      })
  }, [catFact])

  return { catImage: `${CAT_PREFIX_IMAGE_URL}${catImage}` }
}
