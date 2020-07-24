import { states } from '../actions/favorites'

const favorites = (state = { data: {} }, action) => {
  switch (action.type) {
    case states.toggleFavorite.start:
      return { ...state }

    case states.toggleFavorite.success:
      if (state.data.hasOwnProperty(action.data.imdbID)) {
        delete state.data[action.data.imdbID]
        return { ...state }
      }
      state.data[action.data.imdbID] = action.data
      return { ...state }
    
    default:
      return state
  }
}

export default favorites