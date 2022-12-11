import * as React from "react"
import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom"

export function RequireAuth({ children }) {
  const access_token = JSON.parse(localStorage.getItem("session")).access_token
  const location = useLocation()

  if (!access_token) {
    return <Navigate to="/" state={{ from: location }} replace />
  }
  return children
}
