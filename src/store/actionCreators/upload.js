import * as UPLOAD_API from "@/api/upload"
import * as session from "@/utils/session"
import to from "await-to-js"

export function uploadImage(data) {
  return async (dispatch, getState) => {
    dispatch({ type: "loading/turnOn" })
    const [err, response] = await to(UPLOAD_API.uploadImage(data))
    if (err) {
      dispatch({ type: "loading/turnOff" })
      return Promise.reject("error")
    }
    dispatch({ type: "loading/turnOff" })
    return Promise.resolve(response)
  }
}

export function getAllUploadedImages(data) {
  return async (dispatch, getState) => {
    dispatch({ type: "loading/turnOn" })
    const [err, response] = await to(UPLOAD_API.getAllIamges())
    if (err) {
      dispatch({ type: "loading/turnOff" })
      return Promise.reject("error")
    }
    dispatch({ type: "loading/turnOff" })
    return Promise.resolve(response)
  }
}
