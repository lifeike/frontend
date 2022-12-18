import React, { useState, useRef, useEffect, memo } from "react"
import HomeLayout from "@/components/layout/HomeLayout"
import FriendsList from "./FriendsList"
import FriendProfile from "./FriendProfile"
import ChatArea from "./ChatArea"

const ChatRoom = (props) => {
  return (
    <HomeLayout>
      <div className="grid grid-cols-4 space-x-2 ">
        <div className="col-span-1  chat-columns">
          <FriendsList />
        </div>
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

export default ChatRoom
