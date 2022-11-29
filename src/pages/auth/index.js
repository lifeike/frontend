import * as React from "react"
import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom"

export function RequireAuth({ children }) {
  const session = localStorage.getItem("token")
  const location = useLocation()
  console.log(location)

  if (!session) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}
