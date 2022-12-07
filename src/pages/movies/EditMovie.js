import React, { useState, useRef, useEffect, memo } from "react"
import { useParams, useSearchParams } from "react-router-dom"

import HomeLayout from "@/components/Layout/HomeLayout"

const EditMovie = (props) => {
  const { id } = useParams()
  useEffect(() => {
    //get movie by id
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

export default EditMovie
