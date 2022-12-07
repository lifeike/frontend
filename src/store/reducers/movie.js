const reducer = (
  state = {
    movieList: [],
    selectedMovie: {},
  },
  action
) => {
  switch (action.type) {
    case "movie/getMovies":
      return { ...state, movieList: action.payload }
    case "movie/setMovieList":
      return { ...state, movieList: action.payload }
    case "movie/selectMovie":
      return { ...state, selectedMovie: action.payload }
    default:
      return state
  }
}

export default reducer
