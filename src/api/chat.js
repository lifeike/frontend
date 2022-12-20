import axios from "@/utils/service"

export function createChat(data) {
  return axios({
    url: `/chat/createChat`,
    method: "post",
    data,
  })
}

export function getChats() {
  return axios({
    url: `/chat`,
    method: "get",
  })
}
