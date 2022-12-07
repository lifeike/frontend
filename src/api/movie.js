import axios from "./index"

export function getMovie(data) {
  return axios({
    url: `/movie/getMovies`,
    method: "get",
    params: data,
  })
}
