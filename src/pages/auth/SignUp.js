import React, { useState, useRef, useEffect, memo } from "react"
import SignInLayout from "@/components/layout/SignInLayout"

import { useForm } from "react-hook-form"

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
        <input className="block border my-2" type="number" {...register("age", { min: 18, max: 99 })} />
        <label>password</label>
        <input className="block border my-2" type="submit" />
      </form>
    </SignInLayout>
  )
}
