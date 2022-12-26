import React, { useState, useRef, useEffect, memo } from "react"
import { connect } from "react-redux"
import HomeLayout from "@/components/layout/HomeLayout"

const ChatRoom = (props) => {
  let ws = null
  useEffect(() => {
    ws = new WebSocket("ws://localhost:8080")
    ws.onopen = (event) => {
      ws.send(JSON.stringify({ type: "new connection", payload: props.user }))
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
      <div className="w-full border border-black grid grid-cols-4">
        <div className="col-span-1 border border-black">
          <div>room list</div>
          <div>room list</div>
          <div>room list</div>
          <div>room list</div>
        </div>
        <div className="col-span-3 border border-black">
          <div> chat area</div>
          <input className="border border-black" type="text" placeholder="" />
          <button className="bg-gray-400 p-2" onClick={sendMessage}>
            send message
          </button>
        </div>
      </div>
    </HomeLayout>
  )
}

export default connect((state) => state.user, null)(ChatRoom)
