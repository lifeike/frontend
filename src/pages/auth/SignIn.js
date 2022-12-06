import React, { useState, useRef, useEffect, memo } from "react"
import SignInLayout from "@/components/Layout/SignInLayout"
import { useForm } from "react-hook-form"

export default function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <SignInLayout>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label>Username</label>
        <input className="login-form" {...register("username", { required: true })} />
        {/* include validation with required or other standard HTML validation rules */}
        <label>Password</label>
        <input className="login-form" {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}
        <div className="flex justify-between ">
          <input className="bg-red-500 login-button" type="submit" value="login in" />
          <button className="bg-blue-500 login-button" onClick={() => {}}>
            remember me
          </button>
        </div>
      </form>
    </SignInLayout>
  )
}
