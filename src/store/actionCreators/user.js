import { getUser, addUser, updateUser } from "../../api/user"

export function getUserAction(someValue) {
  return async (dispatch, getState) => {
    dispatch({ type: "loading/turnOn" })
    let response = await getUser()
    dispatch({ type: "users/setUser", payload: response })
    dispatch({ type: "loading/turnOff" })
  }
}

export function setUserAction(arr) {
  return async (dispatch, getState) => {
    console.log(arr)
    dispatch({ type: "users/setUser", payload: arr })
  }
}

export function addUserAction(data) {
  return async (dispatch, getState) => {
    let added = await addUser(data)
    if (!added) return
    let response = await getUser()
    dispatch({ type: "users/getUser", payload: response })
  }
}

export function updateUserAction(data) {
  return async (dispatch, getState) => {
    await updateUser(data)
    let response = await getUser()
    dispatch({ type: "users/getUser", payload: response })
  }
}

export function selectUserAction(user) {
  return (dispatch, getState) => {
    dispatch({ type: "users/selectUser", payload: user })
  }
}
