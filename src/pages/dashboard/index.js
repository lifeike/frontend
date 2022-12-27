import React, { useState, useRef, useEffect, memo } from "react"
import { connect } from "react-redux"
import HomeLayout from "@/components/layout/HomeLayout"

const Dashboard = (props) => {
  console.log(props)
  return (
    <HomeLayout>
      <h2>Dashboard</h2>
      <h2>todo</h2>
      <h4>clean code</h4>
    </HomeLayout>
  )
}

export default connect((state) => state, null)(Dashboard)
