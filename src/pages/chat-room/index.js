import React, { useState, useRef, useEffect, memo } from "react"
import { connect } from "react-redux"
import HomeLayout from "@/components/layout/HomeLayout"
import FriendsList from "./FriendsList"
import FriendProfile from "./FriendProfile"
import ChatArea from "./ChatArea"
import io from "socket.io-client"

const ChatRoom = (props) => {
  const [socket, setSocket] = useState()
  const [connected, setConnected] = useState(false)

  const loadSocket = async () => {
    setSocket(io("http://localhost:8080"))
    await socket.emit("setup", props.user)
    await socket.on("connected", () => setConnected(true))
  }

  useEffect(() => {
    loadSocket()
  }, [])

  return (
    <HomeLayout>
      <div className="grid grid-cols-4 space-x-2 ">
        <div className="col-span-1  chat-columns">{socket && <FriendsList socket={socket} />}</div>
        <div className="col-span-2  chat-columns">
          <ChatArea />
        </div>
        <div className="col-span-1  chat-columns">
          <FriendProfile />
        </div>
      </div>
    </HomeLayout>
  )
}

export default connect((state) => state.user, null)(ChatRoom)
