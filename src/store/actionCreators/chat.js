import * as CHAT_API from "@/api/chat"
import to from "await-to-js"

export function createChat(data) {
  return async (dispatch, getState) => {
    let [err, response] = await to(CHAT_API.createChat(data))
    if (err) {
      return Promise.reject(err.message)
    }
    return response
  }
}
