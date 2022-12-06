import React, { useState, useRef, useEffect, memo } from "react"
import SignInLayout from "@/components/Layout/SignInLayout"
import { useForm } from "react-hook-form"
import Button from "@mui/material/Button"

export default function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <SignInLayout>
      <form className="">
        <label>Username</label>
        <input className="login-form" {...register("username", { required: true })} />
        <label>Password</label>
        <input className="login-form" {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}
        <div className="flex justify-between ">
          <Button variant="contained" onClick={handleSubmit(onSubmit)}>
            Login
          </Button>
          <Button variant="outlined">Remember me</Button>
        </div>
      </form>
    </SignInLayout>
  )
}
