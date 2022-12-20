import axios from "@/utils/service"

export function createChat(data) {
  return axios({
    url: `/chat/createChat`,
    method: "post",
    data,
  })
}
