import axios from "./index"

export function getMovie(data) {
  return axios({
    url: `/movie/getMovies`,
    method: "get",
    params: data,
  })
}

export function findMovie(data) {
  return axios({
    url: `/movie/findOneMovie`,
    method: "post",
    data,
  })
}

export function updateMovie(data) {
  return axios({
    url: `/movie/updateMovie/${data.id}`,
    method: "post",
    data: data.object,
  })
}

export function deleteMovie(data) {
  console.log(data)
  return axios({
    url: `/movie/deleteMovie/${data.id}`,
    method: "delete",
  })
}
