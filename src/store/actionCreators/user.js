import * as AUTH_API from "@/api/auth"
import * as session from "@/utils/session"
import to from "await-to-js"

export function signIn(data) {
  return async (dispatch, getState) => {
    dispatch({ type: "loading/turnOn" })
    let [err, response] = await to(AUTH_API.signIn(data))
    if (err) {
      dispatch({ type: "loading/turnOff" })
      return Promise.reject("error")
    }
    session.setSession(response)
    dispatch({ type: "user/setUser", payload: response })
    dispatch({ type: "loading/turnOff" })
    return Promise.resolve(response)
  }
}
