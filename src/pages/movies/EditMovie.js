import React, { useState, useRef, useEffect, memo } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { connect } from "react-redux"
import * as actionCreators from "@/store/actionCreators/movie"

import HomeLayout from "@/components/Layout/HomeLayout"
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory"

const EditMovie = (props) => {
  const { id } = useParams()
  useEffect(() => {
    props.findMovie({ id })
  }, [])

  return (
    <HomeLayout>
      <div>
        <h2>EditMovie</h2>
        <div>{id}</div>
      </div>
    </HomeLayout>
  )
}

export default connect((state) => state.movie, actionCreators)(EditMovie)
