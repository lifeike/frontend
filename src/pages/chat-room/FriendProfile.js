import React, { useState, useRef, useEffect, memo } from "react"
import Avatar from "@mui/material/Avatar"
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined"
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined"

const FriendProfile = (props) => {
  return (
    <>
      <div className="grid place-items-center my-2">
        <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/1366466342354751491/JyhZpbtu_400x400.jpg" sx={{ width: 100, height: 100 }} />
      </div>
      <div className="grid place-items-center">
        <h1 className="py-2 font-bold">complete source for domain names</h1>
        <p className="py-2">Hello world</p>
      </div>
      <div className="grid place-items-center my-4 ">
        <div className="flex space-x-2">
          <ChatOutlinedIcon fontSize="large" />
          <VideoCameraFrontOutlinedIcon fontSize="large" />
        </div>
      </div>
    </>
  )
}

export default FriendProfile
