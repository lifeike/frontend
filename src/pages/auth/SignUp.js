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
        <input className="block border my-2" {...register("firstName", { required: true, maxLength: 20 })} />
        <label>last_name</label>
        <input className="block border my-2" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <label>email</label>
        <input className="block border my-2" type="number" {...register("email")} />
        <label>password</label>
        <input className="block border my-2" type="number" {...register("password")} />
        {/* <input className="block border my-2" type="submit" /> */}
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
