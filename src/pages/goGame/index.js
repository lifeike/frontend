import React, { useState, useRef, useEffect, memo } from "react"

const GoGame = (props) => {
  const [ws, setWs] = useState(new WebSocket("ws://localhost:8082"))
  useEffect(() => {
    ws.onopen = (event) => {
      ws.send(JSON.stringify({ type: "new connection", payload: props.user }))
    }
    ws.onmessage = function (message) {
      let response = JSON.parse(message.data)
      setMessageList((messageList) => [...messageList, response.message])
    }
    //clean up function
    return () => ws.close()
  }, [])

  return (
    <div>
      <h2>GoGame</h2>
    </div>
  )
}

export default GoGame
