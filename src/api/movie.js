import axios from "./index"

export function getMovie(data) {
  return axios({
    url: `/movie/getMovies`,
    method: "get",
    params: data,
  })
}

export function findMovie(data) {
  console.log(data)
  return axios({
    url: `/movie/findOneMovie`,
    method: "post",
    data,
  })
}
