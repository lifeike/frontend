const reducer = (
  state = {
    movieTable: {},
    selectedMovie: {},
  },
  action
) => {
  switch (action.type) {
    case "movie/getMovieTable":
      return { ...state, movieTable: action.payload }
    case "movie/setMovieTable":
      return { ...state, movieTable: action.payload }
    case "movie/selectedMovie":
      return { ...state, selectedMovie: action.payload }
    default:
      return state
  }
}

export default reducer
