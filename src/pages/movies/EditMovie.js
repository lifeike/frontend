import React, { useState, useRef, useEffect, memo } from "react"
import { useForm } from "react-hook-form"
import { useParams, useSearchParams } from "react-router-dom"
import { connect } from "react-redux"
import * as actionCreators from "@/store/actionCreators/movie"

import HomeLayout from "@/components/Layout/HomeLayout"
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory"
import Button from "@mui/material/Button"

const EditMovie = (props) => {
  const { id } = useParams()
  const [movie, setMovie] = useState()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }

  useEffect(() => {
    props.findMovie({ id }).then((res) => setMovie(res))
  }, [])

  return (
    <HomeLayout>
      <div>
        <h2>Edit Movie</h2>
        {movie && (
          <form>
            <label>title</label>
            <input className="login-form" defaultValue={movie["Title"]} {...register("Title", { required: true })} />
            <label>Director</label>
            <input className="login-form" defaultValue={movie["Director"]} {...register("Director", { required: true })} />
            <Button onClick={handleSubmit(onSubmit)} variant="outlined">
              Save Change
            </Button>
          </form>
        )}
      </div>
    </HomeLayout>
  )
}

export default connect((state) => state.movie, actionCreators)(EditMovie)
