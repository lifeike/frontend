import React, { useState, useRef, useEffect, memo } from "react"
import HomeLayout from "@/components/layout/HomeLayout"

const GoGame = (props) => {
  const [ws, setWs] = useState(new WebSocket("ws://localhost:8082"))
  useEffect(() => {
    ws.onopen = (event) => {
      ws.send("new connection")
    }
    ws.onmessage = function (message) {
      let response = JSON.parse(message.data)
      console.log(response)
    }
    //clean up function
    return () => ws.close()
  }, [])

  return (
    <HomeLayout>
      <h2>GoGame</h2>
    </HomeLayout>
  )
}

export default GoGame
