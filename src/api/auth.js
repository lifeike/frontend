import axios from "@/utils/service"

export function signIn(data) {
  return axios({
    url: `/auth/signIn`,
    method: "post",
    data,
  })
}

export function signUp(data) {
  return axios({
    url: `/auth/sign-up`,
    method: "post",
    data,
  })
}
