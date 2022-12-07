import * as movieApi from "@/api/movie"

export function getMovie(data) {
  return async (dispatch, getState) => {
    dispatch({ type: "loading/turnOn" })
    let response = await movieApi.getMovie(data)
    dispatch({ type: "movie/setMovieTable", payload: response })
    dispatch({ type: "loading/turnOff" })
  }
}
