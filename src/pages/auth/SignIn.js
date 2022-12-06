import React, { useState, useRef, useEffect, memo } from "react"
import { Routes, redirect, Route, Link, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom"

import { useForm } from "react-hook-form"
import { signIn } from "../../api/auth"

import Box from "@mui/material/Box"
import Switch from "@mui/material/Switch"
import Paper from "@mui/material/Paper"
import Collapse from "@mui/material/Collapse"
import FormControlLabel from "@mui/material/FormControlLabel"

const SignIn = (props) => {
  const [checked, setChecked] = React.useState(true)

  useEffect(() => {
    //shrink image on first page load
    setChecked((prev) => !prev)
  }, [])

  return (
    <Box sx={{ height: 300 }}>
      <Box
        sx={{
          "& > :not(style)": {
            // display: "flex",
            justifyContent: "space-around",
            // height: 120,
            width: "full",
          },
        }}>
        <div>
          <Box>
            <Collapse orientation="horizontal" timeout={3000} in={checked} collapsedSize={500}>
              <Paper elevation={4}>
                <Box component="div" sx={{ width: 2000, height: "100%" }}>
                  <img src={require("@/assets/img/car.jpg")} alt=""></img>
                </Box>
              </Paper>
            </Collapse>
          </Box>
        </div>
        <div className="w-full h-full border border-black"> hello wrold</div>
      </Box>
    </Box>
  )
}

export default SignIn
