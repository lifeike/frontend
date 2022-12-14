import axios from "axios"
import jwt_decode from "jwt-decode"
import moment from "moment"

import { baseURL } from "./URL"
import * as session from "@/utils/session"
import store from "@/store"
import { toast, ToastContainer } from "react-toastify"

// create an axios instance
const service = axios.create({
  baseURL,
  timeout: 50000,
  headers: { "content-type": "application/json;charset=UTF-8" },
})
// request interceptor
service.interceptors.request.use(
  async (config) => {
    let expired = null
    if (session.isAuthenticated()) {
      let headers = { Authorization: `${session.getSession().access_token}` }
      config.headers = { ...headers, ...config.headers }
      let exp_time = jwt_decode(session.getSession().access_token).exp
      let now = Math.floor(Date.now() / 1000)
      console.log(exp_time)
      console.log(now)
      expired = exp_time - now < 10
      console.log(exp_time - now)
    }
    if (!expired) return config

    //if expired, get new access token, then request again
    await axios
      .post(`${baseURL}/auth/refresh-token`, { refresh_token: session.getSession().refresh_token })
      .then(async (res) => {
        session.setSession(res.data)
        store.dispatch({ type: "user/setUser", payload: res.data })
        config.headers.Authorization = res.data.access_token
      })
      .catch((err) => {
        session.clearSession()
        window.location.href = "/"
      })
      .finally(() => console.log("token refreshed."))
    return config
  },
  (error) => {
    return error
  }
)

// respone interceptor
service.interceptors.response.use(
  (response) => {
    return response.data
  },
  async (error) => {
    if (error.response?.status !== 401) {
      toast.error(error.response?.data)
      return Promise.reject(error)
    }
  }
)

export default service
