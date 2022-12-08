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

export function updateMovie(data) {
  return async (dispatch, getState) => {
    let updateResponse = await movieApi.updateMovie(data)
    return updateResponse
  }
}

export function deleteMovie(data) {
  return async (dispatch, getState) => {
    let updateResponse = await movieApi.deleteMovie(data)
    return updateResponse
  }
}
