import * as movieApi from "@/api/movie"

export function getMovie(data) {
  return async (dispatch, getState) => {
    dispatch({ type: "loading/turnOn" })
    let response = await movieApi.getMovie(data)
    dispatch({ type: "movie/setMovieTable", payload: response })
    dispatch({ type: "loading/turnOff" })
  }
}

export function findMovie(data) {
  return async (dispatch, getState) => {
    let response = await movieApi.findMovie(data)
    dispatch({ type: "movie/selectedMovie", payload: response })
    console.log(response)
    return response
  }
}
