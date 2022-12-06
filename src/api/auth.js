import axios from "./index"

export function signIn(data) {
  return axios({
    url: `/auth/signIn`,
    method: "post",
    data,
  })
}
