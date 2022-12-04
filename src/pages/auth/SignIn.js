import React, { useState, useRef, useEffect, memo } from "react"
import { Routes, redirect, Route, Link, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom"
import { useForm } from "react-hook-form"
import { signIn } from "../../api/auth"

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="feeco" {...register("userName")} />
      <input defaultValue="lifeike1992" {...register("password")} />
      <input type="submit" />
    </form>
  )
}

export default SignIn
