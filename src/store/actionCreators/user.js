import * as AUTH_API from "@/api/auth"

export function signInAction(data) {
  return async (dispatch, getState) => {
    dispatch({ type: "loading/turnOn" })
    let response = await AUTH_API.signIn(data)
    localStorage.setItem("token", response.token)
    dispatch({ type: "users/setUser", payload: response.user })
    dispatch({ type: "loading/turnOff" })
  }
}
