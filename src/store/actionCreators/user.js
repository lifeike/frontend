import * as AUTH_API from "@/api/auth"

export function signInAction(someValue) {
  return async (dispatch, getState) => {
    dispatch({ type: "loading/turnOn" })
    let response = await AUTH_API.signIn()
    localStorage.setItem("token", response.token)
    dispatch({ type: "users/setUser", payload: response.user })
    dispatch({ type: "loading/turnOff" })
  }
}
