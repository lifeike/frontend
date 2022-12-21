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

export function sendMessage(data) {
  return axios({
    url: `/chat/createMessage`,
    method: "post",
    data,
  })
}
