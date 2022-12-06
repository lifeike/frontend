import axios from "./index"

export function getUser(data) {
  return axios({
    url: `/user/getUser`,
    method: "get",
    data,
  })
}
export function addUser(data) {
  return axios({
    url: `/user/addUser`,
    method: "post",
    data,
  })
}
export function updateUser(data) {
  return axios({
    url: `/user/updateUser`,
    method: "put",
    data,
  })
}
