import * as AUTH_API from "@/api/auth"

export function signInAction(data) {
  return async (dispatch, getState) => {
    dispatch({ type: "loading/turnOn" })
    let response = await AUTH_API.signIn(data)
    console.log(response)
    localStorage.setItem("session", response)
    dispatch({ type: "users/setUser", payload: response.user })
    dispatch({ type: "loading/turnOff" })
  }
}
