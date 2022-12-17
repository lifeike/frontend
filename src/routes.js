import React, { useState, useRef, useEffect, memo } from "react"
import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom"
import * as session from "@/utils/session"

import Movies from "@/pages/movies"
import EditMovie from "@/pages/movies/EditMovie"
import SignIn from "@/pages/auth/SignIn"
import Dashboard from "@/pages/dashboard"
import Upload from "@/pages/upload"
import GoogleMapAutoComplete from "@/pages/googleMap.js"
import Chat from "@/pages/chat"
import ChatRoom from "@/pages/chat-room"

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
      <Route path="/dashboard" element={<Dashboard />} />
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
        path="/chat"
        element={
          <RequireAuth>
            <Chat />
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
    </Routes>
  )
}

export default RouteTable
