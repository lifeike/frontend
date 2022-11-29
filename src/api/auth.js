import axios from "../api"

export function signIn(data) {
  return axios({
    url: `/auth/signIn`,
    method: "post",
    data,
  })
}
