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
    let access_token = localStorage.getItem("session").access_token
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
    toast.error(error.response?.data)
    return
  }
)

export default service
