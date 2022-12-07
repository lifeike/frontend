import React, { useState, useRef, useEffect, memo } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { connect } from "react-redux"
import * as actionCreators from "@/store/actionCreators/movie"

import HomeLayout from "@/components/Layout/HomeLayout"
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory"
import { ConstructionOutlined } from "@mui/icons-material"

const EditMovie = (props) => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    props.findMovie({ id }).then((res) => setMovie(res))
  }, [])

  return (
    <HomeLayout>
      <div>
        <h2>EditMovie</h2>
        <div>{movie.Title}</div>
      </div>
    </HomeLayout>
  )
}

export default connect((state) => state.movie, actionCreators)(EditMovie)
