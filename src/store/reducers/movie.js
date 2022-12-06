const reducer = (
  state = {
    movieList: [],
    selectedMovie: {},
  },
  action
) => {
  switch (action.type) {
    case "movies/getMovies":
      return { ...state, movieList: action.payload }
    case "movies/setUser":
      return { ...state, movieList: action.payload }
    case "movies/selectUser":
      return { ...state, selectedMovie: action.payload }
    default:
      return state
  }
}

export default reducer
