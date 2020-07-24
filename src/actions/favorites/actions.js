import states from './states'

export default {
  toggleFavorite: id => {
    return async(dispatch) => {
      const start = () => ({ type: states.toggleFavorite.start })
      const success = data => ({ type: states.toggleFavorite.success, data })
      const failure = err => ({ type: states.toggleFavorite.failure, err })
      
      try {
        dispatch(start()) // Required for the real use case where there would be a REST request.
        dispatch(success(id))
      } catch (err) {
        dispatch(failure(err))
      }
    }
  }
}