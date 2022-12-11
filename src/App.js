import Movies from "./pages/movies"
import EditMovie from "./pages/movies/EditMovie"
import SignIn from "./pages/auth/SignIn"
import Dashboard from "./pages/Dashboard"

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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/movies"
          element={
            <Auth.RequireAuth>
              <Movies />
            </Auth.RequireAuth>
          }
        />
        <Route
          path="/edit-movie/:id"
          element={
            <Auth.RequireAuth>
              <EditMovie />
            </Auth.RequireAuth>
          }
        />
      </Routes>
    </>
  )
}

export default App
