import * as React from "react"
import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom"

export function RequireAuth({ children }) {
  const location = useLocation()

  if (!JSON.parse(localStorage.getItem("session"))?.access_token) {
    return <Navigate to="/" state={{ from: location }} replace />
  }
  return children
}
