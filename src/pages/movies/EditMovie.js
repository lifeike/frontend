import React, { useState, useRef, useEffect, memo } from "react"
import { useForm } from "react-hook-form"
import { useParams, useSearchParams } from "react-router-dom"
import { connect } from "react-redux"
import * as actionCreators from "@/store/actionCreators/movie"

import HomeLayout from "@/components/Layout/HomeLayout"
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory"
import { ConstructionOutlined } from "@mui/icons-material"

const EditMovie = (props) => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  useEffect(() => {
    props.findMovie({ id }).then((res) => setMovie(res))
  }, [])

  //   {
  //     "_id": "638fc75a5defce938142b310",
  //     "Title": "The Valley of Decision",
  //     "US Gross": 9132000,
  //     "Worldwide Gross": 9132000,
  //     "US DVD Sales": null,
  //     "Production Budget": 2160000,
  //     "Release Date": "Dec 31 1944",
  //     "MPAA Rating": null,
  //     "Running Time min": null,
  //     "Distributor": null,
  //     "Source": null,
  //     "Major Genre": null,
  //     "Creative Type": null,
  //     "Director": null,
  //     "Rotten Tomatoes Rating": null,
  //     "IMDB Rating": 7.3,
  //     "IMDB Votes": 682
  // }
  return (
    <HomeLayout>
      <div>
        <h2>Edit Movie</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>title</label>
          <input className="login-form" defaultValue={movie["Title"]} {...register("example")} />
          <input {...register("exampleRequired", { required: true })} />
          <input type="submit" />
        </form>
      </div>
    </HomeLayout>
  )
}

export default connect((state) => state.movie, actionCreators)(EditMovie)
