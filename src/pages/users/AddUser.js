import React, { useState, useRef, useEffect, memo } from "react"
import * as actionCreators from "../../store/actionCreators/user"
import { connect } from "react-redux"
import { useForm } from "react-hook-form"

const AddUser = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    props.addUserAction(data)
  }

  return (
    <>
      <h1>add user</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("first_name")} />
        <input {...register("last_name")} />
        <input {...register("email")} />
        <input {...register("gender")} />
        <input {...register("ip_address")} />
        <input type="submit" />
      </form>
    </>
  )
}

export default connect((state) => state, actionCreators)(AddUser)
