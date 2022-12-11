import axios from "./index"

export function signIn(data) {
  console.log(data)
  return axios({
    url: `/auth/signIn`,
    method: "post",
    data,
  })
}
