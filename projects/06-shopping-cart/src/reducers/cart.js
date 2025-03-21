export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  const { id } = actionPayload || {}
  const productInCartIndex = state.findIndex(item => item.id === id)

  switch (actionType) {
    case 'ADD_TO_CART': {
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        updateLocalStorage(newState)
        return newState
      } else {
        const newState = ([...state, { ...actionPayload, quantity: 1 }])
        updateLocalStorage(newState)
        return newState
      }
    }
    case 'SUBSTRACT_FROM_CART': {
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity -= 1
        if (newState[productInCartIndex].quantity <= 0) {
          newState.splice(productInCartIndex, 1)
        }
        updateLocalStorage(newState)
        return newState
      }
      break
    }
    case 'REMOVE_FROM_CART':{
      const newState = state.filter((item) => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }
    case 'CLEAR_CART':
      updateLocalStorage([])
      return []
  }
  return state
}
