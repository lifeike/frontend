import * as AUTH_API from "@/api/auth"
import { toast } from "react-toastify"

export function signIn(data) {
  return async (dispatch, getState) => {
    dispatch({ type: "loading/turnOn" })
    let response = await AUTH_API.signIn(data)
    localStorage.setItem("session", JSON.stringify(response))
    dispatch({ type: "users/setUser", payload: response })
    dispatch({ type: "loading/turnOff" })
    return response
  }
}
