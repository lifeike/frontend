import * as React from "react"
import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom"

export function RequireAuth({ children }) {
  const location = useLocation()
  const session = JSON.parse(localStorage.getItem("session"))
  const isAuthenticated = session !== undefined && session?.access_token !== undefined && session?.refresh_token !== undefined
  console.log(isAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />
  }
  return children
}
