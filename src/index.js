import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import store from "./store"
import * as session from "@/utils/session"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "./index.css"

//fullfill user redux profile on  page refresh
if (session.getSession()) {
  store.dispatch({ type: "user/setUser", payload: session.getSession() })
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
