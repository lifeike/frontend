import axios from "axios"
import * as session from "@/utils/session"
import store from "@/store"
import { toast, ToastContainer } from "react-toastify"

// create an axios instance
const service = axios.create({
  baseURL: process.env.NODE_ENV == "development" ? "http://localhost:3000/api/localhost" : "http://localhost:3000/api/v1",
  timeout: 50000,
  headers: { "content-type": "application/json;charset=UTF-8" },
})
// request interceptor
service.interceptors.request.use(
  (config) => {
    let access_token = null
    if (session.getSession()) {
      access_token = session.getSession().access_token
    }
    if (access_token) {
      let headers = { Authorization: `${access_token}` }
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
      .post("http://localhost:3000/api/localhost/auth/refresh-token", { refresh_token: session.getSession().refresh_token })
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
