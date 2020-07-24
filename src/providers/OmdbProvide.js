export default {
  listMovies: key => fetch(`http://www.omdbapi.com/?apikey=925eba28&s=${key}`).then(res => res.json())
}