import * as React from "react"
import * as session from "@/utils/session"
import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom"

export function RequireAuth({ children }) {
  const location = useLocation()
  if (!session.isAuthenticated()) {
    return <Navigate to="/" state={{ from: location }} replace />
  }
  return children
}
