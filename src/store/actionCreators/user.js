import * as AUTH_API from "@/api/auth"

export function signIn(data) {
  return async (dispatch, getState) => {
    dispatch({ type: "loading/turnOn" })
    let response = await AUTH_API.signIn(data)
    localStorage.setItem("session", JSON.stringify(response))
    console.log(JSON.parse(localStorage.getItem("session")))
    dispatch({ type: "users/setUser", payload: response.user })
    dispatch({ type: "loading/turnOff" })
    return response
  }
}
