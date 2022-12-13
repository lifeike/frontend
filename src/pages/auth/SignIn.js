import React, { useState, useRef, useEffect, memo } from "react"
import { useNavigate } from "react-router-dom"
import SignInLayout from "@/components/layout/SignInLayout"
import { connect } from "react-redux"
import * as actionCreators from "@/store/actionCreators/user"
import { useForm } from "react-hook-form"
import Button from "@mui/material/Button"

function SignIn(props) {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    props.signIn(data).then(() => navigate("/dashboard"))
  }

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

export default connect((state) => state.user, actionCreators)(SignIn)
