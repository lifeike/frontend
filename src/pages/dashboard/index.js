import React, { useState, useRef, useEffect, memo } from "react"
import { connect } from "react-redux"
import HomeLayout from "@/components/layout/HomeLayout"

const Dashboard = (props) => {
  console.log(props)
  return (
    <HomeLayout>
      <h2>Dashboard</h2>
    </HomeLayout>
  )
}

export default connect((state) => state, null)(Dashboard)
