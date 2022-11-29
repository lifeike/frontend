import React, { useState, useRef, useEffect, memo } from "react"
import { useForm } from "react-hook-form"
import { connect } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import * as actionCreators from "../../store/actionCreators/user"

const UpdateUser = (props) => {
  const [selectedUser, setselectedUser] = useState()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    props.updateUserAction(data)
  }

  return (
    <>
      <h1>update user</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={props.selectedUser?.first_name} {...register("first_name")} />
        <input defaultValue={props.selectedUser?.last_name} {...register("last_name")} />
        <input defaultValue={props.selectedUser?.email} {...register("email")} />
        <input defaultValue={props.selectedUser?.gender} {...register("gender")} />
        <input defaultValue={props.selectedUser?.ip_address} {...register("ip_address")} />
        <input type="submit" />
      </form>
    </>
  )
}

// export default UpdateUser
export default connect((state) => state.user, actionCreators)(UpdateUser)
