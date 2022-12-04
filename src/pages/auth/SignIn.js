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
    <div className="flex">
      <Box sx={{ width: "100%", height: "100%" }}>
        <Collapse orientation="horizontal" in={checked} collapsedSize={"50%"} timeout={3000}>
          <Paper sx={{ m: 1 }} elevation={4}>
            <div className="grid grid-cols-2">
              <img src={require("../../assets/img/car.jpg")} alt=""></img>
              <div className="grid place-items-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input className="border border-black block" defaultValue="feeco" {...register("userName")} />
                  <input className="border border-black block" defaultValue="lifeike1992" {...register("password")} />
                  <input className="block" type="submit" />
                </form>
              </div>
            </div>
          </Paper>
        </Collapse>
      </Box>
    </div>
  )
}

export default SignIn
