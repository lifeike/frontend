import React, { useState, useRef, useEffect, memo } from "react"
import SignInLayout from "@/components/layout/SignInLayout"
import { useForm } from "react-hook-form"

import Button from "@mui/material/Button"
import DeleteIcon from "@mui/icons-material/Delete"
import SendIcon from "@mui/icons-material/Send"

export default function SignUp() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <SignInLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>first_name</label>
        <input className="block border my-2" {...register("firstName", { required: true })} />
        <label>last_name</label>
        <input className="block border my-2" {...register("lastName", { required: true })} />
        <label>email</label>
        <input className="block border my-2" type="email" {...register("email", { required: true })} />
        <label>password</label>
        <input className="block border my-2" type="password" {...register("password", { required: true })} />
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        &nbsp; &nbsp; &nbsp;
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>
    </SignInLayout>
  )
}
