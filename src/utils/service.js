import axios from "axios"
import * as session from "@/utils/session"
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
    if (error.response?.data == "Invalid Token") {
      service.post("/auth/refresh-token", { refresh_token: session.getSession().refresh_token }).then(
        (res) => {
          session.setSession(res)
          location.reload()
          return axios(error.response.config)
        },
        (err) => (window.location.href = "/")
      )
    }
    toast.error(error.response?.data)
    return Promise.reject(error)
  }
)

export default service
