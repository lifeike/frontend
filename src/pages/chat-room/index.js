import React, { useState, useRef, useEffect, memo } from "react"
import HomeLayout from "@/components/layout/HomeLayout"

const ChatRoom = (props) => {
  let ws = null
  useEffect(() => {
    ws = new WebSocket("ws://localhost:8080")
    ws.onopen = (event) => {
      ws.send(JSON.stringify("client established connection."))
    }
    ws.onmessage = function (message) {
      console.log(message.data)
    }
    //clean up function
    return () => ws.close()
  }, [])

  const sendMessage = async () => {
    ws.send("你好阿")
  }

  return (
    <HomeLayout>
      <h2>should be under APP component or index.js file.</h2>
      <h2>for demonstration purpose, init WebSocket in this component only</h2>
      <h2>example: https://github.com/websockets/ws/blob/master/examples/server-stats/index.js</h2>
      <button className="bg-gray-400 p-2" onClick={sendMessage}>
        send message
      </button>
    </HomeLayout>
  )
}

export default ChatRoom
