import React, { useState, useRef, useEffect, memo } from "react"
import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom"
import * as session from "@/utils/session"

import Movies from "@/pages/movies"
import EditMovie from "@/pages/movies/EditMovie"
import SignIn from "@/pages/auth/SignIn"
import SignUp from "@/pages/auth/SignUp"
import Dashboard from "@/pages/dashboard"
import Upload from "@/pages/upload"
import GoogleMapAutoComplete from "@/pages/googleMap.js"
import ChatRoom from "@/pages/chat-room"
import Blog from "@/pages/blog"
import Pdf from "@/pages/pdf"
import GoGame from "@/pages/goGame"

function RequireAuth({ children }) {
  const location = useLocation()
  if (!session.isAuthenticated()) {
    return <Navigate to="/" state={{ from: location }} replace />
  }
  return children
}

const RouteTable = (props) => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/movies"
        element={
          <RequireAuth>
            <Movies />
          </RequireAuth>
        }
      />
      <Route
        path="/edit-movie/:id"
        element={
          <RequireAuth>
            <EditMovie />
          </RequireAuth>
        }
      />
      <Route
        path="/upload"
        element={
          <RequireAuth>
            <Upload />
          </RequireAuth>
        }
      />
      <Route
        path="/google-map-autocomplete"
        element={
          <RequireAuth>
            <GoogleMapAutoComplete />
          </RequireAuth>
        }
      />
      <Route
        path="/chat-room"
        element={
          <RequireAuth>
            <ChatRoom />
          </RequireAuth>
        }
      />
      <Route
        path="/multiplayers-game"
        element={
          <RequireAuth>
            <GoGame />
          </RequireAuth>
        }
      />
      <Route
        path="/blog"
        element={
          <RequireAuth>
            <Blog />
          </RequireAuth>
        }
      />
      <Route
        path="/pdf"
        element={
          <RequireAuth>
            <Pdf />
          </RequireAuth>
        }
      />
    </Routes>
  )
}

export default RouteTable
