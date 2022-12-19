import * as USER_API from "@/api/user"
import * as session from "@/utils/session"
import to from "await-to-js"

export function searchUser(data) {
  return async (dispatch, getState) => {
    let [err, response] = await to(USER_API.searchUser(data))
    if (err) return Promise.reject(err.message)
    return response
  }
}
