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
    <img src={require("../../assets/img/car.png")} alt=""></img>
  </Paper>
)

const SignIn = (props) => {
  const n = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  if (localStorage.getItem("token")) {
    n("/users")
  }

  const onSubmit = (data) => {
    signIn(data).then((res) => {
      localStorage.setItem("token", res.token)
      localStorage.setItem("refresh-token", res.refreshToken)
      localStorage.setItem("user", JSON.stringify(res.user))
      n("/users")
    })
  }

  const [checked, setChecked] = React.useState(true)
  useEffect(() => {
    setChecked(false)
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="feeco" {...register("userName")} />
        <input defaultValue="lifeike1992" {...register("password")} />
        <input type="submit" />
      </form>
      <Box sx={{ height: 300 }}>
        <div>
          <Box sx={{ width: "100%" }}>
            <Collapse orientation="horizontal" in={checked} collapsedSize={"20%"} timeout={2000}>
              {icon}
            </Collapse>
          </Box>
        </div>
      </Box>
    </>
  )
}

export default SignIn
