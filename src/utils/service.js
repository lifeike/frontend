import axios from "axios"
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
  (config) => {
    if (session.getSession().access_token) {
      let headers = { Authorization: `${session.getSession().access_token}` }
      config.headers = { ...headers, ...config.headers }
    }
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

    axios
      .post(`${baseURL}/auth/refresh-token`, { refresh_token: session.getSession().refresh_token })
      .then((res) => {
        session.setSession(res.data)
        store.dispatch({ type: "user/setUser", payload: res.data })
        location.reload()
      })
      .catch((err) => {
        window.location.href = "/"
      })
      .finally(() => console.log("token refreshed."))
  }
)

export default service
