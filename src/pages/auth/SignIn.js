import React, { useState, useRef, useEffect, memo } from "react"
import { Routes, redirect, Route, Link, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom"

import { useForm } from "react-hook-form"
import { signIn } from "../../api/auth"

import Box from "@mui/material/Box"
import Switch from "@mui/material/Switch"
import Paper from "@mui/material/Paper"
import Collapse from "@mui/material/Collapse"
import FormControlLabel from "@mui/material/FormControlLabel"

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
)

const SignIn = (props) => {
  const [checked, setChecked] = React.useState(true)
  const handleChange = () => {
    setChecked((prev) => !prev)
  }

  return (
    <Box sx={{ height: 300 }}>
      <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" />
      <Box
        sx={{
          "& > :not(style)": {
            display: "flex",
            justifyContent: "space-around",
            height: 120,
            width: 250,
          },
        }}>
        <div>
          <Box sx={{ width: "50%" }}>
            <Collapse orientation="horizontal" in={checked} collapsedSize={40}>
              {icon}
            </Collapse>
          </Box>
        </div>
      </Box>
    </Box>
  )
}

export default SignIn
