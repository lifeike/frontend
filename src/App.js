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
      <ToastContainer />
      <Loading />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/users"
          element={
            <Auth.RequireAuth>
              <Users />
            </Auth.RequireAuth>
          }
        />
      </Routes>
    </>
  )
}

export default App
