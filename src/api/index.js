import axios from "axios"
import { toast, ToastContainer } from "react-toastify"

// create an axios instance
// https://ryh8y98aga.us-west-2.awsapprunner.com/
console.log(process.env)
console.log(process.env.REACT_APP_NOT_SECRET_CODE)
console.log(process.env.NODE_ENV == "development")
//trigger
const service = axios.create({
  // baseURL: process.env.NODE_ENV == "development" ? "http://localhost:8080" : "http://ec2-54-166-223-204.compute-1.amazonaws.com/",
  baseURL: "http://ec2-44-202-163-115.compute-1.amazonaws.com",
  timeout: 50000,
  headers: { "content-type": "application/json;charset=UTF-8" },
})
// request interceptor
service.interceptors.request.use(
  (config) => {
    let access_token = localStorage.getItem("token")
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
    console.log(error.response.data)
    toast.error(error.response?.data)
    return
  }
)

export default service
