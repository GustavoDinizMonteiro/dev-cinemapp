import { states } from '../actions/favorites'

const favorites = (state = { data: [] }, action) => {
  switch (action.type) {
    case states.toggleFavorite.start:
      return { ...state }

    case states.toggleFavorite.success:
      if (state.data.includes(action.data)) {
        return {
          data: state.data.filter(el => el !== action.data)
        }
      }
      return { data: [ ...state.data, action.data ] }
    
    default:
      return state
  }
}

export default favorites