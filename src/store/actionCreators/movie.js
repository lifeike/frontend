import { getMovie } from "@/api/movie"

export function getMovieAction(someValue) {
  return async (dispatch, getState) => {
    dispatch({ type: "loading/turnOn" })
    let response = await getMovie()
    dispatch({ type: "movie/setMoviews", payload: response })
    dispatch({ type: "loading/turnOff" })
  }
}
