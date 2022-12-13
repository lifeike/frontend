import axios from "axios"
import { toast, ToastContainer } from "react-toastify"

// create an axios instance
console.log(process.env.NODE_ENV)
const service = axios.create({
  baseURL: process.env.NODE_ENV == "development" ? "http://localhost:3000/api/localhost" : "http://localhost:3000/api/v1",
  timeout: 50000,
  headers: { "content-type": "application/json;charset=UTF-8" },
})
// request interceptor
service.interceptors.request.use(
  (config) => {
    let access_token
    if (localStorage.getItem("session")) {
      access_token = JSON.parse(localStorage.getItem("session"))?.access_token
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
      service.post("/auth/refresh-token", { refresh_token: JSON.parse(localStorage.getItem("session")).refresh_token }).then((res) => {
        localStorage.setItem("session", JSON.stringify(res))
        return Promise.resolve(res)
      })
    }
    toast.error(error.response?.data)
    return Promise.reject(error)
  }
)

export default service
