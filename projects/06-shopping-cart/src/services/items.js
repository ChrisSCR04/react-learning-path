export const fetchItems = async () => {
  try {
    const data = await fetch('https://dummyjson.com/products?limit=0')
    const response = await data.json()

    const items = response.products
    const sortedItems = items.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price,
      category: item.category,
      thumbnail: item.thumbnail
    }))

    return sortedItems
  } catch (error) {
    throw new Error('Error fetching items')
  }
}
