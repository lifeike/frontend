import React, { useState, useRef, useEffect, memo } from "react"
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"
import { connect } from "react-redux"

const Loading = (props) => {
  return (
    <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={props.loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default connect((state) => state.loading, null)(Loading)
