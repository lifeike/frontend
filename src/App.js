import Users from "./pages/users"
import SignIn from "./pages/auth/SignIn"
import { Routes, Route, Outlet, Link } from "react-router-dom"
import Loading from "./components/Loading"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import * as Auth from "./pages/auth"

function App() {
  return (
    <>
      <h1>{process.env.NODE_ENV}</h1>
      <ToastContainer />
      <Loading />
      <Routes>
        <Route path="/">
          <Route path="login" element={<SignIn />} />
          <Route
            path="/users"
            element={
              <Auth.RequireAuth>
                <Users />
              </Auth.RequireAuth>
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
