import axios from "@/utils/service"

export function getUser(data) {
  return axios({
    url: `/user/getUser`,
    method: "get",
    data,
  })
}
export function searchUser({ keyword }) {
  return axios({
    url: `/user/search?keyword=${keyword}`,
    method: "get",
  })
}
