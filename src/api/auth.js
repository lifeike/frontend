import axios from "@/utils/service"

export function signIn(data) {
  return axios({
    url: `/auth/signIn`,
    method: "post",
    data,
  })
}
