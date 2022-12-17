import React, { useState, useRef, useEffect, memo } from "react"
import SignInLayout from "@/components/layout/SignInLayout"
import { useForm } from "react-hook-form"
import { connect } from "react-redux"
import * as actionCreators from "@/store/actionCreators/auth"

import Button from "@mui/material/Button"
import DeleteIcon from "@mui/icons-material/Delete"
import SendIcon from "@mui/icons-material/Send"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"

function SignUp(props) {
  const [showPassword, setShowPassword] = useState(true)
  const { register, handleSubmit, resetField } = useForm()
  const onSubmit = (data) => props.signUp(data)
  const handleClear = () => {
    resetField("firstName")
    resetField("lastName")
    resetField("email")
    resetField("password")
  }

  return (
    <SignInLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>first_name</label>
        <input className="block border my-2 outline-none" {...register("firstName", { required: true })} />
        <label>last_name</label>
        <input className="block border my-2 outline-none" {...register("lastName", { required: true })} />
        <label>email</label>
        <input className="block border my-2 outline-none" type="email" {...register("email", { required: true })} />
        <label>password</label>
        <div className="relative">
          <input className="block border my-2 outline-none" type={`${showPassword ? "password" : ""}`} {...register("password", { required: true })} />
          <div onClick={() => setShowPassword(!showPassword)} className="absolute right-0 top-0">
            <RemoveRedEyeIcon />
          </div>
        </div>
        <Button onClick={handleClear} variant="outlined" startIcon={<DeleteIcon />}>
          Clear
        </Button>
        &nbsp; &nbsp; &nbsp;
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>
    </SignInLayout>
  )
}

export default connect(null, actionCreators)(SignUp)
