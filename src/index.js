import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import store from "./store"
import * as session from "@/utils/session"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import { FirebaseAppProvider, useFirebaseApp } from "reactfire"

const firebaseConfig = {
  apiKey: "AIzaSyDz7vrq6HK226xWCedn0Bb55ezTbuFfv_E",
  authDomain: "devlift-5405d.firebaseapp.com",
  projectId: "devlift-5405d",
  storageBucket: "devlift-5405d.appspot.com",
  messagingSenderId: "636518484012",
  appId: "1:636518484012:web:6c720bd67e404c5ce6a989",
  measurementId: "G-5M917X6B4M",
}

//fullfill user redux profile on  page refresh
if (session.getSession()) {
  store.dispatch({ type: "user/setUser", payload: session.getSession() })
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </FirebaseAppProvider>
)
