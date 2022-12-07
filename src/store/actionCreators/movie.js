import { getMovie } from "@/api/movie"

export function getMovieAction(data) {
  return async (dispatch, getState) => {
    dispatch({ type: "loading/turnOn" })
    let response = await getMovie(data)
    dispatch({ type: "movie/setMovieList", payload: response.movieList })
    dispatch({ type: "loading/turnOff" })
  }
}
