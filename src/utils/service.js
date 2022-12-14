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
    let access_token = null
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
    if (error.response?.status !== 401) {
      toast.error(error.response?.data)
      return Promise.reject(error)
    }

    axios
      .post(`${baseURL}/auth/refresh-token`, { refresh_token: session.getSession().refresh_token })
      .then(async (res) => {
        session.setSession(res.data)
        store.dispatch({ type: "user/setUser", payload: res.data })
        let request = error.response.config
        request.headers.Authorization = res.data.access_token
        await axios(request)
        location.reload()
      })
      .catch((err) => {
        session.clearSession()
        window.location.href = "/"
      })
      .finally(() => console.log("token refreshed."))
  }
)

export default service
